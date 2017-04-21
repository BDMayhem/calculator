$(document).ready(function(){
  prepareButtons();
});

function prepareButtons(){
  var finished = false;
  var pointOkay = true;
  
  $("button.number").click(function(){
    if (finished === true){
      finished = false;
      $("#screen").text("");
    }
    var num = $(this).text();
    $("#screen").append(num);
  });
  
  $("button.operator").click(function(){
    var input = $("#screen").text();
    if (input.charAt(0).match(/[0-9\.]/) && input.charAt(input.length-1).match(/[0-9\.]/)) {
      finished = false;
      var opp = $(this).text();
      $("#screen").append(opp);
      pointOkay = true;
    }
  });

  $("button.equals").click(function(){
    var input = $("#screen").text();
    var result = Math.round(eval(input) * 100) / 100;
    $("#screen").text(result);
    finished = true;
    pointOkay = true;
  });
  
  
  $("button.point").click(function(){
    if (finished === true){
      finished = false;
      $("#screen").text("");
    };
      if (pointOkay === true){
      var num = $(this).text();
      $("#screen").append(num);
      pointOkay = false;
    }
  });
  
  $("#clear").click(function(){
    $("#screen").text("");
  });

  $("#backspace").click(function(){
    var input = $("#screen").text();
    if (input.charAt(input.length-1) === "."){
      pointOkay = true;
    }
    input = input.substring(0, input.length-1);
    $("#screen").text(input);
  });
}