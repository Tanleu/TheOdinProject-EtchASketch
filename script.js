let wrapperDiv = document.querySelector("#wrapper");
let numPaintedSquared = 0;
for(let i = 0; i < 16*16 ; i++){
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    squareDiv.addEventListener("mouseover", () => {
        if(squareDiv.style.backgroundColor != "rgb(255, 136, 0)"){
            squareDiv.style.backgroundColor = "#ff8800";
            numPaintedSquared++;
        }
        if(numPaintedSquared == 16*16){
            window.location.reload();
        }
    })

    wrapperDiv.appendChild(squareDiv);
}

