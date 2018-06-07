$(document).ready(function(){

  // ===== RESOURCES =====
  //player
  var player1 = $('#player1');
  var player2 = $('#player2');
  var player1Point = 0;
  var player2Point = 0;
  var player1Score = 0;
  var player2Score = 0;
  var p1object = {};
  var p2object = {};


  //ball
  var ball = $('#ball');
  var dirX = "+"; //+ is right, - is left
  var dirY = "+"; //+ is down, - is up
  var velocity = 1;
  var gravity = 50;
  var ballObject = {};
  var aGrav;

  // GAME
  var start = $('.start');
  var gameFrame = $('#gameFrame');

  // ===== START BUTTON =====
  $("#reset").click(function(){
    location.reload();
  })// ========================

  // ==== TIMER ====
  var start = new Date;
  var gameTime = setInterval(function() {
    $('.timer').text((new Date - start) / 1000 + " Seconds");
  }, 1000);
  // ===============


  //ENVIRONMENT
  var gameFrameTop = gameFrame.offset().top;
  var gameFrameBottom = gameFrameTop + gameFrame.height();
  var gameFrameLeft = gameFrame.offset().left;
  var gameFrameRight = gameFrameLeft + gameFrame.width();

  var sideA = $('#sideA');
  var sideAObject = {};
  var sideATop = sideA.offset().top;
  var sideABottom = sideATop + sideA.height();
  var sideALeft = sideA.offset().left;
  var sideARight = sideALeft + sideA.width();
  sideAObject.left = sideALeft;
  sideAObject.right = sideARight;
  sideAObject.top = sideATop;
  sideAObject.bottom = sideABottom;

  var sideB = $('#sideB');
  var sideBObject = {};
  var sideBTop = sideB.offset().top;
  var sideBBottom = sideBTop + sideB.height();
  var sideBLeft = sideB.offset().left;
  var sideBRight = sideBLeft + sideB.width();
  sideBObject.left = sideBLeft;
  sideBObject.right = sideBRight;
  sideBObject.top = sideBTop;
  sideBObject.bottom = sideBBottom;

  var net = $('#net');
  var netObject = {};
  var netTop = net.offset().top;
  var netBottom = netTop + net.height();
  var netLeft = net.offset().left;
  var netRight = netLeft + net.width();
  netObject.left = netLeft;
  netObject.right = netRight;
  netObject.top = netTop;
  netObject.right = netRight;

  // END RESOURCES ==========

  // ===== KEY BINDINGS =====
  setInterval(movePlayers, 20);
    var keys = {}

    $(document).keydown(function(e) {
        keys[e.keyCode] = true;
    });

    $(document).keyup(function(e) {
        delete keys[e.keyCode];
    });

    function movePlayers() {
      for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 65) {
          if ($(player1).offset().left > sideALeft) {
            $(player1).animate({left: "-=8"}, 0);
          }
        }
        if (direction == 68) {
          if($(player1).offset().left + $(player1).width() < sideARight){
            $(player1).animate({left: "+=8"}, 0);
          }
        }
        if (direction == 37) {
          if($(player2).offset().left > sideBLeft)
          $(player2).animate({left: "-=8"}, 0);
        }
        if (direction == 39) {
          if($(player2).offset().left + $(player2).width() < sideBRight)
          $(player2).animate({left: "+=8"}, 0);
        }
      }
  };// END KEY BINDINGS ==========



  // ===== GAME PHYSICS =====

  setInterval(function(){


    //BALL VARIABLES
    var ballTop = ball.offset().top;
    var ballBottom = ballTop + ball.height();
    var ballLeft = ball.offset().left;
    var ballRight = ballLeft + ball.width();
    ballObject.left = ballLeft;
    ballObject.right = ballRight;
    ballObject.top = ballTop;
    ballObject.bottom = ballBottom;

    //PLAYER VARIABLES
    //PLAYER1
    var p1Top = player1.offset().top;
    var p1Bottom = p1Top + player1.height();
    var p1Left = player1.offset().left;
    var p1Right = p1Left + player1.width();

    p1object.left = p1Left;
    p1object.right = p1Right;
    p1object.top = p1Top;
    p1object.bottom = p1Bottom;

    //PLAYER2
    var p2Top = player2.offset().top;
    var p2Bottom = p2Top + player2.height();
    var p2Left = player2.offset().left;
    var p2Right = p2Left + player2.width();

    p2object.left = p2Left;
    p2object.right = p2Right;
    p2object.top = p2Top;
    p2object.bottom = p2Bottom;

    //PLAYER COLLISION
    //Player1Collisions
    //P1frontal
    if(ballObject.left < p1object.right &&
      ballObject.right > p1object.left &&
      ballObject.bottom > p1object.top &&
      ballObject.left > sideAObject.left &&
      dirX == "-"
      ){
      dirX = "+";
      dirY = "-";
    };

    //P1dorsal
    if(ballObject.right > p1object.left &&
      ballObject.right < p1object.right &&
      ballObject.bottom > p1object.top &&
      ballObject.left < sideBObject.left &&
      dirX=="+"){
        dirX="-";
        dirY="-";
      };


    //Player2Collisions
    //P2frontal
    if(ballObject.right > p2object.left &&
      ballObject.bottom > p2object.top &&
      ballObject.right < sideBObject.right &&
      ballObject.right > sideBObject.right &&
      dirX == "+"){

      dirX = "-";
      dirY = "-";
    };

    //P2dorsal
    if(ballObject.bottom > p2object.top &&
      ballObject.right > sideAObject.right &&
      ballObject.right > p2object.left &&
      ballObject.left < p2object.right &&
       dirX==="-"){
         dirY="-";
       };

    // Net collisions
    // dirX + in side A
    if(ballObject.right > netObject.left &&
      ballObject.bottom > netObject.top &&
      ballObject.right < sideAObject.right &&
      dirX == "+"){
        dirX = "-"
        dirY = "-"
      }

    //FRAME BOX COLLISIONS
    if(ballRight > gameFrameRight){
      dirX = "-";
    };

    if(ballLeft < gameFrameLeft){
      dirX = "+";
    };

    if(ballBottom > gameFrameBottom) {
      dirY = "-";
      gravity -= 4;
      scoreCheck();
      winCheck();
    }

    if(ballTop < gameFrameTop) {
      dirY = "+";
    }


    // X-axis motion
    if(dirX === "+"){
      ball.css("left", velocity);
      velocity += 1.75;
    };

    if(dirX === "-"){
      ball.css("left", velocity);
      velocity -= 1;
    };

    // Y-Axis motion
    // Gravity incremental
    if(dirY === "+"){
      ball.css("top",gravity);
      gravity += 2.75;
    };


    if(dirY === "-"){
      ball.css("top",gravity)
      gravity  -= 1.75 ;
    }

  }, 10);


  // ===== WINNING MECHANISM ====

  function boxCheck(){
    if(ballObject.right > sbaLeft);
  }

  function scoreCheck(){
    if (ballObject.right > sideARight) {
      player1Point ++;
      if(player1Point % 5 === 0){
        player1Score++;
        $(sideA).append("I");
      }

    }else if (ballObject.right<sideARight) {
      player2Point++
      if(player2Point % 5 === 0){
        player2Score ++;
        $(sideB).append("I");
      }
    }
  };

  function winCheck(){
    switch (player1Score) {
      case (5):
      clearTimeout(gameTime);
      ball.hide();
      $(sideA).append("- WINNER");
      break;
    };

    switch (player2Score){
      case (5):
      clearTimeout(gameTime);
      ball.hide();
      $(sideB).append("- WINNER");
      break;
    };

  }// END WINNING MECHANISM =====


});
