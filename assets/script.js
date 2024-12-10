//player hand that will recieve values from 1-13
var playerHand = [];
//dealer hand that will recieve values from 1-13
var dealerHand = [];

//all of the cards in the deck (11,12,13 all equal 10, and 1 equals 1 or 10)
const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];


//Gives the player and dealer 2 cards
function startGame() {

    checkHand();
}

//Gives the player 1 card
function draw() {

    checkHand();
}

//Give the dealer cards until they are greater than or equal to 17
function stand() {

    endGame();
}

//If Player is over 21, then end game.
//If Player is under 21, continue.
//if Player is 21, stand.
function checkHand() {

}

//end the game and open the modal
function endGame() {

}

document.getElementById('start-button').addEventListener('click', function() {
    document.getElementById('game-title').style.display = 'none';
    this.style.display = 'none';
    alert('Game Started!');
});
document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
});


