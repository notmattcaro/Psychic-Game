
var letters = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "u", "v", "w", "x", "y", "z"
];
var wins = 0;
var guessTaken = 0;
var losses = 0;
var psychicLetter;

// Callable Counter Functions

//records guess
function guessCounter () {
var guessPlus = document.getElementById("guesses");
guessPlus.textContent = (guessTaken = guessTaken + 1);
}

//records win
function winsCounter () {
var winPlus = document.getElementById("wins");
winPlus.textContent = (wins = wins + 1);
}

//records loss
function lossesCounter () {
var lossesPlus = document.getElementById("losses");
lossesPlus.textContent = (losses = losses + 1);
}

// to call this function "psychicReset()"
var psychicReset = function() {
    var psychicNumber = Math.floor(Math.random()*letters.length);
    psychicLetter = letters[psychicNumber];
    console.log(psychicLetter);
}

//boolean true/false value to determine if gamer is ready or not.
confirm("Are you ready for this challenge!? Muahahaha!");
//if gamer is ready, this code runs.
if (confirm() == true) {
    psychicReset();
    //this event is in a way like a loop, anytime a "key" is pressed, it executes this code. 
    document.onkeyup = function(event) {
        console.log(event.key);
        if (wins < 4 && losses < 4) {
            if (event.key == psychicLetter) {
                alert("ERMAGAH!! You won this round!!");
                guessTaken = 0;
                //test spot below
                winsCounter();
                //test spot above
                psychicReset();
            }
            else if (event.key != psychicLetter) {
                alert("You thought you could beat me!? Think again!");
                if (guessTaken < 13) {
                    //test spot below
                    guessCounter();
                    //test spot above
                }
                else if (guessTaken == 13) {
                    alert("You have lost this round!! I can't wait to taste your soul!!")
                    //test spot below
                    lossesCounter();
                    //test spot above
                    guessTaken = 0;
                    psychicReset();
                }
            }
        }
        if (wins == 4) {
            alert("Noooo!! This will not be the last of me!!");
        }
        else if (losses == 4) {
            alert("Muahahaha!! Your soul is now mine!!");
        }
    }
}
//if gamer is not ready this code runs and the game doesn't start.
else {
        alert("Come back when you're ready. Muahahaha!")
}