var responseResultsArray = "Entertainment: Television";
var queryURL = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple";
var currentindex = 0;
var correct = 0;
var incorrect = 0;

//Get responseResultsArray from the api
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function (response) {


  //Show me the repsone 
  console.log("the response is this:")
  console.log( JSON.parse(JSON.stringify(response)))
  console.log("*****")

  //Get array of responseResultsArray
  var responseResultsArray = response.results
  console.log("responseResultsArray is this: ") 
  console.log(responseResultsArray);
  console.log("******")
  var questionAnswerSetArrayOfObjects = []
  //Show each question and answers
  for (var index in responseResultsArray) {
    console.log("index var in forloop is this: ")
    console.log(index)
    console.log("*********")
    var allAnswers = [responseResultsArray[index].correct_answer]
    console.log("all answers is this : ")
    console.log(allAnswers)
    console.log("******")
    for (var q in responseResultsArray[index].incorrect_answers) {
      console.log("in nested forloop")
      console.log("value of q is: " + q)
      allAnswers.push(responseResultsArray[index].incorrect_answers[q])
    }
    var questionAnswerObj = {
      questionNumber: parseInt(index) + 1,
      question: responseResultsArray[index].question,
      corAnswer: responseResultsArray[index].correct_answer,
      answers: allAnswers
    }

    questionAnswerSetArrayOfObjects.push(questionAnswerObj)
    console.log("questionAnswerSetArrayOfObjects array below: ")
    console.log(questionAnswerSetArrayOfObjects)
    console.log("************")
    console.log("quesObj below ")
    console.log(questionAnswerObj)
    console.log("******")

    var questionHtml = $("<h1>")
    $(questionHtml).text(questionAnswerSetArrayOfObjects[index].question)
    

    var answerChoicesDiv= $("<div>")
    $(answerChoicesDiv).addClass("form-check")

    for(var x in responseResultsArray[index].incorrect_answers){

        var answerChoicesRadioButtons= $("<input>")
        $(answerChoicesRadioButtons).addClass("form-check-input").attr("type", "radio").attr("name", questionAnswerSetArrayOfObjects[index].question)

    }
    


    $(".questionAnswerContainer").append(questionHtml)
  }


//   $("#answers").append(`<h1>${ans[currentindex].index}</h1>`)
// // Ineed to complete for loop identifiers to cycle through arraty responseResultsArray for game
//   for (var i in ans[currentindex].answers) {
//     $("#answers").append(`<div class="form-check">
//       <input class="form-check-input" type="radio" name="exampleRadios" id="incorrect1" value="${ans[currentindex].answers}" checked>
//       <label class="form-check-label" for="exampleRadios5">
//           ${ans[currentindex].answers[i]}
//       </label>
//     </div>`)
//   }

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
//         alert("You have 60 seconds to answer the responseResultsArray below.");
//       }, 3000);

//       //  Start on click.
//       $("#start").on("click", function() {
//         //  Set the button alert's timeout to run three seconds after the function's called.
//         delayButtonAlert = setTimeout(function() {
//           alert("Times Up !");
//         }, 60000);
//       });



