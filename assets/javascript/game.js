var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Variables for tracking wins, losses and number of guesses.
var wins = 0;
var losses = 0;
var guesses = 10;
var computerChoice;
var lettersGuessed = [];
// Randomly chooses a letter from our alphabet variable
    computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
//check to make sure computer is selecting a letter
    console.log(computerChoice)    

//selects the html elements and displays wins, losses, and guesses left  
    document.getElementById("Wins").innerHTML = "Wins: " + wins;
    document.getElementById("Losses").innerHTML = "Losses: " + losses;
    document.getElementById("Guesses_left").innerHTML = "Guesses left: " + guesses;
    document.getElementById("Guesses_so_far").innerHTML = "Guesses so far: " + lettersGuessed;

//function to keep tally of our wins, losses, and guesses remaining
    document.onkeyup = function(event) {
        var userGuess = event.key;
    
        if(userGuess === computerChoice){
            wins++;
            guesses = 10;
            lettersGuessed = [];
        }

        else{
            guesses--;
        
        if(userGuess !== computerChoice){
            lettersGuessed.push(userGuess);
        }

        }
    //lettersguessed.push(userGuess)
        if(guesses === 0){
            losses++;
            guesses = 10;
            lettersGuessed = [];
        }


    //selects the html elements and displays wins, losses, and guesses left  
        document.getElementById("Wins").innerHTML = "Wins: " + wins;
        document.getElementById("Losses").innerHTML = "Losses: " + losses;
        document.getElementById("Guesses_left").innerHTML = "Guesses left: " + guesses;
        document.getElementById("Guesses_so_far").innerHTML = "Guesses so far: " + lettersGuessed;

    }


    //.keycode 65-90 for numeric keys
    