let container = document.getElementById('container');
let gridNumber = 16;
let color = 'white';
let border = 'solid black 0.01px';
/*
function hover(newColor = 'black'){
    newColor = newColor.toLowerCase();
    this.style.backgroundColor = newColor;
}
*/
function createGrid(gridNumber){
    for(let i = 0; i < (gridNumber**2); i++){
        let div = document.createElement('div');
        div.style.backgroundColor = color;
        div.style.border = border;
        container.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
        container.appendChild(div);
    };
    let gridItems = container.getElementsByTagName('div');
    for(let i = 0; i < gridItems.length;i++){
        gridItems[i].addEventListener('mouseover', function () {this.style.backgroundColor = 'black'});
    };
    /*
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', hover())
    });
    */
}
createGrid(gridNumber);