class Player {
    constructor(gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
    
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        // Set up the default element's property values
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
    
        this.gamepage.appendChild(this.element);
    }  
    move() {
        
        this.top += this.directionY;
        this.left += this.directionX;

        if (this.left < 10) {
            this.left = 10;
        }
    
          if (this.top < 10) {
            this.top = 10;
        }
          if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width - 10;
        }
        if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
            this.top = this.gameScreen.offsetHeight - this.height - 10;
        }
        
        this.updatePosition();
    }    
    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    didCollide(obstacle) {
        const playerRect = this.element.getBoundingClientRect();
        const obstacleRect = obstacle.element.getBoundingClientRect();
    
        if (
          playerRect.left < obstacleRect.right &&
          playerRect.right > obstacleRect.left &&
          playerRect.top < obstacleRect.bottom &&
          playerRect.bottom > obstacleRect.top
        ) {
          console.log("Crash!");
    
          return true;
        } else {
          return false;
        }
      }
}

