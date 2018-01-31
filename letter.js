var game = require("./game.js");				
var word = require("./word.js");
var main = require("./main.js");

var displayObject = {
	correctGuessesInOrder: [],
	displayNewGuess: function(){
		
		if (word.toLetterJS.correctGuesses.length == 0 || word.toLetterJS.correctGuesses == null){
			for (var i =0; i<game.toLetterJS.wordLetters.length; i++){
				this.correctGuessesInOrder[i] = "_";
			}
		}
		else {

		for (var i=0; i<game.toLetterJS.wordLetters.length; i++){
	
		if (this.correctGuessesInOrder[i] != game.toLetterJS.wordLetters[i]){
				
		for (var j=0; j<word.toLetterJS.correctGuesses.length; j++){
					
		if (word.toLetterJS.correctGuesses[j] == game.toLetterJS.wordLetters[i]){
			this.correctGuessesInOrder[i] = game.toLetterJS.wordLetters[i];
			}
					
		else {
			this.correctGuessesInOrder[i] = "_";
			}
		}
	}
  }

}

		console.log(this.correctGuessesInOrder.join(" ") + "\n");
	},

	checkProgress: function(){
		var counter = 0;

		for (var i=0; i<game.toLetterJS.wordLetters.length; i++){
			if (this.correctGuessesInOrder[i] == game.toLetterJS.wordLetters[i]){
				counter++;
			}
		}

		if (counter == game.toLetterJS.wordLetters.length){

			main.toLetterJS.roundComplete = true;
			word.toLetterJS.winCount++;

			console.log("Cowabunga! You win!");
			console.log("Wins: " + word.toLetterJS.winCount + "--" + "Losses: " + word.toLetterJS.loseCount);

			main.toLetterJS.resetVariables();
		}
		
		if (word.toLetterJS.guessesRemaining == 0){

			main.toLetterJS.roundComplete = true;
			word.toLetterJS.loseCount++;

			console.log("D'oh! You lose!");
			console.log("Wins: " + word.toLetterJS.winCount + "--" + "Losses: " + word.toLetterJS.loseCount);

			main.toLetterJS.resetVariables();

		}
	}
}



exports.toMainJS = displayObject;
exports.toGameJS = displayObject;