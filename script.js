var personnalDiv;
var educationDiv;

function FindDivs(){
    personnalDiv = document.getElementById("personnalDiv");
    educationDiv = document.getElementById("educationDiv");

    ShowPersonnalProjects();
}

function ShowPersonnalProjects(){
    if(personnalDiv == null) FindDivs();

    personnalDiv.style.display = "flex";
    educationDiv.style.display = "none";
}

function ShowEducationProjects(){
    if(educationDiv == null) FindDivs();

    personnalDiv.style.display = "none";
    educationDiv.style.display = "flex";
}