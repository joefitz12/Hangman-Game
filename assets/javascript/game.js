var wordList = ["murray","belushi","murphy","hartman","ferrell","aykroyd","farley","fey","meyers","carvey","radner","poehler","wiig","hader","fallon","rock"];
var magicWord = "";
var magicSpace = "_";
var magicNumber;
var mysteryArray = "";
var mysteryText = "";
var magicArray = "";
var remainingGuesses = 10;
var visibleText = document.querySelector("#mysteryWord");
var visibleGuesses = document.querySelector("#visibleGuesses");
var visibleWins = document.querySelector("#wins");
var wrongBank = document.querySelector("#wrongGuesses");
var answerBox = document.querySelector(".answer");
var photoBox = document.querySelector("#headshot");
var bioBox = document.querySelector("#bio");
var wrongArray = [];
var wins = 0;
var letterRecord = "";



// Generating a random word
var wordGenerator = function () {
    var numberChosen = Math.floor(Math.random() * wordList.length);
    var magicWord = wordList[numberChosen];
    return magicWord;
}

magicWord = wordGenerator();

var answerStuff = {
    murray: {bio: "Bill <b>Murray</b> is an American actor, comedian, and writer. He first gained exposure on Saturday Night Live, a series of performances that earned him his first Emmy Award, and later starred in comedy films including Caddyshack (1980) and Ghostbusters (1984). Murray garnered additional critical acclaim later in his career, starring in Lost in Translation (2003), which earned him a Golden Globe and a BAFTA Award for Best Actor, as well as an Academy Award nomination for Best Actor. He also received Golden Globe nominations for his roles in Ghostbusters, Rushmore (1998), Hyde Park on Hudson (2012), St. Vincent (2014), and the HBO miniseries Olive Kitteridge (2014).", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    belushi: {bio: "John <b>Belushi</b> was an American comedian, actor and musician. Belushi is best known for his 'intense energy and raucous attitude' which he displayed as one of the seven original cast members of Saturday Night Live. John's role as the notorious, beer-swilling 'Bluto' in Animal House (1978) made it a box-office smash and the year's top grossing comedy. Despite appearing in only a dozen scenes, John's performance stole the movie, which portrays college fraternity shenanigans at a small college. In 1979, John, along with Dan Aykroyd, quit SNL to pursue film acting. He went on to star in 1941 (1979) and The Blues Brothers (1980). He died March 5, 1982.", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    murphy: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    hartman: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    ferrell: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    aykroyd: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    farley: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    fey: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    meyers: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    carvey: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    radner: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    poehler: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    wiig: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    hader: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    fallon: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    rock: {bio: "later went on to star in ghostbusters", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"}
    }

photoBox.innerHTML = answerStuff[magicWord].headshot;
bioBox.innerHTML = answerStuff[magicWord].bio;


// Creating an array that users can guess from

var magicGenerator = function () {
    magicArray = magicWord.split("");
    return magicArray;
}

magicArray = magicGenerator();

var mysteryGenerator = function () {
    var mysteryLetters = magicSpace.repeat(magicArray.length);
    mysteryArray = mysteryLetters.split("");
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

        var magicLetter = event.key;
    
        // Need to update letterGuess to include eventListener
        var letterGuess = function () {
            var magicNumber = magicArray.indexOf(magicLetter);
            return magicNumber;
        }

        magicNumber = letterGuess();

        // Identifying if the guess is part of the array
        var letterCheck = function () {
            if (magicNumber >= 0) {
                for (var checkLoop = magicArray.length - 1; checkLoop >= 0; checkLoop--) {
                    if (magicArray[checkLoop] === magicArray[magicNumber]) {
                        mysteryArray[checkLoop] = magicArray[checkLoop];
                    }
                }
                visibleGuesses.innerText = "Remaining Guesses: " + remainingGuesses;
                // Check to see if they've won.
                if (mysteryArray.indexOf("_") < 0) {
                    wins++;
                    visibleWins.innerText = "Wins: " + wins;
                    answerBox.classList.remove("hidden");
                    visibleGuesses.innerHTML = "<span id='reset'>" + "You win! Click here to play again." + "</span>";
                    document.querySelector("#reset").addEventListener("click",resetGame);
                }
            }
            else {
                if (wrongArray.indexOf(magicLetter)<0){
                // Check to see if they've lost. If not, loop back around.
                    wrongArray.push(magicLetter);
                    wrongBank.innerText = "Wrong Guesses: " + wrongArray.join(", ");
                    if (remainingGuesses > 1) {
                        remainingGuesses--;
                        visibleGuesses.innerText = "Remaining Guesses: " + remainingGuesses;
                    }
                    else {
                        remainingGuesses--;
                        answerBox.classList.remove("hidden");
                        visibleGuesses.innerHTML = "<span id='reset'>" + "You'll get 'em next time! Click here to play again." + "</span>";
                        document.querySelector("#reset").addEventListener("click",resetGame);
                    }  
                }
            }
        }
        letterCheck();

        visibleText.innerText = magicProgress();    
    }
}

var resetGame = function(){
    console.log("reset game");
    answerBox.classList.add("hidden");
    magicWord = wordGenerator();
    photoBox.innerHTML = answerStuff[magicWord].headshot;
    bioBox.innerHTML = answerStuff[magicWord].bio;
    magicArray = magicGenerator();
    mysteryArray = mysteryGenerator();
    visibleText.innerText = magicProgress();
    visibleGuesses.innerText = "Press any letter key to begin guessing!";
    remainingGuesses = 10;
    wrongArray = [];
    wrongBank.innerText = "Wrong Guesses: " + wrongArray.join(", ");
}

document.addEventListener("keyup", magicRound);
