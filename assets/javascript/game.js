var wordList = ["here", "are", "some", "example", "words"];
var magicWord;
var magicSpace = "_";
var magicGuess;
var remainingGuesses;
var 

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
for (var remainingGuesses = 7; remainingGuesses > 0 && mysteryArray !== magicArray; remainingGuesses--) {

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
    // Need to work out how to guess letters if there are duplicates and ensure it finds all of the matches. Thinking doing a for loop using the number of letters in the word as the limit of searches, creating a new variable that counts those searches, and doing indexOf() starting at magicNumber + 1.
    var letterCheck = function () {
        if (magicNumber >= 0) {
            console.log(magicArray[magicNumber]);
            remainingGuesses = remainingGuesses + 1;
            console.log("Post-Guess remainingGuesses", remainingGuesses);
            mysteryArray[magicNumber] = magicArray[magicNumber];
        }
        else {
            console.log("Post-Guess remainingGuesses", remainingGuesses);
        }
    }

    letterCheck();
}








magicGuess = magicArray[letterGuess()];
