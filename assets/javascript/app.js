// Set global variables for the game.
var movieList = [{
    quote: "Wait a minute Doc.  Uh, are you telling me you built a time machine... out of a DeLorean?",
    choices: ["Apollo 13", "Back to the Future", "Flight of the Navigator", "Alien"],
    answer: "Back to the Future",
}, {
    quote: "You can be my wingman any time.",
    choices: ["Superman", "Call of the Wild", "Wild Wild West", "Top Gun"],
    answer: "Top Gun",
}, {
    quote: "Here's Johnny!",
    choices: ["The Shining", "Short Circuit", "The Incredibles", "Weird Science"],
    answer: "The Shining",
}, {
    quote: "Hello.  My name is Inigo Montoya.  You killed my father.  Prepare to die!",
    choices: ["The Princess Bride", "The Three Musketeers", "The Rocketeer", "Nacho Libre"],
    answer: "The Princess Bride",
}, {
    quote: "Come with me if you want to live.",
    choices: ["Bill & Ted's Excellent Adventure", "Stand By Me", "The Terminator", "Robocop"],
    answer: "The Terminator",
}, {
    quote: "No such thing as bad student, only bad teacher.  Teacher say, student do.",
    choices: ["Good Will Hunting", "Lean on Me", "Shawshank Redemption", "The Karate Kid"],
    answer: "The Karate Kid",
}, {
    quote: "Go ahead, make my millennium.",
    choices: ["Sudden Impact", "Beetlejuice", "Raiders of the Lost Ark", "The Abyss"],
    answer: "Beetlejuice",
}, {
    quote: "I just want to tell you both good luck. We're all counting on you.",
    choices: ["Airplane!", "Avatar", "Titanic", "The Goonies"],
    answer: "Airplane!",
}, {
    quote: "You wanna get nuts?  Cmon, let's get nuts!",
    choices: ["Honey I Shrunk the Kids", "Roger Rabbit", "Batman", "Scarface"],
    answer: "Batman",
}, {
    quote: "How many wishes do I get?  As many as you want. And the more wishes you make, the more magnificent Fantasia will become.",
    choices: ["The Land Before Time", "The Little Mermaid", "Fantasia", "The Neverending Story"],
    answer: "The Neverending Story",
}, {
    quote: "Ray, when someone asks you if you're a god, you say YES!",
    choices: ["Ghostbusters", "Bruce Almighty", "The Fly", "Predator"],
    answer: "Ghostbusters",
}, {
    quote: "Just fear me, love me, do as I say, and I will be your slave.",
    choices: ["Poltergeist", "Labryinth", "Willow", "Gladiator"],
    answer: "Labryinth",
}];

var correctAnswers;
var wrongAnswers;
var unanswered;
var seconds = 10;
var startClock;

// Create a function to start the game.
function startGame() {
    $("#timer").html(
        "<p>" + "You have one minute to guess the following movies based on their quotes.  To begin, press the start button.  Good luck!" + "</p>" +
        "<button class='btn-lg'>" + "START" + "</button>");

    correctAnswers = 0;
    wrongAnswers = 0;
    unanswered = 0;

    // Create a trigger to start the timer as soon as the player clicks the start button.
    $("#timer").on("click", trigger);
}

function countdown() {
    
    if (seconds > 0) {
        seconds--;
        $("#timer").html("<h2>" + "Time Remaining: " + seconds + "</h2>");
    }

    else stop();
}

function trivia() {
    for (i = 0; i < movieList.length; i++) {
        
        // Create divs for each of the quotes and answer choices.
        $("#content").append("<div id='Quote'>" + movieList[i].quote + "</div>");

        $.each(movieList[i].choices, function (index, key) {
            $('#content').append($("<button class='btn-sm'>" + key + "</button>"));
            // $('#content').append($("<button class='btn- btn-outline-pink btn-sm btn-space'>" + key + "</button>"));
        })

        if (movieList[i].answer === "") {
            unanswered++;
        }
    
        else if (movieList[i].choices === movieList[i].answer) {
            correctAnswers++;
        }
    
        else if (movieList[i].choices != movieList[i].answer) {
            wrongAnswers++;
        }

        $("#content").append("<br></br>");
    }

    console.log(unanswered);
    console.log(correctAnswers);
    console.log(wrongAnswers);
}

// Create a function to start the countdown and display the game contents.
function trigger() {

    // Set the clock to count down decrementing by one second at a time.
    startClock = setInterval(countdown, 1000);

    countdown();
    trivia();
}

// Create a function to clear the timer.
function stop() {
    clearInterval(startClock);
}

$("document").ready(startGame);