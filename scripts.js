

const container = document.querySelector(".container");



const COLOR_1 = "red";
const BORDER_COLOR = "black";

container.style.border="solid 1px " + BORDER_COLOR;
container.style.boxSizing ="border-box";


function buildGrid(N=64){

    const squareSize = container.offsetWidth/N +"px";

    for (let i = 0; i < N; i++) {

        const row = document.createElement("div");
        row.style.display = "flex";

        for (let j = 0; j < N; j++) {

            const item = document.createElement("div");
            item.style.backgroundColor = COLOR_1;
            item.style.width = squareSize;
            item.style.height = squareSize;
            item.style.border="solid 1px " + BORDER_COLOR;
            item.style.boxSizing ="border-box";

            item.addEventListener("mouseenter",()=>{
                item.style.backgroundColor = BORDER_COLOR;
            });

            item.addEventListener("mouseleave",()=>{
                
            });


            row.appendChild(item);
        }
        container.appendChild(row);
    }
}

buildGrid();

