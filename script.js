let picture = [
    "<img src='..assets/images/pumpkin.png'>",
    "<img src='..assets/images/bat.png'>",
    "<img src='..assets/images/beer.png'>",
    "<img src='..assets/images/cupcake.png'>",
    "<img src='..assets/images/ghost.png'>",
    "<img src='..assets/images/money.png'>",
    "<img src='..assets/images/skeleton.png'>",
    "<img src='..assets/images/sweets.png'>",
];

// Get a random item from the picture array
function getRandomPicture() {
    const randomIndex = Math.floor(Math.random() * picture.length);
    return picture[randomIndex];
}

// Usage
const randomPicture = getRandomPicture();
console.log(randomPicture);





