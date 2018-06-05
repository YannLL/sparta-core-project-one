$(document).ready(function(){
  // ===== RESOURCES =====
  //player
  var player1 = $('#player1');
  var player2 = $('#player2');
  var player1Score = 0;
  var player2Score = 0;
  var p1object = {};
  var p2object = {};


  //ball
  var ball = $('#ball');
  var dirX = "+"; //+ is right, - is left
  var dirY = "+"; //+ is down, - is up
  var velocity = 1;
  var gravity = 1;
  var ballObject = {};

  var start = $('.start');
  var gameFrame = $('#gameFrame');

  //ENVIRONMENT
  var gameFrameTop = gameFrame.offset().top;
  var gameFrameBottom = gameFrameTop + gameFrame.height();
  var gameFrameLeft = gameFrame.offset().left;
  var gameFrameRight = gameFrameLeft + gameFrame.width();
  var sideA = $('#sideA');
  var sideATop = sideA.offset().top;
  var sideABottom = sideATop + sideA.height();
  var sideALeft = sideA.offset().left;
  var sideARight = sideALeft + sideA.width();

  var sideB = $('#sideB');
  var sideBTop = sideB.offset().top;
  var sideBBottom = sideBTop + sideB.height();
  var sideBLeft = sideB.offset().left;
  var sideBRight = sideBLeft + sideB.width();

  //NET a
  //NET b

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
                $(player1).animate({left: "-=8"}, 0);
            }
            if (direction == 68) {
                $(player1).animate({left: "+=8"}, 0);
            }
            if (direction == 37) {
                $(player2).animate({left: "-=8"}, 0);
            }
            if (direction == 39) {
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
    //frontal
    if(ballObject.left < p1object.right &&
      ballObject.bottom > p1object.top &&
      dirX == "-"
      ){
      dirX = "+"
    };

    //Player2Collisions
    if(ballObject.right > p2object.left &&
      ballObject.bottom > p2object.top
      ){
      dirX = "-"
    };

    // GRAVITY
    //IF gravity is above -5, run a for loop drecrementing gravity back to -5
    // IF gravity is below -5, run a fo loop incrementing gravity up

    // X-axis motion
    if(dirX === "+"){
      ball.css("left", velocity);
      velocity += 7;
    };

    if(dirX === "-"){
      ball.css("left", velocity);
      velocity -= 7;
    };

    // Y-Axis motion
    if(dirY === "+"){
      ball.css("top",gravity);
      gravity ++
    };

    if(dirY === "-"){
      ball.css("top",gravity)
      gravity--;
      };

    //Frame box collisions
    if(ballRight > gameFrameRight){
      dirX = "-";
      console.log("now on -");
    };

    if(ballLeft < gameFrameLeft){
      dirX = "+";
      console.log("now on +");
    };

    if(ballBottom > gameFrameBottom) {
      dirY = "-";
      scoreCheck();
    }

    if(ballTop < gameFrameTop) {
      console.log("ceiling bounce =]");
      dirY = "+";
    }


  }, 10);

  // ===== WINNING MECHANISM ====
  function scoreCheck(){
    if (ballObject.right > sideARight) {
      player1Score ++;
      if(player1Score % 5 === 0){
        $(sideA).append("I");
        console.log("Polandball scores!");
      }

    }else if (ballObject.right<sideARight) {
      player2Score ++;
      console.log(player2Score);
      if(player2Score % 5 === 0){
        $(sideB).append("I");
        console.log("Franceball scores!");
      }
    }
  };


});
