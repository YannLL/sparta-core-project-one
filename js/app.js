$(document).ready(function(){
  // ===== RESOURCES =====

  var player1 = $('#player1');
  var player2 = $('#player2');
  var ball = $('#ball');
  var gameFrame = $('#gameFrame');
  var start = $('.start');
  var dirX = "+"; //+ is left, - is right
  var dirY = "+"; //+ is down, - is up
  var velocity = 1;
  var gravity = 1;


  var gameFrameTop = gameFrame.offset().top;
  var gameFrameBottom = gameFrameTop + gameFrame.height();
  var gameFrameLeft = gameFrame.offset().left;
  var gameFrameRight = gameFrameLeft + gameFrame.width();

  // END RESOURCES ==========


  // ===== BALL PHYSICS =====
  // $(ball).animate({bottom:-100}, 450, 'linear');



  setInterval(function(){

    var ballTop = ball.offset().top;
    var ballBottom = ballTop + ball.height();
    var ballLeft = ball.offset().left;
    var ballRight = ballLeft + ball.width();

    // GRAVITY
    // if(dirY === "+"){
    //   ball.css("top", gravity);
    //   gravity = gravity * 1.03;
    //   console.log("gravity applies");
    // };

    if(dirY === "+"){
      ball.css("top",gravity);
      gravity ++
      console.log(ballBottom);
    };

    if(dirY === "-"){
      ball.css("top",gravity)
      gravity--;
      };


    //IF gravity is above -5, run a for loop drecrementing gravity back to -5
    // IF gravity is below -5, run a fo loop incrementing gravity up
    // ball.css({`top`:`${posY}px`})

    // Y-Axis motion

    // (debug) Gravity



    // console.log(ball.offset());
    // debugger;

    // X-axis motion
    if(dirX === "+"){
        ball.css("left", velocity);
        velocity += 7;
      };

    if(dirX === "-"){
        ball.css("left", velocity);
        velocity -= 7;
      };



    //Frame box collisions
    if(ballRight > gameFrameRight){
      dirX = "-";
    };

    if(ballLeft < gameFrameLeft){
      dirX = "+";
    };

    if(ballBottom > gameFrameBottom) {
      console.log(`gravity is ${gravity}`);
      console.log("floor bounce =]");
      dirY = "-";
    }

    if(ballTop < gameFrameTop) {
      console.log(`gravity is ${gravity}`);
      console.log("ceiling bounce =]");
      dirY = "+";
    }


  }, 10);


  //
  // console.log("ballTop is " +ballTop);
  // console.log("ballBottom is " +ballBottom);
  // console.log("ballLeft is " +ballLeft);
  // console.log("gameFrameTop = "+ gameFrameTop);
  // console.log("gameFrameBottom is " +gameFrameBottom);




});
