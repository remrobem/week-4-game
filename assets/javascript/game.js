window.onload = function () {

    crystalGame.initializeGame();

    $('.button').click(crystalGame.gemButton);

};

// initialize global variables
const randomGameMin = 19;
const randomGameMax = 120;
const randomCrystalMin = 1;
const randomCrystalMax = 12;
const winMsg = "You Win!";
const loseMsg = "You Lose!";

let crystalValues = [0, 0, 0, 0]; /* 4 entries in the array for 4 gem buttons. */
let playerTotal = 0;
let gameRandomNumber = 0;
let gameWins = 0;
let gameLosses = 0;

// single object for the game
let crystalGame = {

    // when game starts/restarts, get new random number and display,and get the gem random numbers
    initializeGame: function () {
        gameRandomNumber = crystalGame.getRandomInt(randomGameMin, randomGameMax);
        $('#gameRandomNumber').text(gameRandomNumber);
        crystalGame.defineCrystalValues();
    },

    // gets 4 random numbers and store in an array. These are the random numbers for the 4 gem buttons 
    defineCrystalValues: function () {
        crystalValues.forEach(function (number, i) {
            crystalValues[i] = crystalGame.getRandomInt(randomCrystalMin, randomCrystalMax)
        });
        return crystalValues;
    },

    // when a gem button is selected, clear the message line (may have message from last game) and 
    // check on the total to see if this game is done
    // data-value has a number for each button (0-4) defined in the HTML. It is used to determine 
    // which of the 4 buttons was selected
    gemButton: function () {
        $('#message').css('visibility', 'hidden');
        let buttonId = $(this).attr('data-value');
        playerTotal = crystalGame.updateTotal(playerTotal, crystalValues[buttonId]);

    },
    // add the gem button value to the total and then check the total to see if there is a win or loss
    // if there is a win/loss, updated the win/loss accumulators, display a message and initialize for the next game
    updateTotal: function (total, amt) {
        total = total + amt;

        if (total < gameRandomNumber) {
            //continue play when playe total less than the random number
        } else {
            //  when the player total exceeds the random number, player loses   
            // add to the loss counter and display the loss message        
            if (total > gameRandomNumber) {
                gameLosses++;
                $('#losses').text(gameLosses);
                $('#message').text(loseMsg);

                //  when the player equals the random number, player wins
                // add to the win counter and display the win message      
            } else if (total = gameRandomNumber) {
                gameWins++;
                $('#wins').text(gameWins);
                $('#message').text(winMsg);
            }
            // win or lose, make the win/loss message visibile and initialize the game
            $('#message').css('visibility', 'visible');
            crystalGame.initializeGame();
            total = 0;
        }

        // display the player total and return the total to the caller
        $('#crystalSum').text(total);
        return (total);
    },

    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

};