const etchContainer = document.querySelector(".etch-grid-container")

/*
    Fills a grid container with the relevant number of pixels
*/
function fillGridContainer(gridPixels){
    console.log(gridPixels);
    etchContainer.style.gridTemplate = `repeat(${gridPixels}, 1fr) / repeat(${gridPixels}, 1fr)`;
    console.log("Ran");

    const gridPixel = document.createElement("DIV");
    gridPixel.className = 'grid-pixel';
    let i = 0;
    let gridPixelsArray = [];

    while(i<gridPixels*gridPixels){
        let newGridPixel = document.createElement("DIV");
        newGridPixel.className = "grid-pixel";
        newGridPixel.id = `grid-pixel-${i}`;
        gridPixelsArray.push(newGridPixel);
        i++
    }


    let j = 0;
    while (j<gridPixelsArray.length){
        etchContainer.appendChild(gridPixelsArray[j]);
        console.log('Appending div');
        j++;
    }

    addEtchColouring();
}


/*
    Targets every element of code with ".grid-pixel" and adds an event listener
    which activates highlightGrid()
*/
function addEtchColouring(){
    const etchTarget = document.querySelectorAll(".grid-pixel");
    etchTarget.forEach(element => element.addEventListener("mouseover", highlightGrid));
}

/*
    Sets the background colour of the object upon which the function is called
*/
function highlightGrid(){
    this.style.backgroundColor = "gold";
}

fillGridContainer(16);