const colorOptions = ['#4AC681', '#FF07D9', '#D12D2D', '#FCC700', '#B3B3B3', '#581845'];
const colorOptionElements = [];

function generateColorOptions() {
    const colorOptionsSection = document.getElementById('color-options');
    colorOptions.forEach((color) => {
        const colorOptionElement = document.createElement('div');
        colorOptionElement.classList.add('color-option');
        colorOptionElement.style.backgroundColor = color;
        colorOptionElement.addEventListener('click', () => {
            changeBackgroundColor(color);
        });
        colorOptionsSection.appendChild(colorOptionElement);
        colorOptionElements.push(colorOptionElement);
    });
}

function changeBackgroundColor(color) {
    const mainContent = document.getElementById('main-content');
    mainContent.style.backgroundColor = color;
    deselectAllColorOptions();
    const selectedColorOption = colorOptionElements.find((option) => option.style.backgroundColor === color);
    selectedColorOption.classList.add('selected');
}

function deselectAllColorOptions() {
    colorOptionElements.forEach((option) => {
        option.classList.remove('selected');
        
    });
}

generateColorOptions();