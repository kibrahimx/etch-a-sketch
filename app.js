const gridsContainer = document.querySelector('#grids-container');

gridsContainer.style.height = '500px';
gridsContainer.style.width = '500px';
gridsContainer.style.display = 'grid';
gridsContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
gridsContainer.style.gridTemplateRows = 'repeat(16, 1fr)';

for (let i = 0; i < 256; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList = 'grid';
    gridsContainer.appendChild(gridElement);
}