$(document).ready(function(){


  var ballTop = $('#ball').position().top;
  var containerBottom = $('.game-frame').position().top + 400;
  var move = {};


  // Gravity
  setInterval(function(){
    $('#ball').css({
      'top': `${ballTop}px`
    })
    if ((ballTop + 20) < containerBottom) {
      ballTop++;
    }

    if ((ballTop + 20) === containerBottom) {
      ballTop--;
    }

  },10)



  // On up arrow, move ball up
  setInterval(moveBall, 10);
    var keys = {}

    $(document).keydown(function(e) {
        keys[e.keyCode] = true;
    });

    $(document).keyup(function(e) {
        delete keys[e.keyCode];
    });

    function moveBall() {
      for (var direction in keys) {
        if (!keys.hasOwnProperty(direction)) continue;
        if (direction == 38) {
          $('#ball').css({
            'top': `${ballTop}px`
          })
          if ((ballTop + 20) < containerBottom) {
            ballTop-=2;
          }
        }
      };
  };// END KEY BINDINGS ==========



});
