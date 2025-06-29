// Remove the main#main element
const main = document.getElementById('main');
main.remove();

// Create the newHeader h1 element
const newHeader = document.createElement('h1');

// Set the id of the newHeader
newHeader.id = 'victory';

// Set the text content of the newHeader
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME with your name

// Append the newHeader to the body
document.body.appendChild(newHeader);