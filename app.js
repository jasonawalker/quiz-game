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
];

var playing = true;
var amount = 0;
var currentN = 0;
var currentQ = questions[currentN];
var correct = 0;
var incorrect = [];

$(document).ready(function(){
  $("#main").hide();
  $("#final").hide();
  $("#warning").hide();
  $("#submit").click(function(){
    amount = $("#amount").val();

    if(checkInput()){
      $("#warning").hide();
      updateQuestions(0);
      $("#intro").fadeOut("200", function(){
        $("#main").fadeIn("200");
        $("#next").hide();
      });
    } else {
      $("#warning").fadeIn("200");
    }
  });

  $(".answer-btn").click(function(){
    $(".answer-btn").prop('disabled', true);
    checkCorrect($(this));
    currentN++;
    $("#next").fadeIn("100");
  });

  $("#next").click(function(){
    checkPlaying();
    if(playing){
      $(".answer-btn").prop('disabled', false);
      $("#main").fadeOut("200",function(){
        updateQuestions(currentN);
        $("#next").hide();
        $("#result-text").text("");
        $("#main").fadeIn("200");
      });
    } else {
      $("#main").fadeOut("200", function(){
        showFinal();
      });
    }
  });
});

function checkInput(){
  var input = $("#amount").val();
  if(input === "" || input < 1 || input > questions.length){
    return false;
  } else {
    return true;
  }
}

function showFinal(){
  $("#final").fadeIn("200");
  $("#you-got").text("You got " + correct + " correct out of " + amount + " questions.");
  if(incorrect.length===0){
    $("#missed").append('<li>None!</li>');
  }
  for(var i=0; i<incorrect.length;i++)
    $("#missed").append('<li>'+questions[incorrect[i]].question+'</li>');
}

function checkPlaying(){
  if(currentN==amount){
    playing=false;
  }
}

function checkCorrect(obj){
  if(obj.text() === questions[currentN].answers[0]){
    $("#result-text").text("Correct!");
    correct++;
  } else {
    $("#result-text").text("Incorrect.");
    incorrect.push(currentN);
  }
}

function updateQuestions(num){
  var temp = questions[num].answers.slice();
  shuffleArray(temp);
  $("#questions").text(questions[num].question);
  $(".answer-btn").each(function(i){
      $(this).text(temp[i]);
  });
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
