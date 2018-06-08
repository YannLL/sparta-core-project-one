# Sparta Core Project I - JS Video Game

This is a sample HTML5 / JS / CSS video game, inspired by the classic slimevolleyball game series built on JAVA  ([http://oneslime.net/](http://oneslime.net/)).

This project brings a modern twist to the concept, with player characters from the [Countryball webcomics](https://en.wikipedia.org/wiki/Polandball).

This current version is the result of 2 sprints over the course of 1 week. At present, the project primarily consists of core functionalities and the playable characters are [Polandball](http://polandball.wikia.com/wiki/Polandball_(meme)) and [Franceball](http://polandball.wikia.com/wiki/Franceball).

## Core project requirements
The feature-objectives in this project include:

* Collision-based mechanism(s)
* A scoreboard
* A timer
* A conventional file structure

  

## Implementations
This dev build uses the following features:  

* Javascript
* JQuery
* Semantic HTML5  
* CSS built

## Project Timeline

**Friday 01/06/18:** Idea for volleyball game approved

###[SPRINT 1]
**Monday 04/06/18:**  
Initial research and fragmenting game idea into  indiviual features  
Logged individual game features into tickets on a Trello Kanban board  
Selected the tickets to complete an MVP by end of sprint 1  
Started designing game environment and player characters  
  
**Tuesday 05/06/18:**  
Added keybindings  
Added a net, splitting the court into halves  
Started applying collision rules to the net  
Added reset button   
Set collision rules to keep ball in game container  

**Wednesday (1/2) 06/06/18:**    
Set collision rules between players and ball  
Added scoreboard and scoring mechanism  
Added Insctructions section  
Added game timer

###[SPRINT 2] 
**Wednesday (1/2) 06/06/18:**  
Set collision-based limits to keep player characters on screen  
Revamped net object with smarter positioning logic


**Thursday 07/06/18:**  
Deep troubleshooting and bug fixing for player collisions  
Added separate logics for frontal and dorsal collisions between the ball and the player  
Created a presentable GUI for the game.

**Friday 08/06/18:**  
Final reviews and bug fixes  
Final merge requests

## Current issues
* Limited collisions between ball and player 2
* Ball phases through net from the left side
* Gravity currently unavailable
* Errors in scoring mechanism

## Pipeline features for sprint 3

* Overhaul "Pong" physics with gravity-based physics
* Scoreboard for longest rallies
* Adding a "hit" button, enabling the player  to spike the ball
* Add soundtrack and sound effects 
 
## Operation Instructions

Fork/clone this repo via the Github:
[https://github.com/YannLL/sparta-core-project-one](https://github.com/YannLL/sparta-core-project-one)

## Sample code
### Collision logic - Player 1 & Ball 

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