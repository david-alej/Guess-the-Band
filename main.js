let startGame = document.getElementsByClassName("start-game")
let startGameDivision = document.getElementsByClassName("container0")
let quote = document.getElementsByClassName("quote")
let options = document.getElementsByClassName("container1")

let singerOne = document.getElementById("singer-one-image")
let singerOneImage = document.getElementById("singer-one-image")
let singerTwo = document.getElementById("singer-two")
let singerTwoImage = document.getElementById("singer-two-image")
let singerThree = document.getElementById("singer-three")
let singerThreeImage = document.getElementById("singer-three-image")

function singerFactory(name, songsQoutes, image) {
  return {
    name,
    songsQoutes,
    image,
  }
}

function startGame() {
  startGameDivision.hidden = true
  quote.hidden = false
  options.hidden = false
}
