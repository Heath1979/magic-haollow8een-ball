let picture = [
    "Be scared by a ghost.",
    "Go carve a pumpkin.",
    "Pretend that you are BATman",
    "Open a can of beer, and drink it",
    "load up on cupcakes",
    "The happy world of Haribo",
    "Get some money, cash is king",
    "Wear a skeleton outfit",
];

// Get a random item from the picture array
function getRandomPicture() {
    const randomIndex = Math.floor(Math.random() * picture.length);
    return picture[randomIndex];
}

// Usage
const randomPicture = getRandomPicture();
console.log(randomPicture);



document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('trick');
    const imageContainer = document.getElementById('window');

    button.addEventListener('click', function() {
        const randomPicture = getRandomPicture();
        imageContainer.innerHTML = randomPicture;
    });
});





