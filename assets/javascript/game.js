var wordList = ["Baltimore Ravens", "Arizona Cardinals", "Atlanta Falcons", "Bufalo Bills",
"Carolina Panthers", "Chicago Bears", "Cincinnati Bengals", "Cleveland Browns", "Dallas Cowboys",
"Denver Broncos", "Detroit Lions", "Green Bay Packers", "Houston Texans", "Indianapolis Colts",
"Jacksonville Jaguars", "Kansas City Cheifs", "Los Angeles Chargers", "Los Angeles Rams",
"Miami Dolphins", "Minnesota Vikings", "New England Patriots", "New Orleans Saints",
"New York Giants", "New York Jets", "Oakland Raiders", "Philadelphia Eagles", "Pittsburgh Steelers",
"San Fransisco Forty Niners", "Seattle Seahawks", "Tampa Bay Buccaneers", "Tennessee Titans",
"Washington Redskins"];
var wins = [""]
var lettersGuessed = [""]
var guessesRemaining = [""]
var chosenWord = [""]

// Key listener:
document.addEventListener("keypress", letterPressed);
function letterPressed(event) {
    var letter = String.fromCharCode(event.keyCode);
  console.log(letter)
}