var personnalDiv;
var educationDiv;

var personnalButton;
var educationButton;

window.onload = function(){
    personnalDiv = document.getElementById("personnalDiv");
    educationDiv = document.getElementById("educationDiv");

    personnalButton = document.getElementById("personnalButton");
    educationButton = document.getElementById("educationButton");

    ShowPersonnalProjects();
}

function ShowPersonnalProjects(){
    personnalDiv.style.display = "flex";
    educationDiv.style.display = "none";

    personnalButton.className = "divButtonClicked";
    educationButton.className = "divButton";
}

function ShowEducationProjects(){
    personnalDiv.style.display = "none";
    educationDiv.style.display = "flex";

    personnalButton.className = "divButton";
    educationButton.className = "divButtonClicked";
}