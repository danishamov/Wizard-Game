let stare = gameState();
let game = initGameObject();
game.startScreen.addEventListener("click", (e) => {
  game.gameScreen.classList.add("hidden");
  game.gameScreen.classList.remove("hidden");
});
