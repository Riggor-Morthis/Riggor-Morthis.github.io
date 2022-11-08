var personnalDiv;
var educationDiv;
var experienceDiv;

var personnalButton;
var educationButton;
var experienceButton;

window.onload = function(){
    personnalDiv = document.getElementById("personnalDiv");
    educationDiv = document.getElementById("educationDiv");
    experienceDiv = document.getElementById("experienceDiv");

    personnalButton = document.getElementById("personnalButton");
    educationButton = document.getElementById("educationButton");
    experienceButton = documen.getElementById("experienceButton");

    ShowPersonnalProjects();
}

function ShowPersonnalProjects(){
    personnalDiv.style.display = "flex";
    educationDiv.style.display = "none";
    experienceDiv.style.display = "none";

    personnalButton.className = "divButtonClicked";
    educationButton.className = "divButton";
    experienceButton.className = "divButton";
}

function ShowEducationProjects(){
    personnalDiv.style.display = "none";
    educationDiv.style.display = "flex";
    experienceDiv.style.display = "none";

    personnalButton.className = "divButton";
    educationButton.className = "divButtonClicked";
    experienceButton.className = "divButton";
}

function ShowProfessionalExperience(){
    personnalDiv.style.display = "none";
    educationDiv.style.display = "none";
    experienceDiv.style.display = "flex";

    personnalButton.className = "divButton";
    educationButton.className = "divButton";
    experienceButton.className = "divButtonClicked";
}