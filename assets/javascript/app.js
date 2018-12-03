

var questions = "Entertainment: Television";
 var queryURL = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

        var question1 = $("#question");
        var answers1 = $("#answer");
        var incorrect1 = $("#incorrect1");
        var incorrect2 = $("#incorrect2");
        var incorrect3 = $("#incorrect3");

        console.log(queryURL)

        console.log(response)
      // Create a new table row element
     

      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
     var firstQ = $("#question").text("Question:" + response.question1);
      var firstA = $("#answer").text("Choices:" + response.answers1);
      var firstWrong = $("#incorrect1").text(response.incorrect1);
      var secondWrong = $("#incorrect2").text(respones.incorrect2);
      var thridWrong = $("#incorrect3").text(response.incorrect3);
      
        
      // Append the newly created table data to the table row
      question1.append(firstQ);
      answers1.append(firstA);
      incorrect1.append(firstWrong);
      incorrect2.append(secondWrong);
      incorrect3.append(thirdWrong);

    //   // Append the table row to the table body
      $("#question").append(question1);
      $("#answer").append(answers1);
      $("#incorrect1").append(incorrect1);
      $("#incorrect2").append(incorrect2);
      $("#incorrect3").append(incorrect3);
  

     
    });


    $(document).ready(function() 
{    $(".form-check").click(function() {   

    if ($("input[@name=exampleRadios]:checked").val() ||
     {
        alert("There are more !");
    }

    else {
        var answers1 = "1";


        var answers1 = ($("input[@name=exampleRadios]:checked").val() = "a");
    
    if (answers1) {}
    
    
    
    }






















































// $("#start").on("click", function() {

//     var questions = $(this).attr("#start");

//     $.ajax({method:"GET", url:`https://opentdb.com/api.php?amount=${number}&category=${cat}&difficulty=${d}&type=multiple`, success:function(results){
//                 appendToPage(results)
//             }}).done(() => {
//                 alert("Let the Questions Begin ")
//             })
        

//         .then(function(results) {
//             console.log(url);

//             comnsole.log(results);

//             var quiz = url.results.data;

//             for (var i = 0; i < quiz.length; i++) {

//                var questions = $("#question");

//                var answers = $("#answer").text("Multiple Choice" + quiz[i].answers);


//                quiz.append(questions);
//                quiz.append(answers);
//             }
//         });
//     });


           
             





































// var questions = {
//     ask: function(h) {
//         console.log(`Here is the H: ${h}`)
//     }
// }

// questions.ask("Hello from the object")

// // var question1 = {
// //         first: "For every customer complaint how many other unhappy customers do you think have not reported their own customer service complaint remaining silent ?"

// // }

// // var question2 = {
// //         second: "How many people will a dissatisfied cusotmer tell about their experience ?"

// // }

// // var question3 = {
// //         third: "How many positive expereinces does it takes to make up for one unresolved negative experience ?"

// // }

// function appendToPage(questions){
//     console.log(`hello from append ${questions}to page`)

// }

// function getQuestions(questions) {
//     var user ="Keith"
   
    
//     $.ajax({method:"GET", url:`https://opentdb.com/api.php?amount=${number}&category=${cat}&difficulty=${d}&type=multiple`, success:function(results){
//         appendToPage(results)
//     }}).done(() => {
//         alert("Let the Questions Begin ")
//     })
// }

// getQuestions("easy",10,9)
// var user = questions.ask.call(questions);
// document.getElementById("#question").innerHTML = user;

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
