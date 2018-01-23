var wordList = ["murray","belushi","murphy","hartman","ferrell","aykroyd","farley","fey","meyers","carvey","radner","poehler","wiig","hader","fallon","rock"];
var magicWord = "";
var magicSpace = "_";
var magicNumber;
var mysteryArray = "";
var mysteryText = "";
var magicArray = "";
var remainingGuesses = 7;
var visibleText = document.querySelector("#mysteryWord");
var visibleGuesses = document.querySelector("#visibleGuesses");
var visibleWins = document.querySelector("#wins");
var wrongBank = document.querySelector("#wrongGuesses");
var answerBox = document.querySelector(".answer");
var wrongArray = [];
var wins = 0;
var letterRecord = "";



// Generating a random word
var wordGenerator = function () {
    var numberChosen = Math.floor(Math.random() * wordList.length);
    var magicWord = wordList[numberChosen];
    console.log("magicWord", magicWord);
    return magicWord;
}

magicWord = wordGenerator();


// Creating an array that users can guess from

var magicGenerator = function () {
    magicArray = magicWord.split("");
    console.log("magicArray", magicArray);
    return magicArray;
}

magicArray = magicGenerator();

var mysteryGenerator = function () {
    var mysteryLetters = magicSpace.repeat(magicArray.length);
    mysteryArray = mysteryLetters.split("");
    console.log("mysteryArray", mysteryArray);
    return mysteryArray;
}

mysteryArray = mysteryGenerator();

// Adding text to screen to change as letters are guessed

var magicProgress = function () {
    return mysteryArray.join(" ");
}

visibleText.innerText = magicProgress();
visibleGuesses.innerText = "Press any letter key to begin guessing!";

// Creating guess function and working on a loop
var magicRound = function(event){

    if (remainingGuesses > 0 && mysteryArray.indexOf("_") >= 0) {

        console.log("Pre-Guess remainingGuesses", remainingGuesses);
        console.log("mysteryArray", mysteryArray);

        var magicLetter = event.key;
    
        // Need to update letterGuess to include eventListener
        var letterGuess = function () {
            var magicNumber = magicArray.indexOf(magicLetter);
            console.log("magicNumber"),magicArray.magicLetter;
            console.log("magicNumber", magicNumber);
            return magicNumber;
        }

        magicNumber = letterGuess();
        console.log("magicNumber", magicNumber);

        // Identifying if the guess is part of the array
        var letterCheck = function () {
            if (magicNumber >= 0) {
                for (var checkLoop = magicArray.length - 1; checkLoop >= 0; checkLoop--) {
                    console.log("checkLoop", checkLoop);
                    console.log("letter", magicArray[checkLoop]);

                    if (magicArray[checkLoop] === magicArray[magicNumber]) {
                        console.log("successful check", checkLoop);
                        mysteryArray[checkLoop] = magicArray[checkLoop];
                    }
                    else {
                        console.log("fail check ", checkLoop);
                    }
                }
                // Check to see if they've won. If not, keep their guesses from going down 1.
                if (mysteryArray.indexOf("_") >= 0) {
                    console.log("Correct Guess. Remaining Guesses", remainingGuesses);
                }
                else {
                    console.log("mysteryArray", mysteryArray);
                    console.log("You win.");
                    wins++;
                    visibleWins.innerText = "Wins: " + wins;
                }
            }
            else {
                // Check to see if they've lost. If not, loop back around.
                wrongArray.push(magicLetter);
                wrongBank.innerText = "Wrong Guesses: " + wrongArray.join(", ");
                if (remainingGuesses > 1) {
                    remainingGuesses--;
                    console.log("Wrong Guess. Remaining Guesses: ", remainingGuesses);
                }
                else {
                    remainingGuesses--;
                    console.log("You lose.");
                }
            }
        }
        letterCheck();

        visibleText.innerText = magicProgress();
        console.log("visibleText", visibleText);

        visibleGuesses.innerText = "Remaining Guesses: " + remainingGuesses;
    }
    else {
        answerBox.classList.remove("hidden");
    }
}

document.addEventListener("keyup", magicRound);

var answers = {
    murray: {bio: "later went on to star in ghostbusters", headshot: "placeholder image"},
    belushi: "",
    murphy: "",
    hartman: "",
    ferrell: "",
    aykroyd: "",
    farley: "",
    fey: "",
    meyers: "",
    carvey: "",
    radner: "",
    poehler: "",
    wiig: "",
    hader: "",
    fallon: "",
    rock: ""
    }

var headshot = {
    murray: "later went on to star in ghostbusters",
    belushi: "",
    murphy: "",
    hartman: "",
    ferrell: "",
    aykroyd: "",
    farley: "",
    fey: "",
    meyers: "",
    carvey: "",
    radner: "",
    poehler: "",
    wiig: "",
    hader: "",
    fallon: "",
    rock: ""
    }