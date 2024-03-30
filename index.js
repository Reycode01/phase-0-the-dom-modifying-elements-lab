const mainElement = document.getElementById('main');

if (mainElement) {
    mainElement.remove();
}

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with the desired name

document.body.appendChild(newHeader);
