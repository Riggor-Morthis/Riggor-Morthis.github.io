var previewCells;
var previewLength;

function FindAllCells()
{
    previewCells = document.getElementsByClassName("previewCell");
    previewLength = previewCells.length;
}

function BlurOn(previewCell)
{
    for(var i = 0; i < previewLength; i++)
    {
        if(previewCells[i] != previewCell) 
        {
            previewCells[i].style.filter = "blur(3px)";
        }
    }
}

function BlurOff(){
    for(var i = 0; i < previewLength; i++)
    {
        previewCells[i].style.filter = "blur(0px)";
    }
}