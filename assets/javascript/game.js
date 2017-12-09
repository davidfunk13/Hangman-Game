// push test
// Declarations
var wordList = ["RAVENS", "CARDINALS", "FALCONS", "BILLS",
"PANTHERS", "BEARS", "BENGALS", "BROWNS", "COWBOYS",
"BRONCOS", "LIONS", "PACKERS", "TEXANS", "COLTS",
"JAGUARS", "CHEIFS", "CHARGERS", "RAMS",
"DOLPHINS", "VIKINGS", "PATRIOTS", "SAINTS",
"GIANTS", "JETS", "RAIDERS", "EAGLES", "STEELERS",
"FORTYNINERS", "SEAHAWKS", "BUCCANEERS", "TITANS",
"REDSKINS"];
// Picks a word at Random
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
// Array for conversion of randomWord to "_" strings
var underscores = [];
//Array for keylogged guesses
var guessedLetters = [];
//Splits chosen word into seperate letter strings
var splitRandomWord = randomWord.split("");
//a function to test it with
function stringSplit() {
console.log(splitRandomWord);
}
// This runs through the chosen randomWord and for each character in it returns and "_" in a new array
for (var i = 0; i < randomWord.length; i++) {
underscores[i] = "_";
console.log(underscores, randomWord);
document.getElementById("spaces").innerHTML = underscores.join(" ");
};
stringSplit();

// Detects user's keystrokes, logs them to an array "lettersguessed" displayed on the htmlDOC.
document.addEventListener("keypress", letterPressed);
function letterPressed() {
var letter = String.fromCharCode(event.keyCode);
guessedLetters.push(letter);
document.getElementById("lettersGuessed").innerHTML = guessedLetters;
console.log(guessedLetters);
};

//Who even knows
function check() {
for (var j = 0; j < splitRandomWord.length; j++) {
    if (guessedLetters[j] === splitRandomWord.indexOf(j)) {
        console.log("works?");
    }
}
}
// Guessing framework