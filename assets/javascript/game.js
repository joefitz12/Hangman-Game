var wordList = ["here", "rare", "somes", "example", "swords"];
var magicWord = "";
var magicSpace = "_";
var magicNumber;
var mysteryArray = "";
var mysteryText = "";
var magicArray = "";
var remainingGuesses;

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

document.querySelector("#mysteryWord").innerText = mysteryArray.join(" ");

// Creating guess function and working on a loop
for (var remainingGuesses = 7; remainingGuesses > 0 && mysteryArray.indexOf("_") >= 0; remainingGuesses--) {

    console.log("Pre-Guess remainingGuesses", remainingGuesses);
    console.log("mysteryArray", mysteryArray);
    document.querySelector("#mysteryWord").innerText = mysteryArray.join(" ");
    // Need to update letterGuess to include eventListener
    var letterGuess = function () {
        var magicNumber = magicArray.indexOf(prompt("guess a letter"));
        console.log("magicNumber", magicNumber);
        return magicNumber;
    }

    magicNumber = letterGuess();
    console.log("magicNumber", magicNumber);

    // Identifying if the guess is part of the array
    // Need to work out how to guess letters *if there are duplicates* and ensure it finds all of the matches. Thinking doing a for loop using the number of letters in the word as the limit of searches, creating a new variable that counts those searches, and doing indexOf() starting at magicNumber + 1.
    var letterCheck = function () {
        if (magicNumber >= 0) {
            for (var checkLoop = magicArray.length - 1; checkLoop >= 0; checkLoop--){
                console.log("checkLoop", checkLoop);
                console.log("letter", magicArray[checkLoop]);

                if (magicArray[checkLoop] === magicArray[magicNumber]){
                    console.log("successful check", checkLoop);
                    mysteryArray[checkLoop] = magicArray[checkLoop];
                }
                else {
                    console.log("fail check ", checkLoop);
                }
            }
            // Check to see if they've won. If not, keep their guesses from going down 1.
            if (mysteryArray.indexOf("_") >= 0) {
                remainingGuesses = remainingGuesses + 1;
                console.log("Correct Guess. Remaining Guesses", remainingGuesses);
            }
            else {
                console.log("mysteryArray", mysteryArray);
                console.log("You win.");
            }
        }
        else {
            // Check to see if they've lost. If not, loop back around.
            if (remainingGuesses > 1){
                console.log("Wrong Guess. Remaining Guesses: ", remainingGuesses);
            }
            else {
                console.log("You lose.");
            }
        }
    }
    letterCheck();
}
