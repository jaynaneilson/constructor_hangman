var letter = require("./letter.js");


var wordArray = {
	words: ["CHOCOTASTIC", "CRAPTACULAR", "DOH", "EMBIGGEN", "JEBUS", "UNPOSSIBLE", "YOINK", "BARTMAN", "KRUSTY", "HOMER"],
	randNum: 0,
	selectWord: "",
	wordLetters:[],

	ranWord: function(){
		this.randNum = Math.floor(Math.random()*this.words.length);
		this.selectWord = this.words[this.randNum];
		this.wordLetters = this.selectWord.split("");
	}

};


exports.toWordJS = wordArray;
exports.toLetterJS = wordArray;
exports.toMainJS = wordArray;



// console.log("    _______");
// console.log("   |	   |");
// console.log("   |	   |");
// console.log("   |	   @");
// console.log("   |      -|-");
// console.log("   |	   |");
// console.log("   |      L L");
// console.log("   |");
// console.log("___|___");

