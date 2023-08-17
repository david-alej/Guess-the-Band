import { bands } from "./singerData.js"

let startGameButton = document.getElementById("start-game")
let startGameButtonDivision = document.getElementById("container")
let lyrics = document.getElementById("lyrics")
let options = document.getElementById("container-1")

let bandsName = document.getElementsByClassName("bands")
let bandsImage = document.getElementsByClassName("bands-image")

// Helper function
function randomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit)
}

function removeElement(array, unwantedElement) {
  // error here: array.indexOf() is not a function: Because it is used on a string.
  array.indexOf(unwantedElement)
  array.splice(unwantedElement, 1)
}

function fillGameScreen() {
  const optionsArray = [0, 1, 2]
  const answerOption = randomNumber(3)
  removeElement(optionsArray, answerOption)
  const secondOption = optionsArray[randomNumber(2)]
  removeElement(optionsArray, secondOption)
  const thirdOption = optionsArray[0]
  const answer = bands[randomNumber(bands.length)]

  bandsName[answerOption].innerHTML = answer.name
  bandsImage[answerOption].src = answer.image
  lyrics.innerHTML = answer.lyricsSongs[randomNumber(answer.lyricsSongs.length)]

  if (answer.lyricsSongs.length == 1) {
    removeElement(bands, answer)
  } else {
    removeElement(answer.lyricsSongs, lyrics.innerHTML)
  }

  let bandsIndexes = Array.from(Array(bands.length).keys())
  let bandIndex = randomNumber(bands.length)
  removeElement(bandIndex)
  let band = bands[bandIndex]
  bandsName[secondOption].innerHTML = band.name
  bandsImage[secondOption].src = band.image

  bandIndex = bandsIndexes[randomNumber(bandsIndexes.length)]
  band = bands[bandIndex]
  bandsName[thirdOption].innerHTML = band.name
  bandsImage[thirdOption].src = band.image
}

function startGame() {
  startGameButtonDivision.style.display = "none"
  lyrics.style.display = "block"
  options.style.display = "block"
  // const answer = bands[randomNumber(bands.length)]
  // const answerOption = randomNumber(3)
  // const answerLyric =
  //   answer.lyricsSongs[randomNumber(answer.lyricsSongs.length)][0]

  // singersName[answerOption].innerHTML = answer.name
  // console.log(answer.image, answer.name)
  // singersImage[answerOption].src = answer.image
  // lyrics.innerHTML = answerLyric
  fillGameScreen()
}

startGameButton.onclick = startGame
// startGameButtonDivision.style.display = "block"
console.log("abcdefghijk"[Math.floor(Math.random() * 11)])
