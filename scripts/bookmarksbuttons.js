var personnalButton;
var educationButton;
var experienceButton;
var identityButton;

var personnalDiv;
var educationDiv;
var experienceDiv;
var identityDiv;
var coverDiv;

function FindAllButtons() {
    personnalButton = document.getElementById("persButton");
    educationButton = document.getElementById("univButton");
    experienceButton = document.getElementById("profButton");
    identityButton = document.getElementById("suisButon");
}

function FindAllDivs() {
    personnalDiv = document.getElementById("persDiv");
    //educationDiv = document.getElementById("univDiv");
    experienceDiv = document.getElementById("profDiv");
    identityDiv = document.getElementById("suisDiv");
    coverDiv = document.getElementById("coverDiv");
}

function PickSelectedDiv() {
    switch (window.location.hash) {
        case "#personnal": ShowPersonnal();
            break;
        case "#education": ShowEducation();
            break;
        case "#professional": ShowProfessional();
            break;
        case "#identity": ShowIdentity();
            break;
        default: ShowCover();
    }
}

function LockButton(butt) {
    if (personnalButton == butt) ShowPersonnal();
    else if (educationButton == butt) ShowEducation();
    else if (experienceButton == butt) ShowProfessional();
    else if (identityButton == butt) ShowIdentity();
}

function ShowPersonnal() {
    HideAll();
    personnalButton.className = "markClicked";
    personnalDiv.style.display = "flex";
    window.location.hash = "personnal";
}

function ShowEducation() {
    HideAll();
    educationButton.className = "markClicked";
    educationDiv.style.display = "flex";
    window.location.hash = "education";
}

function ShowProfessional() {
    HideAll();
    experienceButton.className = "markClicked";
    experienceDiv.style.display = "flex";
    window.location.hash = "professional";
}

function ShowIdentity() {
    HideAll();
    identityButton.className = "markClicked";
    identityDiv.style.display = "flex";
    window.location.hash = "identity";
}

function ShowCover() {
    if (window.location.pathname != '/') ShowPersonnal();
    else coverDiv.className = ('hiddenCover, cover');
}

function HideAll() {
    if (coverDiv != null && coverDiv.classList.length != 1) coverDiv.className = ('hiddenCover');

    personnalButton.className = "markButton";
    personnalDiv.style.display = "none";
    //educationButton.className = "markButton";
    //educationDiv.style.display = "none";
    experienceButton.className = "markButton";
    experienceDiv.style.display = "none";
    identityButton.className = "markButton";
    identityDiv.style.display = "none";
}