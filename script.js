let wrapperDiv = document.querySelector("#wrapper");
let askWidth = () => {
    let size = prompt("Size of grid");
    if(size > 100) {
        alert("Size is exceed the maximum of 100 please try again");
        askWidth();
    }
    return size;
}

let numPaintedSquared = 0;
let numSquareOnOneSide = 5;
function BuildSketchPad(){
    for(let i = 0; i < numSquareOnOneSide*numSquareOnOneSide ; i++){
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        let width = Math.floor((100/numSquareOnOneSide)).toString() + "%";
        squareDiv.setAttribute("style", "width: "+ width);

        squareDiv.addEventListener("mouseover", () => {
            if(squareDiv.style.backgroundColor != "rgb(255, 136, 0)"){
                squareDiv.style.backgroundColor = "#ff8800";
                numPaintedSquared++;
            }
            if(numPaintedSquared == numSquareOnOneSide*numSquareOnOneSide){
                numSquareOnOneSide = askWidth();
                
                document
                    .querySelectorAll(".square")
                    .forEach(x => x.remove());
                
                BuildSketchPad();
            }
        })

        wrapperDiv.appendChild(squareDiv);
    }
}

BuildSketchPad();