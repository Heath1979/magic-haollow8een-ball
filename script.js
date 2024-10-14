let picture = [
    "<img src='assets/images/ghosticonicon.png'>",
    "<img src='assets/images/beericon.png'>",
    "<img src='assets/images/cakeicon.png'>",
    "<img src='assets/images/candyicon.png'>",
    "<img src='assets/images/coffeeicon.png'>",
    "<img src='assets/images/moneyicon.png'>",
    "<img src='assets/images/moonicon.png'>",
    "<img src='assets/images/skullicon.png'>",
    "<img src='assets/images/spidericon.png'>",
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





