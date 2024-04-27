class Game {
    constructor() {
        this.firstpage = document.querySelector('#firstpage');
        this.gamepage = document.querySelector('#gamepage');
        this.gameover = document.querySelector('#gameover');


        this.player = new Player(this.gamepage, 200, 500, 100, 150, "./images/airplane.png"
        ); 
        this.counter = 0;
        this.generationSpeed = 180;
        
        this.height = 600;
        this.width = 500;
        this.obstacles = [];
        this.kilometers = 0;
        this.lives = 3;
        this.gameIsOver = false;
        this.gameIntervalId;
        this.gameLoopFrequency = 1000 / 60; 
    }
    start() {
        this.firstpage.style.display = "none"
        this.gamepage.style.display = "block"

        this.gamepage.style.height = `${this.height}px`;
        this.gamepage.style.width  = `${this.width}px`;

        this.gameIntervalId = setInterval(() => {
            this.gameLoop();
        }, this.gameLoopFrequency);  
    }
    gameLoop() {
        this.update()
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
            this.gameScreen.style.display = "none";
            this.endScreen.style.display = "block";
        }
    }
    update() {
        this.counter++;
        this.obstacles.forEach((obstacle) => {  
            obstacle.move();
            if (obstacle.top === this.gameScreen.offsetHeight -10) {
                this.obstacles.splice(index, 1);
                obstacle.element.remove();
                this.kilometers++;
                const kilometersCounter = this.gameScreen.parentElement.querySelector("#kilometers")
                kilometersCounter.innerText = this.kilometers
                console.log(this.obstacles);
            }
            if (this.player.didCollide(obstacle)) {
                obstacle.element.remove();
               
                this.obstacles.splice(index, 1);
                
                this.lives--;
                
                i--;
                const livesCounter = this.gameScreen.parentElement.querySelector("#lives");
                livesCounter.innerText = this.lives
                if (this.lives === 0) this.gameIsOver = true;
              }

        });

        this.player.move();
        if (this.counter % this.generationSpeed === 0){
            this.obstacles.push(new Obstacles(this.gameScreen));
        }
    }
}



