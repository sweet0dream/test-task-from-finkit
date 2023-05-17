const setCookie = (name, value, days = 7, path = '/') => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
}

const getCookie = (name) => {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=')
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')
}

const deleteCookie = (name, path) => {
    setCookie(name, '', -1, path);
    return;
}

const logOut = () => {
    deleteCookie('user');
    window.location.reload();
}

const ViewProfile = (user_cookie) => {
    const user = JSON.parse(user_cookie);
    document.getElementById('profile').outerHTML = "<div class='uk-card-media-top'><img src='" + user.photo + "' alt='user photo'></div><div class='uk-card-body'><h3 class='uk-card-title'>" + user.name + "</h3><p>Birthday: " + user.birthday + "</p><div class='uk-text-right'><button onclick='logOut()' class='uk-button uk-button-danger'>Logout</button></div></div>";
}

if(getCookie('user')) {
    document.getElementById('auth').classList.add('uk-hidden');
    ViewProfile(getCookie('user'));
}

const form = document.getElementById('auth');
form.addEventListener('submit', getData);
function getData(event) {

    event.preventDefault();

    const success = form.querySelector('[id="success"]');
    const error = form.querySelector('[id="error"]');
    const login = form.querySelector('[name="login"]');
    const password = form.querySelector('[name="password"]');

    fetch('auth.php', { 
        method: 'POST',
        body: 'login=' + login.value + '&password=' + password.value,   
        headers:{"content-type": "application/x-www-form-urlencoded"} 
    }).then((response) => {
        if (response.status !== 200) {           
            return Promise.reject();
        }   
        return response.text()
    }).then(function(data) {
        const result = JSON.parse(data);
        if(result.code == 1) {

            setCookie('user', JSON.stringify(result.user));

            if(login.classList.contains('uk-form-danger')) {
                login.classList.remove('uk-form-danger');
            }
            login.classList.add('uk-form-success');

            if(password.classList.contains('uk-form-danger')) {
                password.classList.remove('uk-form-danger');
            }
            password.classList.add('uk-form-success');

            login.disabled = true;
            password.disabled = true;

            if(!error.classList.contains('uk-hidden')) {
                error.classList.add('uk-hidden');
            }
            
            success.classList.remove('uk-hidden');

            function ShowProfile() {
                ViewProfile();
            }

            setTimeout(() => {
                form.classList.add('uk-hidden');
                ViewProfile(JSON.stringify(result.user));
            }, 10000);

        } else {
            login.classList.add('uk-form-danger');
            password.classList.add('uk-form-danger');
            error.classList.remove('uk-hidden');
        }
    }).catch(() => console.log('err'));
}