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
var playerHandTotal = 0;

// Dealer hand that will recieve values from 1-13
var dealerHand = [];
var dealerHandTotal = 0;

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
    var aceCount = 0;

    //count the first 2 cards of the dealer's hand
    for (let i = 0; i < dealerHand.length; i++) {
        if (dealerHand[i] >= 10) {
            dealerHandTotal += 10;
        }
        else if (dealerHand[i] === 1){
            dealerHandTotal += 11;
            aceCount++;
        }
        else {
            dealerHandTotal += dealerHand[i];
        }
    }

    //if the total is less than 17, then the dealer will draw cards just like the player
    while(dealerHandTotal < 17) {
        var randomCard = cards[Math.floor(Math.random() * cards.length)]
        dealerHand.push(randomCard);
        if (randomCard >= 10) {
            dealerHandTotal += 10;
        }
        else if(randomCard === 1){
            dealerHandTotal += 11;
            aceCount++;
        } else {
            dealerHandTotal += randomCard;
        }

        //if the dealer got a 21, then break the loop. 
        if(dealerHandTotal === 21)
            break;

        //the dealer can convert their aces to 1s if they're over 17
        while (dealerHandTotal > 17 && aceCount > 0) {
            dealerHandTotal -= 10;
            aceCount--;
        }
    }

    //end the game when the dealer is over 17 or reaches 21
    endGame();
}

// If Player is over 21, then end game.
// If Player is under 21, continue.
// If Player is 21, stand.
function checkHand() {
    var aceCount = 0;

    //count all the cards in the player's hand
    for (let i = 0; i < playerHand.length; i++) {
        if (playerHand[i] >= 10) {
            playerHandTotal += 10;
        }
        else if (playerHand[i] === 1){
            playerHandTotal += 11;
            aceCount++;
        }
        else {
            playerHandTotal += playerHand[i];
        }
    }

    //if the player is over 21 and they have aces available, convert them from 11s to 1s
    while (playerHandTotal > 21 && aceCount > 0) {
        playerHandTotal -= 10;
        aceCount--;
    }

    if(playerHandTotal > 21) //if the player is over 21, then end the game
        endGame();
    else if(playerHandTotal === 21) //if the player has 21, then they will automatically stand
        stand();
}

// End the game and open the modal
//display the totals of the two players and their hands
//if the player went over 21, they automatically lose and we don't need to see the dealer total.
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
