var game = require("./game.js");
var word = require("./word.js")	
var letter = require("./letter.js");
var inquirer = require("inquirer");

var player = {
	userLetter: "",
	roundComplete: false,
	startGame: function(){
		console.log("Ready to play THE SIMPSONS HANGMAN?!");
		game.toMainJS.ranWord();
		letter.toMainJS.displayNewGuess();

		promptUser();
	},
	startRound: function(){
		this.roundComplete = false;

		game.toMainJS.ranWord();
		console.log(game.toMainJS.chosenWord);
		letter.toMainJS.displayNewGuess();

		promptUser();
	},
	resetVariables: function(){
		letter.toMainJS.correctGuessesInOrder= [];
		word.toMainJS.allGuesses = [];
		word.toMainJS.incorrectGuesses = [];
		word.toMainJS.correctGuesses = [];
		word.toMainJS.isMatch = null;
		word.toMainJS.isRepeat = null;
		word.toMainJS.guessesRemaining = 9;
	}
}


var promptUser = function() {
    inquirer.prompt([{
        name: "letter",
        message: "Enter a letter: ",
        validate: function(value) {
            if (isNaN(value) == true) {
                return true;
            }
            else {
            	return false;
            }
        }
    }]).then(function(answers) {

       	player.userLetter = answers.letter;
    	player.userLetter = player.userLetter.toUpperCase();
        word.toMainJS.allGuesses.push(player.userLetter);

        word.toMainJS.checkRepeat();

		letter.toMainJS.displayNewGuess();


       	console.log("Guesses remaining: " + word.toMainJS.guessesRemaining);

		letter.toMainJS.checkProgress();

		if (player.roundComplete == false){
		    promptUser();
		}
		else if (player.roundComplete == true){
			player.startRound();
		}

    })

}

player.startGame();

exports.toWordJS = player;
exports.toLetterJS = player;