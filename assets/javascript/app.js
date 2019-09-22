$("document").ready(function () {
});

// Set global variables for the game.
var movieList = [{
    question = "",
    choices =[""],
    answer = "Back to the Future",
}, {
    question = "",
    choices =[""],
    answer = "Top Gun",
}, {
    question = "",
    choices =[""],
    answer = "E.T.",
}, {
    question = "",
    choices =[""],
    answer = "Princess Bride",
}, {
    question = "",
    choices =[""],
    answer = "The Terminator",
}, {
    question = "",
    choices =[""],
    answer =  "The Karate Kid",
}, {
    question = "",
    choices =[""],
    answer = "Beetlejuice",
}, {
    question = "",
    choices =[""],
    answer = "Coming to America",
}, {
    question = "",
    choices =[""],
    answer = "Batman",
}, {
    question = "",
    choices =[""],
    answer = "The Neverending Story",
}, {
    question = "",
    choices =[""],
    answer = "Ghostbusters",
}, {
    question = "",
    choices =[""],
    answer = "Labryinth",
}];

var correctAnswers;
var wrongAnswers;
var unanswered;

// Create a function to start the game.
function startGame() {

    correctAnswers = 0;
    wrongAnswers = 0;
    unanswered = 0;

    var countdown = setInterval(function () {
        alert("Hello");
    }, 1000);

}

// Create a function to clear the timer.
function stop() {
    clearInterval(intervalId);
}

startGame();

