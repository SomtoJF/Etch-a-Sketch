let container = document.getElementById('container');
let gridNumber = 16;
let color = 'white';
let border = 'solid black 0.01px';
let slider = document.getElementById('slider');
let slidervalue = document.getElementById('slidervalue');
slidervalue.textContent = slider.getAttribute('value');
let gridToggle = document.getElementById('gridtoggle');

slider.oninput = function (){
    slidervalue.textContent = this.value;
//remove all divs in container creates a blanks slate for a new grid to be created
    while(container.firstChild){
        container.removeChild(container.firstChild);
    };
    createGrid(this.value);
};
gridToggle.addEventListener('click', function (){
    divs = container.getElementsByTagName('div');
    for(let i = 0; i < divs.length;i++){
        if(divs[i].style.border == 'none'){
            divs[i].style.border = 'solid black 0.01px';
        }else{
            divs[i].style.border = 'none';
        };
    };
});

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
}

createGrid(gridNumber);