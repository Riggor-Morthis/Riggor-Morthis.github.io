function ChangeLanguage(target) {
    var path = "";

    switch (target) {
        case 'EN':
            path = "/en" + window.location.pathname;
            break;
        case 'FR':
            path = window.location.pathname.substring(3);
            break;
        default:
            path = "/";
            break;
    }

    window.location.pathname = path;
}