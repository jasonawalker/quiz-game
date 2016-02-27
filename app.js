var questions = [
  {
    question: "question1",
    answers: ["a1","a2","a3","a4"]
  },
  {
    question: "question2",
    answers: ["a5","a6","a7","a8"]
  }

]

$(document).ready(function(){
  $("#main").hide();
  $("#submit").click(function(){
    updateQuestions(1);
    $("#intro").fadeOut("200", function(){
      $("#main").fadeIn("200");
    })
  })

  $(".answerbutton").click(function(){
    $("#main").fadeOut("200");
  })
});

function updateQuestions(num){
  $("#questions").text(questions[num].question);
  $(".answerbutton").each(function(i){
      $(this).text(questions[num].answers[i]);
  })
}
