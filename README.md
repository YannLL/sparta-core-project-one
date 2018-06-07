#Sparta Core Project I - JS Video game
Demo code for a Javascript game

This is a sample HTML5 / JS / CSS video game, inspired by slimevolleyball ([http://oneslime.net/](http://oneslime.net/))

This project brings a modern twist to the concept, with player characters from the [Countryball webcomics](https://en.wikipedia.org/wiki/Polandball).   
This current version contains core functionality only.

##Core project requirements
The feature-objectives in this project include:

* Collision-based mechanism(s)
* A scoreboard
* A timer
* A conventional file structure

  

##Implementations
This dev build uses the following features:  

* Javascript
* JQuery
* Semantic HTML5  
* CSS built

##Current issues
* Limited collisions between ball and player 2
* Ball phases through net from the left side
* Gravity currently unavailable
* Errors in scoring mechanism
 
##Operation Instructions

Fork/clone this repo via the Github:
[https://github.com/YannLL/sparta-core-project-one](https://github.com/YannLL/sparta-core-project-one)

##Sample code
###Collision logic - Player 1 & Ball 

~~~javascript

//PLAYER1
    var p1Top = player1.offset().top;
    var p1Bottom = p1Top + player1.height();
    var p1Left = player1.offset().left;
    var p1Right = p1Left + player1.width();

    p1object.left = p1Left;
    p1object.right = p1Right;
    p1object.top = p1Top;
    p1object.bottom = p1Bottom;


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
  ~~~