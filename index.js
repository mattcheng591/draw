let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let button_10 = document.querySelector("#but10");
let button_20 = document.querySelector("#but20");
let button_30 = document.querySelector("#but30");
button_10.addEventListener("click", setSize);
button_20.addEventListener("click", setSize);
button_30.addEventListener("click", setSize);

function createGrid() {
    grid = document.querySelector("#grid");
    for (let i = 0; i < 10; i++) {
        let row = document.createElement("div");
        row.className = "gridRow";
        grid.appendChild(row);
        for (let j = 0; j < 9; j++) {
            let column = document.createElement("div");
            column.className = "gridCol";
            column.addEventListener('mouseover', changeColor);
            column.addEventListener('mousedown', changeColor);
            row.appendChild(column);
        }
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    e.target.style.backgroundColor = "red";
}



function setSize(e) {
    grid = document.querySelector("#grid");
    grid.innerHTML = "";
    let val = e.target.value;
    let sizing = (300 / val);
    for (let i = 0; i < val; i++) {
        let row = document.createElement("div");
        row.className = "gridRow";
        grid.appendChild(row);
        for (let j = 0; j < (val - 1); j++) {
            let column = document.createElement("div");
            column.className = "gridCol";
            column.addEventListener('mouseover', changeColor);
            column.addEventListener('mousedown', changeColor);
            row.appendChild(column);
            column.style.height = sizing+"px";
            column.style.width = sizing+"px";
        }
    }
}

createGrid();
