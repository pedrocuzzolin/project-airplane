class Game {
    constructor() {
        this.startScreen = document.querySelector('#firstpage');
        this.gamepage = document.querySelector('#game-screen');
        this.gameEndScreen = document.querySelector('#gameover');
        this.player = new Player(this.gamepage, 200, 500, 50, 50, "./images/airplane.png"); 
        this.counter = 0;
        this.generationSpeed = 100;
        this.gas = [];
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
        console.log("in the game loop");
        this.update()
        if (this.gameIsOver) {
            clearInterval(this.gameIntervalId);
            this.gamepage.style.display = "none";
            this.gameEndScreen.style.display = "block";
        }
    }
    update() {
        this.kilometers +=1   
        const kilometersCounter = this.gamepage.parentElement.querySelector("#kilometers");
        kilometersCounter.innerText = this.kilometers;
        if (this.kilometers >= 1000) {
            this.gameIsOver = true;
            clearInterval(this.gameIntervalId);
            this.gamepage.style.display = "none";
            this.gameEndScreen.style.display = "block";
            const congratulationsMessage = document.createElement("div");
            congratulationsMessage.innerText = "Congratulations! You have arrived safely at your destination.";
            this.gameEndScreen.appendChild(congratulationsMessage);
        }
       
        this.counter++;
        this.obstacles.forEach((obstacle, index) => {  
            obstacle.move();
            if (obstacle.top === this.gamepage.offsetHeight -10) {
                this.obstacles.splice(index, 1);
                obstacle.element.remove();
             
        /*this.gas.forEach((gas) => {  
            gas.move();
            if (gas.top === this.gamepage.offsetHeight -10) {
                this.obstacles.splice(index, 1);
                obstacle.element.remove();
                this.counter++;   
                     
                /*const obstaclecounter = this.gamepage.parentElement.querySelector("#kilometers")
                kilometersCounter.innerText = this.kilometers
                console.log(this.obstacles);*/
            }
            if (this.player.didCollide(obstacle)) {
                obstacle.element.remove();
                this.obstacles.splice(index, 1);
                this.lives--;
                index--;
                const livesCounter = this.gamepage.parentElement.querySelector("#lives");
                livesCounter.innerText = this.lives
                if (this.lives === 0)  {
                    this.gameIsOver = true;
                    this.gamepage.style.display = "none";
                    this.gameEndScreen.style.display = "block";
                }
              }
            
        });

        this.player.move();
       if (this.counter % this.generationSpeed === 0){
            this.obstacles.push(new Obstacles(this.gamepage));
        }
    }
}


