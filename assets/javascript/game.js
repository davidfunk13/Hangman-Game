var wordList = ["Ravens", "Cardinals", "Falcons", "Bills",
    "Panthers", "Bears", "Bengals", "Browns", "Cowboys",
    "Broncos", "Lions", "Packers", "Texans", "Colts",
    "Jaguars", "Cheifs", "Chargers", "Rams",
    "Dolphins", "Vikings", "Patriots", "Saints",
    "Giants", "Jets", "Raiders", "Eagles", "Steelers",
    "Forty Niners", "Seahawks", "Buccaneers", "Titans",
    "Redskins"];
var wordBlanks = [];
var guess = keyListen();

    // Key listener:
    function keyListen() {
        document.addEventListener("keypress", letterPressed);
        function letterPressed(event) {
            var letter = String.fromCharCode(event.keyCode);
            console.log(letter)
        }
    }


// Start game function
// function startGame() {
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
for (var i = 0; i < randomWord.length; i++) {
    wordBlanks[i] = "_";
    // console.log(wordBlanks,randomWord);
    document.getElementById("spaces").innerHTML = wordBlanks.join(" ");
};
