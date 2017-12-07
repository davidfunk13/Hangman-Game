var wordList = ["Ravens", "Cardinals", "Falcons", "Bills",
"Panthers", "Bears", "Bengals", "Browns", "Cowboys",
"Broncos", "Lions", "Packers", "Texans", "Colts",
"Jaguars", "Cheifs", "Chargers", "Rams",
"Dolphins", "Vikings", "Patriots", "Saints",
"Giants", "Jets", "Raiders", "Eagles", "Steelers",
"Forty Niners", "Seahawks", "Buccaneers", "Titans",
"Redskins"];
var chosenWord = [];
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];



// Key listener:
// document.addEventListener("keypress", letterPressed);
// function letterPressed(event) {
//     var letter = String.fromCharCode(event.keyCode);
//   console.log(letter)
// }

// "Start game function"
// function gameStart() {
    for (var i = 0; i < randomWord.length; i++) {
        chosenWord[i] = "_";
        console.log(chosenWord,randomWord);
        document.getElementById("spaces").innerHTML = chosenWord, randomWord;

    };
// };