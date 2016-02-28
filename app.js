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

var playing = true;
var amount = 0;
var currentN = 0;
var currentQ = questions[currentN];
var correct = 0;
var incorrect = 0;

$(document).ready(function(){
  $("#main").hide();
  $("#submit").click(function(){
    amount = $("#amount").val();
    console.log(amount);
    updateQuestions(0);
    $("#intro").fadeOut("200", function(){
      $("#main").fadeIn("200");
      $("#next").hide();
    })
  })

  $(".answer-btn").click(function(){
    checkCorrect($(this));
    currentN++;
    $("#next").fadeIn("100");
  })

  $("#next").click(function(){
    checkPlaying();
    if(playing){
      $("#main").fadeOut("200",function(){
        updateQuestions(currentN);
        $("#next").hide();
        $("#result-text").text("");
        $("#main").fadeIn("200");
      })
    } else {
      console.log("we done");
    }
  })
});

//function showFinal

function checkPlaying(){
  if(currentN==amount){
    playing=false;
    console.log("done");
  }
}

function checkCorrect(obj){
  if(obj.text() === questions[currentN].answers[0]){
    $("#result-text").text("Correct!");
  } else {
    $("#result-text").text("Incorrect.");
  }
}

function updateQuestions(num){
  var temp = questions[num].answers.slice();
  shuffleArray(temp);
  $("#questions").text(questions[num].question);
  $(".answer-btn").each(function(i){
      $(this).text(temp[i]);
  })
  $("#num-text").text("Question " + (currentN+1));
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
