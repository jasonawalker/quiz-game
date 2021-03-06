var questions = [
  {
    question: "What continent is cut into 2 fairly equal halves by the Tropic of Capricorn?",
    answers: ["Australia","Africa","South America","Europe"]
  },
  {
    question: "What is the world's longest river?",
    answers: ["Amazon","Nile","Mississippi","Franklin"]
  },
  {
    question: "What is the main color of the Chinese flag?",
    answers: ["Red","White","Yellow","Black"]
  },
  {
    question: "What city is home to the Broncos?",
    answers: ["Denver","Philadelphia","Atlanta","Cincinati"]
  },
  {
    question: "Who is the current manager of Chelsea FC?",
    answers: ["Guus Hiddink","Carlo Ancelotti","Jose Mourinho","Eden Hazard"]
  },
  {
    question: "Which mammal has the longest gestation period?",
    answers: ["Elephant","Human","Cheetah","Pig"]
  },
  {
    question: "What do you get if you breed a goat with a sheep?",
    answers: ["A Geep","A Poat","A Goap","A Sheet"]
  },
  {
    question: "Portugal had 6 kings with what first name?",
    answers: ["John","Henry","Paul","James"]
  }
];

var playing = true,
    amount = 0,
    currentN = 0,
    currentQ = questions[currentN],
    correct = 0,
    incorrect = [];

$(document).ready(function(){
  $("#main").hide();
  $("#final").hide();
  $("#warning").hide();
  $("#max-questions").text(questions.length);
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
  $("#question-text").text(questions[num].question);
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
