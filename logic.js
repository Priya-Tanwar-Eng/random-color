const container = document.querySelector(".container");

for(let index=0 ; index < 30; index++ ){
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
}

const colorContainers = document.querySelectorAll(".color-container");

generate();

function generate(){
    colorContainers.forEach((colorContainer) =>{
    const newColor = randomColor();
    colorContainer.style.backgroundColor = "#" + newColor;
    colorContainer.innerText = "#" + newColor;
    });
}

function randomColor(){
        const hexaColor = "0123456789abcdef"
        const  colorLength = 6;
        let colorCode = "";
        for(i=0; i<colorLength; i++){
           const random = Math.floor(Math.random()*hexaColor.length);
           colorCode += hexaColor.substring(random, random+1);
        }

        return colorCode ;
}