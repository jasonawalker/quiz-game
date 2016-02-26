$(document).ready(function(){
  $("#main").hide();
});

$(document).ready(function(){
  $("#submit").click(function(){
    $("#intro").fadeOut("200", function(){
      $("#main").fadeIn("200");
    });
  })
});
