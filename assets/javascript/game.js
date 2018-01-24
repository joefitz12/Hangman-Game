var wordList = ["murray","belushi","shannon","mckinnon","ferrell","rudolph","farley","fey","myers","carvey","radner","poehler","wiig","hader","fallon","rock"];
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
var hintBox = document.querySelector("#hint");
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
    murray: {hint: "An original Ghostbuster", bio: "Bill <b>Murray</b> is an American actor, comedian, and writer. He first gained exposure on Saturday Night Live, a series of performances that earned him his first Emmy Award, and later starred in comedy films including Caddyshack (1980) and Ghostbusters (1984). Murray garnered additional critical acclaim later in his career, starring in Lost in Translation (2003), which earned him a Golden Globe and a BAFTA Award for Best Actor, as well as an Academy Award nomination for Best Actor. He also received Golden Globe nominations for his roles in Ghostbusters, Rushmore (1998), Hyde Park on Hudson (2012), St. Vincent (2014), and the HBO miniseries Olive Kitteridge (2014).", headshot:"<img src='assets/images/murray-headshot.jpg' alt='bill murray headshot' />"},
    belushi: {hint: "A Blues Brother", bio: "John <b>Belushi</b> was an American comedian, actor and musician. Belushi is best known for his 'intense energy and raucous attitude' which he displayed as one of the seven original cast members of Saturday Night Live. John's role as the notorious, beer-swilling 'Bluto' in Animal House (1978) made it a box-office smash and the year's top grossing comedy. Despite appearing in only a dozen scenes, John's performance stole the movie, which portrays college fraternity shenanigans at a small college. In 1979, John, along with Dan Aykroyd, quit SNL to pursue film acting. He went on to star in 1941 (1979) and The Blues Brothers (1980). He died March 5, 1982.", headshot:"<img src='assets/images/belushi-headshot.jpg' alt='john belushi headshot' />"},
    shannon: {hint: "'Superstar'", bio: "Molly <b>Shannon</b> is an American actress who was a cast member on SNL from 1995 to 2001. She starred in Superstar (1999), a film based on one of her characters from the show. Additionally, she has appeared in supporting roles in a number of films, such as A Night at the Roxbury (1998), Never Been Kissed (1999), Wet Hot American Summer (2001), and Talladega Nights: The Ballad of Ricky Bobby (2006). In 2017 she won the Film Independent Spirit Award for Best Supporting Actress for her role in the film Other People.", headshot:"<img src='assets/images/shannon-headshot.jpg' alt='molly shannon headshot' />"},
    mckinnon: {hint: "A 2016 Ghostbuster", bio: "Kate <b>McKinnon</b> is an American actress, comedian, and impressionist who is best known as a regular cast member on Saturday Night Live, and for playing the role of Dr. Jillian Holtzmann in the 2016 Ghostbusters reboot. McKinnon is known for her character work and celebrity impressions of pop singer Justin Bieber, comedian television host Ellen DeGeneres, and political figures Hillary Clinton, Kellyanne Conway, Elizabeth Warren, Betsy DeVos, Ruth Bader Ginsburg, and Jeff Sessions. She has been nominated for five Primetime Emmy Awards; one for Outstanding Original Music and Lyrics and four for Outstanding Supporting Actress in a Comedy Series, winning in 2016 and 2017.", headshot:"<img src='assets/images/mckinnon-headshot.jpg' alt='kate mckinnon headshot' />"},
    ferrell: {hint: "'It's too hot! Milk was a bad choice.'", bio: "Will <b>Ferrell</b> first established himself in the mid 1990s as a cast member on SNL, and has subsequently starred in comedy films such as Anchorman: The Legend of Ron Burgundy (2004), Talladega Nights (2006), Step Brothers (2008), The Other Guys (2010) and Anchorman 2: The Legend Continues (2013), all but one of which he co-wrote with his comedy partner Adam McKay. Ferrell is considered a member of the 'Frat Pack', a generation of leading comic actors who emerged in the late 1990s and the 2000s, including Jack Black, Ben Stiller, Steve Carell, Vince Vaughn, and brothers Owen and Luke Wilson. He received an Emmy Award nomination for his work on Saturday Night Live, and two Golden Globe Award nominations for The Producers (2005) and Stranger than Fiction (2006).", headshot:"<img src='assets/images/ferrell-headshot.jpg' alt='will ferrell headshot' />"},
    rudolph: {hint: "Not a maid but a bride", bio: "Maya <b>Rudolph</b> first gained prominence in the mid 1990s as a member of the alternative rock band The Rentals before joining The Groundlings improv troupe later in the decade. In 2000, Rudolph became a cast member on the NBC television series Saturday Night Live and subsequently appeared in supporting roles in films such as 50 First Dates (2004) and A Prairie Home Companion (2006). Since leaving Saturday Night Live in 2007, Rudolph has appeared in Grown Ups (2010), Bridesmaids (2011), Grown Ups 2 (2013) and Sisters (2015). She has lent her voice to the animated films Shrek the Third (2007) and Big Hero 6 (2014). In addition to her film appearances, Rudolph starred as Ava Alexander on the NBC sitcom Up All Night from 2011 to 2012, and cohosted her own variety show Maya & Marty.", headshot:"<img src='assets/images/rudolph-headshot.jpg' alt='maya rudolph headshot' />"},
    farley: {hint: "'Fat man in a little coat'", bio: "Chris <b>Farley</b> was an American actor and comedian. Farley was known for his loud, energetic comedic style, and was a member of Chicago's Second City and later a cast member of Saturday Night Live between 1990 and 1995. He went on to pursue a film career, starring in films such as Tommy Boy, Black Sheep and Beverly Hills Ninja. Farley died December 18, 1997, at the age of 33.", headshot:"<img src='assets/images/farley-headshot.jpg' alt='chris farley headshot' />"},
    fey: {hint: "Liz Lemon", bio: "Tina <b>Fey</b> is an American actress, comedian, writer, and producer. She is best known for her work on Saturday Night Live (1997 to 2006) and for creating the acclaimed comedy series 30 Rock (2006 to 2013) and Unbreakable Kimmy Schmidt (2015 to present). Fey also starred in Baby Mama (2008), Date Night (2010), Muppets Most Wanted (2014), Sisters (2015), and Whiskey Tango Foxtrot (2016). Fey has received nine Primetime Emmy Awards, two Golden Globe Awards, five Screen Actors Guild Awards, and four Writers Guild of America Awards. In 2010, Fey was awarded the Mark Twain Prize for American Humor, becoming the youngest-ever recipient of the award.", headshot:"<img src='assets/images/fey-headshot.jpg' alt='tina fey headshot' />"},
    myers: {hint: "Party on Garth!", bio: "Mike <b>Myers</b> is a Canadian-American actor, comedian, screenwriter, and film producer, who holds British citizenship. He is known for his run as a featured performer on Saturday Night Live from 1989 to 1995, and for playing the title roles in the Wayne's World (1992 & 1993), Austin Powers (1997, 1999, 2002), and Shrek (2001, 2004, 2007, 2010) films. He also directed the documentary film Supermensch: The Legend of Shep Gordon (2013), and had a small role in Quentin Tarantino's Inglourious Basterds (2009).", headshot:"<img src='assets/images/myers-headshot.jpg' alt='mike myers headshot' />"},
    carvey: {hint: "Party on Wayne!", bio: "Dana <b>Carvey</b> is an American actor and stand-up comedian, who is most widely known for his work as a cast member on Saturday Night Live (1986 to 1993) and for starring as Garth Algar in the Wayne's World (1992 & 1993) films. He is well known for his impersonations of George H. W. Bush and Ross Perot, as well as original characters like The Church Lady and Hans of Hans and Franz. His stand-up comedy special Straight White Male, 60 debuted on Netflix in 2016.", headshot:"<img src='assets/images/carvey-headshot.jpg' alt='dana carvey headshot' />"},
    radner: {hint: "Roseanne Roseannadanna", bio: "Gilda <b>Radner</b> was an American comedian, actress, and one of seven original cast members of Saturday Night Live (1975 to 1980). Radner specialized in broad and obnoxious parodies of television stereotypes, such as annoying advice specialists and news anchors. She also portrayed those characters in her highly successful one-woman show on Broadway in 1979. She died in 1989.", headshot:"<img src='assets/images/radner-headshot.jpg' alt='gilda radner headshot' />"},
    poehler: {hint: "Leslie Knope", bio: "Amy <b>Poehler</b> is an American actress, voice artist, comedian, director, producer, and writer. After studying improv at Chicago's Second City and ImprovOlympic in the early 1990s, she went to New York City in 1996. In 1998 her group, The Upright Citizens Brigade, released a half-hour sketch comedy series on Comedy Central that ran for three seasons. Poehler was a cast member on SNL from 2001 to 2008 and became co-anchor of Weekend Update in 2004 alongside friend and colleague Tina Fey. She is best known for starring as Leslie Knope in the NBC sitcom Parks and Recreation, for which she won a Golden Globe Award for Best Actress in a Television Musical or Comedy Series in 2014 and a Critics' Choice Award for Best Actress in a Comedy Series in 2012.", headshot:"<img src='assets/images/poehler-headshot.jpg' alt='bill murray headshot' />"},
    wiig: {hint: "The maid of honor", bio: "Kristen <b>Wiig</b> is an American actress, comedian, writer, and producer. She is known for her work on the NBC sketch comedy series Saturday Night Live (2005 to 2012), and such films as Bridesmaids (2011), The Martian (2015), and Ghostbusters (2016). Wiig has received eight Emmy Award nominations. In 2012, Bridesmaids earned her a Golden Globe Award nomination for Best Actress in a Musical or Comedy, as well as a nomination for the Academy Award for Best Original Screenplay.", headshot:"<img src='assets/images/wiig-headshot.jpg' alt='kristen wiig headshot' />"},
    hader: {hint: "Stefon", bio: "Bill <b>Hader</b> is an American comedian, actor, voice actor, producer and writer. He best known for his work on Saturday Night Live (2005 to 2013), for which he has received three Emmy nominations, South Park (2009 to present), and his parody series Documentary Now! (2015 to present). He is also known for his supporting work in comedy films, such as Hot Rod (2007), Superbad (2007), Forgetting Sarah Marshall (2008), and Tropic Thunder (2008). He has also had lead voice roles in Cloudy with a Chance of Meatballs (2009), Inside Out (2015), and The Angry Birds Movie (2016) as well as lead roles in the dramedy The Skeleton Twins (2014) and the romantic comedy Trainwreck (2015).", headshot:"<img src='assets/images/hader-headshot.jpg' alt='bill murray headshot' />"},
    fallon: {hint: "Not Johnny Carson, but...", bio: "Jimmy <b>Fallon</b> is an American comedian, actor, television host, and musician. Fallon was a cast member on SNL for six years between 1998 and 2004, cohosting Weekend Update and becoming a celebrity in the process. He left the program for the film industry, starring in films such as Taxi (2004) and Fever Pitch (2005). Following his film career, Fallon returned to television as the host of Late Night with Jimmy Fallon on NBC in 2009, where he became well known for his emphasis on music and games. He moved from that program to become the sixth permanent host of the long-running The Tonight Show in 2014. In addition to his television work, Fallon has released two comedy albums and five books.", headshot:"<img src='assets/images/fallon-headshot.jpg' alt='bill murray headshot' />"},
    rock: {hint: "A Top Five standup comedian (wink wink double hint)", bio: "Chris <b>Rock</b> is an American comedian, actor, writer, producer, and director. After working as a standup comic and appearing in small film roles, Rock came to wider prominence as a cast member of SNL in the early 1990s. He went on to more prominent film appearances, with starring roles in Down to Earth (2001), Head of State (2003), Top Five (2014), and a series of acclaimed comedy specials for HBO including Bring the Pain (1996) and Bigger and Blacker (2000). He developed, wrote, and narrated the sitcom Everybody Hates Chris (2005 to 2009). He has won four Emmy Awards and three Grammy Awards. He was voted the fifth greatest stand-up comedian in a poll conducted by Comedy Central.", headshot:"<img src='assets/images/rock-headshot.jpg' alt='bill murray headshot' />"}
    }

photoBox.innerHTML = answerStuff[magicWord].headshot;
bioBox.innerHTML = answerStuff[magicWord].bio;
hintBox.innerHTML = answerStuff[magicWord].hint;


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
                        if (remainingGuesses < 4) {
                            hintBox.classList.remove("hidden");
                        }
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
