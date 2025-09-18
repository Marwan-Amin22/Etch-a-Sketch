




const container = document.querySelector(".container");
const COLOR_1 = "whitesmoke";
const BORDER_COLOR = "black";




function buildGrid(N=16){

    container.style.border="solid 1px " + BORDER_COLOR;
    container.style.boxSizing ="border-box";

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

function clearGrid(){

    container.innerHTML="";
}

buildGrid();

const btn = document.querySelector(".reset-button");

btn.addEventListener("click",()=>{
    clearGrid();
    let num = prompt("Enter the number of squares per row: min 4 | max 64 | default 16")
    console.log(+num);
    if(Number.isInteger(+num))
    {
        num=+num;
        if(num<4 || num>64){
            num=16;
        }

        buildGrid(num);
    }
    else{
        buildGrid();
    }
    
})