$(document).ready(function(){
  $("#game").hide();
});

$(document).ready(function(){
  $("#submit").click(function(){
    $("#intro").fadeOut("200", function(){
      $("#game").fadeIn("200");
    });
  })
});
