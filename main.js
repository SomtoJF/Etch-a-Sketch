let container = document.getElementById('container');
let gridNumber = 64;
let color = 'white';
let border = 'solid black 0.01px';


function createGrid(gridNumber){
    for(let i = 0; i < (gridNumber**2); i++){
        let div = document.createElement('div');
        div.style.backgroundColor = color;
        div.style.border = border;
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.appendChild(div);
    };

}
createGrid(gridNumber);