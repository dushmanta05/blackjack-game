let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el") 
let sumEl = document.querySelector("#sum-el") // Have to use "#" in querySelector method
let cardsEl = document.getElementById("cards-el")

let cards = []
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let player = {
    name: 'Dilu',
    chips: 100
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}: $${player.chips}`
// let getRandomCard = () => { 
//     return 5;
// } // ---> Will not work because Arrow function do not support hoisting.

function getRandomCard() {
    let randomNumber = Math.floor(Math.random()*13) + 1;
    console.log(randomNumber);
    if (randomNumber>10){
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}

let renderGame = () => {
    cardsEl.textContent = `Cards: `
    for (let i = 0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = `Sum: ${sum}`
    if (sum <= 20){
        message = 'Do you want to draw a new card?';
    }
    else if (sum === 21){
        message = "Woho! you've got Black Jack";
        hasBlackJack = true;
    }
    else {
        message = "You're out of the game.";
        isAlive = false;
    }
    messageEl.textContent = message;
}
let startGame = () => {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    isAlive = true;
    renderGame()
}

let newCard = () => {
    // messageEl.textContent = "Drawing a new card";
    if (isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard();
        cards.push(newCard);
        // console.log(cards);
        sum += newCard;
        renderGame();
    }
}