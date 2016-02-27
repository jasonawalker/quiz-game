var questions = [
  {
    question: "question1",
    answers: ["a1","a2","a3","a4"]
  },
  {
    question: "question2",
    answers: ["a5","a6","a7","a8"]
  },
  {
    question: "question3",
    answers: ["a9","a10","a11","a12"]
  }

]

var currentN = 0;
var currentQ = questions[currentN];

$(document).ready(function(){
  $("#main").hide();
  $("#submit").click(function(){
    updateQuestions(0);
    $("#intro").fadeOut("200", function(){
      $("#main").fadeIn("200");
    })
  })

  $(".answerbutton").click(function(){
    checkCorrect($(this));
    currentN++;
    console.log(currentN);
    $("#main").fadeOut("200",function(){
      updateQuestions(currentN);
      $("#main").fadeIn("200");
    })
  })
});

function checkCorrect(obj){
  console.log(obj.text());
  console.log(questions[currentN].answers[0]);
  if(obj.text() === questions[currentN].answers[0]){
    console.log("correct");
  } else {
    console.log("incorrect");
  }
}

function updateQuestions(num){
  var temp = questions[num].answers.slice();
  shuffleArray(temp);
  $("#questions").text(questions[num].question);
  $(".answerbutton").each(function(i){
      $(this).text(temp[i]);
  })
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
