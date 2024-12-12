// Start page functionality
document.getElementById('start-button').addEventListener('click', function() {
    
    // Hide start page elements
    document.getElementById('game-title').style.display = 'none';
    this.style.display = 'none';
        
    // Show the game page upon clicking start button
    document.getElementById('game-page').style.display = 'block';
        
    // Start the game
    startGame();
    });

// Player hand that will recieve values from 1-13
var playerHand = [];

// Dealer hand that will recieve values from 1-13
var dealerHand = [];

// All of the cards in the deck (11,12,13 all equal 10, and 1 equals 1 or 10)
const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// Gives the player and dealer 2 cards
function startGame() {

    checkHand();
}

// Gives the player 1 card
function draw() {

    checkHand();
}

// Give the dealer cards until they are greater than or equal to 17
function stand() {

    endGame();
}

// If Player is over 21, then end game.
// If Player is under 21, continue.
// If Player is 21, stand.
function checkHand() {
    var handTotal = 0;
    var aceCount = 0;
    for (let i = 0; i < playerHand.length; i++) {
        if (playerHand[i] >= 10) {
            handTotal += 10;
        }
        else if (playerHand[i] == 1){
            handTotal += 11;
            aceCount++;
        }
        else {
            handTotal += playerHand[i];
        }
    }

    while (handTotal > 21 && aceCount > 0) {
        handTotal -= 10;
        aceCount--;
    }

    if(handTotal > 21)
        endGame();
    else if(handTotal = 21)
        stand();
}

// End the game and open the modal
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