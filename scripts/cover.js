var coverDiv;

function FindCover(){
    coverDiv = document.getElementById("coverDiv");
}

function ShowCover() {
    if (window.location.pathname != '/') ShowPersonnal();
    else coverDiv.className = ('hiddenCover, cover');
}

function ReturnToCover(){
    HideAll();

    window.location.hash = "";
    coverDiv.className = ('hiddenCover, shownCover');
}