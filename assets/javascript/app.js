

var questions = "Entertainment: Television";
var queryURL = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple";
var currentQuestion = 0;
var correct = 0;
var incorrect = 0;

//Get questions from the api
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {

  //Show me the repsone 
  console.log(response.response_code)

  //Get array of questions
  var questions = response.results
  console.log(questions)
  var ans = []
  //Show each question and answers
  for (var question in questions) {
    var allAnswers = [questions[question].correct_answer]
    for (var q in questions[question].incorrect_answers) {
      allAnswers.push(questions[question].incorrect_answers[q])
    }
    var quesObj = {
      corAnswer: questions[question].correct_answer, question: questions[question].question,
      answers: allAnswers
    }
    ans.push(quesObj)
  }

  $("#answers").append(`<h1>${ans[currentQuestion].question}</h1>`)
// Ineed to complete for loop identifiers to cycle through arraty questions for game
  for (var i in ans[currentQuestion].answers) {
    $("#answers").append(`<div class="form-check">
      <input class="form-check-input" type="radio" name="exampleRadios" id="incorrect1" value="${ans[currentQuestion].answers}" checked>
      <label class="form-check-label" for="exampleRadios5">
          ${ans[currentQuestion].answers[i]}
      </label>
    </div>`)
  }

})

// complete document.ready function for results of answers and incorrect answers 

$(document).ready(function () {
  $(".form-check").click(function () {

    if ($("input[@name=exampleRadios]:checked").val() || $()) {
      alert("There are more !");

    } else {
      var answers1 = "1";


      var answers1 = ($("input[@name=exampleRadios]:checked").val() = "a");

    }
  })
})

// Add delayButtonAlert for the start and finish of the game.

// var delayButtonAlert;

//       //  Timeouts in JavaScript
//       //  Set our window alert to run one second after the function's called.
//       var windowTimeout = setTimeout(function() {
//         alert("You have 60 seconds to answer the questions below.");
//       }, 3000);

//       //  Start on click.
//       $("#start").on("click", function() {
//         //  Set the button alert's timeout to run three seconds after the function's called.
//         delayButtonAlert = setTimeout(function() {
//           alert("Times Up !");
//         }, 60000);
//       });
