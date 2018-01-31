var game = require("./game.js");				
var main = require("./main.js");				


var wordObject = {
	allGuesses:[],
	incorrectGuesses:[],
	correctGuesses:[],
	isMatch:null,
	isRepeat:null,
	guessesRemaining: 9,
	loseCount: 0,
	winCount: 0,


	checkRepeat: function(){
		var repeatCounter = -1;

		for (var i=0; i < this.allGuesses.length; i++){
			if (main.toWordJS.userLetter == this.allGuesses[i]){
				repeatCounter++;
			}
		}
		
		if (repeatCounter == 0){
			this.isRepeat = false;
			this.checkMatch();
		}
		else{
			this.isRepeat = true;
			this.checkMatch();
		}


	},
	checkMatch: function (){
		var matchCounter = 0;

		for (var i=0; i < game.toWordJS.wordLetters.length; i++){
			if (main.toWordJS.userLetter == game.toWordJS.wordLetters[i]){
				matchCounter++;
			}
		}
	
		if (matchCounter == 0){
			this.isMatch = false;
			this.checkMatchRepeat();
		}
		else{
			this.isMatch = true;
			this.checkMatchRepeat();
		}
	},
	checkMatchRepeat: function(){
	
		if (this.isRepeat == true){
			this.allGuesses.pop(main.toWordJS.userLetter);

			return true;
		}
		
		if (this.isRepeat == false && this.isMatch == false){
			this.incorrectGuesses.push(main.toWordJS.userLetter);
			this.guessesRemaining--;

			return true;
		}
		
		if (this.isRepeat == false && this.isMatch == true){
			this.correctGuesses.push(main.toWordJS.userLetter);
			this.guessesRemaining--;

			return true;
		}
	},	
}



exports.toLetterJS = wordObject;
exports.toMainJS = wordObject;