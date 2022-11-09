var personnalDiv;
var educationDiv;
var experienceDiv;
var identityDiv;

var personnalButton;
var educationButton;
var experienceButton;
var identityButton;

var lastURL;

window.onload = function(){
    personnalDiv = document.getElementById("personnalDiv");
    educationDiv = document.getElementById("educationDiv");
    experienceDiv = document.getElementById("experienceDiv");
    identityDiv = document.getElementById("identityDiv");

    personnalButton = document.getElementById("personnalButton");
    educationButton = document.getElementById("educationButton");
    experienceButton = document.getElementById("experienceButton");
    identityButton = document.getElementById("identityButton");

    switch(window.location.hash){
        case "personnal" : ShowPersonnalProjects();
        break;
        case "education" : ShowEducationProjects();
        break;
        case "professional" : ShowProfessionalExperience();
        break;
        case "identity" : ShowIdentity();
        break;
        default : ShowPersonnalProjects();
    }
}

function ShowPersonnalProjects(){
    CleanUp();

    personnalDiv.style.display = "flex";
    personnalButton.className = "divButtonClicked";
    window.location.hash = "personnal";
}

function ShowEducationProjects(){
    CleanUp();

    educationDiv.style.display = "flex";
    educationButton.className = "divButtonClicked";
    window.location.hash = "education";
}

function ShowProfessionalExperience(){
    CleanUp();

    experienceDiv.style.display = "flex";
    experienceButton.className = "divButtonClicked";
    window.location.hash = "professional";
}

function ShowIdentity(){
    CleanUp();

    identityDiv.style.display = "flex";
    identityButton.className = "divButtonClicked";
    window.location.hash = "identity";
}

function CleanUp(){
    personnalDiv.style.display = "none";
    educationDiv.style.display = "none";
    experienceDiv.style.display = "none";
    identityDiv.style.display = "none";

    personnalButton.className = "divButton";
    educationButton.className = "divButton";
    experienceButton.className = "divButton";
    identityButton.className = "divButton";

    lastURL = window.location.href;
}