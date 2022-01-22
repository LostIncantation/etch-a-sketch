const pixelContainer = document.querySelector(".pixel-grid-container")
/*
    Fills a grid container with the relevant number of pixels
*/
function fillGridContainer(gridPixels){
    //Format pixelContainer according to the number of divs it will be populated with
    pixelContainer.style.gridTemplate = `repeat(${gridPixels}, 1fr) / repeat(${gridPixels}, 1fr)`;

    /*
        Create an array and populate it based on how many pixels the grid will require.
        Note: the newGridPixel id is important as current version of "appendChild" will
        not append identical divs
    */
    let gridPixelsArray = [];
    let i = 0;
    while(i<gridPixels*gridPixels){
        let newGridPixel = document.createElement("DIV");
        newGridPixel.className = "grid-pixel";
        newGridPixel.id = `grid-pixel-${i}`;
        gridPixelsArray.push(newGridPixel);
        i++
    }

    /*
        Takes elements of gridPixelsArray and appends them to the pixelContainer
    */
    let j = 0;
    while (j<gridPixelsArray.length){
        pixelContainer.appendChild(gridPixelsArray[j]);
        console.log('Appending div');
        j++;
    }

    /*
        Calls function to add listeners to allow pixel colour to be changed
    */
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

/*
function clearGrid(){
    const clearTarget = document.querySelectorAll(".grid-pixel");
    clearTarget.forEach(element => {
        this.style.backgroundColor = "black";    
    });
}
*/

fillGridContainer(16);
//const gridClearButton = document.querySelector(".clear-grid")
//gridClearButton.addEventListener("click", clearGrid);