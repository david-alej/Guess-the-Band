import { bands } from "./singerData.js"

let startGameButton = document.getElementById("start-game")
let startGameButtonDivision = document.getElementById("container")
let quote = document.getElementById("quote")
let options = document.getElementById("container-1")

let singersName = document.getElementsByClassName("singer")
let singersImage = document.getElementsByClassName("singer-image")

function startGame() {
  startGameButtonDivision.style.display = "none"
  quote.style.display = "block"
  options.style.display = "block"
  const answer = bands[Math.floor(Math.random() * bands.length)]
  const answerOption = Math.floor(Math.random() * 3)
  singersName[answerOption].innerHTML = answer.name
  singersImage[answerOption].src = answer.image
}

startGameButton.onclick = startGame
// startGameButtonDivision.style.display = "block"
console.log("abcdefghijk"[Math.floor(Math.random() * 11)])
