function ChangeLanguage(target) {
    var path = "";

    switch (target) {
        case 'EN':
            path = "/en" + window.location.pathname + window.location.hash;
            break;
        case 'FR':
            path = window.location.pathname.substring(3) + window.location.hash;
            break;
        default:
            path = "/";
            break;
    }

    window.location.pathname = path;
}