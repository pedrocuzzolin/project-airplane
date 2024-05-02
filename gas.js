class Gas {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.left = Math.floor(Math.random() * 300 + 50);
        this.top = 0;
        this.width = 30;
        this.height = 30;
        this.element = document.createElement("img");
    
        this.element.src = "./images/fuelstation.jpg"
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    
        this.gameScreen.appendChild(this.element);
      }

      updatePosition() {
        // Update the obstacle's position based on the properties left and top
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
      }
      move() {
       
        this.top += 1;
        
        this.updatePosition();
      }
    };
