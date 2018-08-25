var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking wins, losses and number of guesses.
var wins = 0;
var losses = 0;
var guesses = 10;
var lettersguessed = [];
// Randomly chooses a letter from our alphabet variable
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
//check to make sure computer is selecting a letter
    console.log(computerChoice)
//function to keep tally of our wins, losses, and guesses remaining
    document.onkeyup = function(event) {
        var userGuess = event.key;
    
        if(userGuess === computerChoice){
            wins++;
        }

        else{
            guesses--;
        }
    
        if(guesses === 0){
            losses++
        }
//selects the html elements and displays wins, losses, and guesses left    
        document.getElementById("Wins").innerHTML = "Wins: " + wins;
        document.getElementById("Losses").innerHTML = "Losses: " + losses;
        document.getElementById("Guesses left").innerHTML = "Guesses left: " + guesses;
        document.getElementById("Your guesses so far").innerHTML = "Your guesses so far: " + lettersguessed;
    }