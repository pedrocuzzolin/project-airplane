window.onload = function () {


  
/*const airplane = document.querySelector(".airplane")

let airplaneTop = 0
let airplaneLeft = 0

window.addEventListener("keypress", (event) => {
    console.log(event);
    if (event.key == "5") {
        airplaneTop += 10;
        airplane.style.top = `${airplaneTop}px`;
    } else if (event.key === "8") {
        if (airplaneTop > 0) {
            airplaneTop -= 10;
            airplane.style.top = `${airplaneTop}px`;
        } else {
            alert(" You are on the limit");
        }
    }   else if (event.key === "6") {
        airplaneLeft += 10;
        airplane.style.left = `${airplaneLeft}px`;
    }   else if (event.key === "4") {
        airplaneLeft -= 10;
        airplane.style.left = `${airplaneTop}px`;
    }; 
});

left     37
up       38
right    39
down     40*/

  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  
  let game;
    
  startButton.addEventListener("click", function() {
    startGame();
  });
  
  function startGame() {
    game = new Game();
    game.start();
    /*console.log("start game");*/
  }

  function movePlayer(event) {
    if (event.key == "5") {
      airplaneTop += 10;
      airplane.style.top = `${airplaneTop}px`;
  } else if (event.key === "8") {
      if (airplaneTop > 0) {
          airplaneTop -= 10;
          airplane.style.top = `${airplaneTop}px`;
      } else {
          alert(" You are on the limit");
        }
    }   else if (event.key === "6") {
        airplaneLeft += 10;
        airplane.style.left = `${airplaneLeft}px`;
    }   else if (event.key === "4") {
        airplaneLeft -= 10;
        airplane.style.left = `${airplaneTop}px`;
    }; 
  }
  window.addEventListener("keydown", movePlayer);

  function stopPlayer(event) {
    game.player.directionX = 0;
    game.player.directionY = 0;
  }
  window.addEventListener("keyup", stopPlayer);
};
  