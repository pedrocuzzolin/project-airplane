window.onload = function () {

const startButton = document.getElementById("start-button");
const restartButton = document.getElementById("restart-button");
  
let game;
    
startButton.addEventListener("click", function() {
  startGame();
});
  
function startGame() {
  game = new Game();
  game.start();
}

  function movePlayer(event) {
    console.log(event.key)
    if(event.key === 'ArrowUp') {
      game.player.directionY = -1;
    } else if(event.key === 'ArrowDown') {
      game.player.directionY = 1;
    
    } else if(event.key === 'ArrowLeft') {
      game.player.directionX = -1;
    
    } else if(event.key === 'ArrowRight') {
      game.player.directionX = 1;
    }
  }
  window.addEventListener("keydown", movePlayer);


  window.addEventListener('keyup', () =>{
    game.player.directionX = 0;
    game.player.directionY = 0;
  })
};
