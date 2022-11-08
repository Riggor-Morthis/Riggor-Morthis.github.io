var personnalDiv;
var educationDiv;

document.addEventListener('load', FindDivs());

function FindDivs(){
    personnalDiv = document.getElementById("personnalDiv");
    educationDiv = document.getElementById("educationDiv");

    ShowPersonnalProjects();
}

function ShowPersonnalProjects(){
    personnalDiv.style.display = "flex";
    educationDiv.style.display = "none";
}

function ShowEducationProjects(){
    personnalDiv.style.display = "none";
    educationDiv.style.display = "flex";
}