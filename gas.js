class Gas {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 500 + 50);
        this.top = 0;
        this.width = 30;
        this.height = 30;
        this.elementFuel = document.createElement("img");
    
        this.elementFuel.src = "./images/fuelstation.png";
        this.elementFuel.style.position = "absolute";
        this.elementFuel.style.width = `${this.width}px`;
        this.elementFuel.style.height = `${this.height}px`;
        this.elementFuel.style.left = `${this.left}px`;
        this.elementFuel.style.top = `${this.top}px`;
    
        this.gameScreen.appendChild(this.elementFuel);
      }

      updatePosition() {
        // Update the obstacle's position based on the properties left and top
        this.elementFuel.style.left = `${this.left}px`;
        this.elementFuel.style.top = `${this.top}px`;
      }
      move() {
       
        this.top += 1;
        
        this.updatePosition();
      }
    };
