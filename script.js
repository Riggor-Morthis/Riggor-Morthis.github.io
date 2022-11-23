var personnalDiv;
var educationDiv;
var experienceDiv;
var identityDiv;

var personnalButton;
var educationButton;
var experienceButton;
var identityButton;

var columns;
var columnLength;

window.onload = function(){
    FindAllDivs();
    FindAllColumns();
    PickRightDiv();    
}

function FindAllDivs(){
    personnalDiv = document.getElementById("personnalDiv");
    educationDiv = document.getElementById("educationDiv");
    experienceDiv = document.getElementById("experienceDiv");
    identityDiv = document.getElementById("identityDiv");

    personnalButton = document.getElementById("personnalButton");
    educationButton = document.getElementById("educationButton");
    experienceButton = document.getElementById("experienceButton");
    identityButton = document.getElementById("identityButton");
}

function FindAllColumns(){
    columns = document.getElementsByClassName("column");
    columnLength = columns.length;

    for(var i = 0; i < columnLength; i++){
        columns[i].onmouseover = PutBlurOn(columns[i]);
        columns[i].onmouseout = PutBlurOff(i);
    }
}

function PutBlurOn(column){
    console.log("Blur On !");
    console.log(column);
    
    /*for(var i = 0; i < columnLength; i++){
        if(i != index){
            columns[i].style.filter = "blur(3px)";
        }
    }*/
}

function PutBlurOff(index){
    for(var i = 0; i < columnLength; i++){
        if(i != index){
            columns[i].style.filter = "blur(0px)";
        }
    }
}

function PickRightDiv(){
    switch(window.location.hash){
        case "#personnal" : ShowPersonnalProjects();
        break;
        case "#education" : ShowEducationProjects();
        break;
        case "#professional" : ShowProfessionalExperience();
        break;
        case "#identity" : ShowIdentity();
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
}