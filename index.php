<!DOCTYPE html>
<html lang="en" class="uk-height-1-1">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Auth</title>
    <!-- UIkit CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.16.17/dist/css/uikit.min.css" />
    <!-- UIkit JS -->
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.17/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.16.17/dist/js/uikit-icons.min.js"></script>
</head>
<body class="uk-height-1-1">
    <div class="uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
        <div class="uk-card uk-card-default uk-width-1-4@m">
            <div id="profile"></div>
            <form class="uk-form-horizontal uk-padding-small" id="auth" method="post">
                <fieldset class="uk-fieldset">
                    <legend class="uk-legend">auth form</legend>
                    <div id="success" class="uk-alert uk-alert-success uk-text-center uk-animation-scale-up uk-hidden" role="alert">
                        <span uk-spinner="ratio: 1" class="uk-text-success"></span>
                        <p>auth success</p>
                        <p class="uk-text-mutted uk-text-small">page will reload in 10 sec</p>
                    </div>
                    <div id="error" class="uk-alert uk-alert-danger uk-text-center uk-animation-scale-up uk-hidden" role="alert">
                        <p>combination login and password not valid</p>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label uk-text-right" for="login">login</label>
                        <div class="uk-form-controls">
                            <div class="uk-inline uk-width-1-1">
                                <span class="uk-form-icon  uk-form-icon-flip" uk-icon="icon: user"></span>
                                <input class="uk-input" id="login" name="login" type="text" aria-label="Not clickable icon">
                            </div>
                        </div>
                    </div>
                    <div class="uk-margin">
                        <label class="uk-form-label uk-text-right" for="password">password</label>
                        <div class="uk-form-controls">
                            <div class="uk-inline uk-width-1-1">
                                <span class="uk-form-icon  uk-form-icon-flip" uk-icon="icon: lock"></span>
                                <input class="uk-input" id="password" name="password" type="password" aria-label="Not clickable icon">
                            </div>
                        </div>
                    </div>
                    <div class="uk-margin uk-text-right">
                        <button type="submit" class="uk-button uk-button-default">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>

    <script src="js.js"></script>

</body>
</html>