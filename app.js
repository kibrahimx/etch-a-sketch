let color = 'black';
let click = true;

function divider(size) {
    let gridsContainer = document.querySelector('#grids-container');
    let grids = document.querySelectorAll('div.pixel')
    grids.forEach((div) => div.style.backgroundColor = 'white');
    gridsContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridsContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList = 'pixel';
        gridsContainer.appendChild(gridElement);
        gridElement.addEventListener('mouseover', colorGrid);
    };
};

divider(16);

function changeSize(input) {
    divider(input);
    document.querySelector('#size-indicator').textContent = `${input} x ${input}`;
    document.querySelector('#size-indicator').style.color = 'black';
};

function colorGrid() {
    if (click) {
        this.style.backgroundColor = color;
    }
}

function changeColor(inputColor) {
    color = inputColor;
};

function clearBoard() {
    let grids = document.querySelectorAll('div.pixel')
    grids.forEach((div) => div.style.backgroundColor = 'white');
};

document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.tagName != "BUTTON" && e.target.tagName != "INPUT") {
        click = !click;
        if (click) {
            document.querySelector('#mode').textContent = 'Mode : Coloring';
        } else {
            document.querySelector('#mode').textContent = 'Mode : Not Coloring';
        }
    }
})