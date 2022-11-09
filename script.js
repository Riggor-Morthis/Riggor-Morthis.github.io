var personnalDiv;
var educationDiv;
var experienceDiv;
var identityDiv;

var personnalButton;
var educationButton;
var experienceButton;
var identityButton;

window.onload = function(){
    personnalDiv = document.getElementById("personnalDiv");
    educationDiv = document.getElementById("educationDiv");
    experienceDiv = document.getElementById("experienceDiv");
    identityDiv = document.getElementById("identityDiv");

    personnalButton = document.getElementById("personnalButton");
    educationButton = document.getElementById("educationButton");
    experienceButton = document.getElementById("experienceButton");
    identityButton = document.getElementById("identityButton");

    ShowPersonnalProjects();
}

function ShowPersonnalProjects(){
    personnalDiv.style.display = "flex";
    educationDiv.style.display = "none";
    experienceDiv.style.display = "none";
    identityDiv.style.display = "none";

    personnalButton.className = "divButtonClicked";
    educationButton.className = "divButton";
    experienceButton.className = "divButton";
    identityButton.className = "divButton";

    window.location.href.hash = "#personnal";
}

function ShowEducationProjects(){
    personnalDiv.style.display = "none";
    educationDiv.style.display = "flex";
    experienceDiv.style.display = "none";
    identityDiv.style.display = "none";

    personnalButton.className = "divButton";
    educationButton.className = "divButtonClicked";
    experienceButton.className = "divButton";
    identityButton.className = "divButton";
}

function ShowProfessionalExperience(){
    personnalDiv.style.display = "none";
    educationDiv.style.display = "none";
    experienceDiv.style.display = "flex";
    identityDiv.style.display = "none";

    personnalButton.className = "divButton";
    educationButton.className = "divButton";
    experienceButton.className = "divButtonClicked";
    identityButton.className = "divButton";
}

function ShowIdentity(){
    personnalDiv.style.display = "none";
    educationDiv.style.display = "none";
    experienceDiv.style.display = "none";
    identityDiv.style.display = "flex";

    personnalButton.className = "divButton";
    educationButton.className = "divButton";
    experienceButton.className = "divButton";
    identityButton.className = "divButtonClicked";
}