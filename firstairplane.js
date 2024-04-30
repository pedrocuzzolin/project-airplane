class Game {
    constructor() {
        this.startScreen = document.querySelector('#firstpage');
        this.gamepage = document.querySelector('#game-screen');
        this.gameEndScreen = document.querySelector('#gameover');
        this.player = new Player(this.gamepage, 200, 500, 100, 150, "./images/airplane.png"); 
        this.counter = 0;
        this.generationSpeed = 180;
        
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.kilometers = 0;
        this.lives = 3;
        this.fuel = 100;
        this.gameIsOver = false;
        this.gameIntervalId;
        this.gameLoopFrequency = 1000 / 60; 
    }
    start() {

        this.gamepage.style.height = `${this.height}px`;
        this.gamepage.style.width  = `${this.width}px`;
        
        this.startScreen.style.display = "none"
        this.gamepage.style.display = "block"
        
        this.gameIntervalId = setInterval(() => {
            this.gameLoop();
        }, this.gameLoopFrequency);  
    }
    gameLoop() {
        this.update()
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
            this.gamepage.style.display = "none";
            this.endScreen.style.display = "block";
        }
    }
    update() {
        this.counter++;
        this.obstacles.forEach((obstacle) => {  
            obstacle.move();
            if (obstacle.top === this.gamepage.offsetHeight -10) {
                this.obstacles.splice(index, 1);
                obstacle.element.remove();
                this.kilometers++;
                const kilometersCounter = this.gamepage.parentElement.querySelector("#kilometers")
                kilometersCounter.innerText = this.kilometers
                console.log(this.obstacles);
            }
            if (this.player.didCollide(obstacle)) {
                obstacle.element.remove();
               
                this.obstacles.splice(index, 1);
                
                this.lives--;
                
                i--;
                const livesCounter = this.gamepage.parentElement.querySelector("#lives");
                livesCounter.innerText = this.lives
                if (this.lives === 0) this.gameIsOver = true;
              }

        });

        this.player.move();
       if (this.counter % this.generationSpeed === 0){
            this.obstacles.push(new Obstacles(this.gamepage));
        }
    }
}



/*
class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gamepage = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = null;
    this.height = 600;
    this.width = 500;
    this.obstacles = [];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.round(1000/60); // 60fps
  }

  start() {
    // Set the height and width of the game screen
    this.gamepage.style.height = `${this.height}px`;
    this.gamepage.style.width = `${this.width}px`;

    // Hide the start screen
    this.startScreen.style.display = "none";
    
    // Show the game screen
    this.gamepage.style.display = "block";

    // Runs the gameLoop on a fequency of 60 times per second. Also stores the ID of the interval.
    this.gameIntervalId = setInterval(() => {
      this.gameLoop()
    }, this.gameLoopFrequency)
  }

  gameLoop() {
    console.log("in the game loop");
    
    this.update();

    // If "gameIsOver" is set to "true" clear the interval to stop the loop
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId)
    }
  }

  update() {
    console.log("in the update");
  }
}*/