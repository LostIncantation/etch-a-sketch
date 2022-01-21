

/*
    Targets every element of code with "grid-item" and adds an event listener
    which activates highlightGrid()
*/
let etchTarget = document.querySelectorAll(".grid-item");
etchTarget.forEach(element => element.addEventListener("mouseover", highlightGrid));

/*
    Sets the background colour of the object upon which the function is called
*/
function highlightGrid(){
    this.style.backgroundColor = "gold";
}
