var wordList = ["here", "rare", "somes", "example", "swords"];
var magicWord;
var magicSpace = "_";
var magicNumber;
var remainingGuesses;

// Generating a random word
var wordGenerator = function () {
    var numberChosen = Math.floor(Math.random() * wordList.length);
    console.log("numberChosen", numberChosen);
    var wordChosen = wordList[numberChosen];
    console.log("wordChosen", wordChosen);
    return wordChosen;
}

magicWord = wordGenerator();
console.log("magicWord", magicWord);

// Creating an array that users can guess from

var magicArray = magicWord.split("");
console.log("magicArray", magicArray);
var mysteryLetters = magicSpace.repeat(magicArray.length);
console.log("mysteryLetters", mysteryLetters);
var mysteryArray = mysteryLetters.split("");
console.log("mysteryArray", mysteryArray);


// Creating guess function and working on a loop
for (var remainingGuesses = 7; remainingGuesses > 0 && mysteryArray.indexOf("_") >= 0; remainingGuesses--) {

    console.log("Pre-Guess remainingGuesses", remainingGuesses);
    console.log("mysteryArray", mysteryArray);

    var letterGuess = function () {
        var letterIndex = magicArray.indexOf(prompt("guess a letter"));
        console.log("letterIndex", letterIndex)
        return letterIndex;
    }

    magicNumber = letterGuess();
    console.log("magicNumber", magicNumber);

    // Identifying if the guess is part of the array
    // Need to work out how to guess letters *if there are duplicates* and ensure it finds all of the matches. Thinking doing a for loop using the number of letters in the word as the limit of searches, creating a new variable that counts those searches, and doing indexOf() starting at magicNumber + 1.
    var letterCheck = function () {
        if (magicNumber >= 0) {
            for (var checkLoop = magicArray.length - 1; checkLoop >= 0; checkLoop--){
                console.log("checkLoop", checkLoop);
                console.log("letter", magicArray[checkLoop])
                if (magicArray[checkLoop] === magicArray[magicNumber]){
                    console.log("successful check", checkLoop);
                    mysteryArray[checkLoop] = magicArray[checkLoop];
                }
                else {
                    console.log("fail check ", checkLoop);
                }
            }
            if (mysteryArray.indexOf("_") >= 0) {
                remainingGuesses = remainingGuesses + 1;
                console.log("Correct Guess. Remaining Guesses", remainingGuesses);
            }
            else {
                console.log("You win.");
            }
        }
        else {
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
