let startGameButton = document.getElementById("start-game")
let startGameButtonDivision = document.getElementById("container")
let quote = document.getElementById("quote")
let options = document.getElementById("container-1")

let singers = document.getElementsByClassName("singer")
// let singerOneImage = document.getElementsByClassName("singer-image")

function startGame() {
  startGameButtonDivision.style.display = "none"
  quote.style.display = "block"
  options.style.display = "block"
}

startGameButton.onclick = startGame
// startGameButtonDivision.style.display = "block"
console.log("abcdefghijk"[Math.floor(Math.random() * 11)])
