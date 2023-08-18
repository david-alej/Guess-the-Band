import { bands } from "./singerData.js"

let startGameButton = document.getElementById("start-game")
let startGameButtonDivision = document.getElementById("container")
let lyrics = document.getElementById("lyrics")
let options = document.getElementById("container-1")

let boxes = document.getElementsByClassName("box")
let bandsName = document.getElementsByClassName("bands")
let bandsImage = document.getElementsByClassName("bands-image")

// Initializing meta information about the game
let round = 0
let games = 0
let answers = []
let userChoices = []
let bandsCache = [0, 0, 0]

// Following two functions are Helper functions
function randomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit)
}

function removeElement(array, unwantedElement) {
  const index = array.indexOf(unwantedElement)
  if (index === -1) {
    console.log("Error", unwantedElement, "was already choosen.")
    return
  }
  array.splice(index, 1)
}

function fillGameScreen(event) {
  // Getting the option positions of the band answer for the lyric and the other two options randomly
  const optionsArray = [0, 1, 2]
  const answerOption = randomNumber(3)
  removeElement(optionsArray, answerOption)
  const secondOption = optionsArray[randomNumber(2)]
  removeElement(optionsArray, secondOption)
  const thirdOption = optionsArray[0]

  // Making sure that the option values in the current round are not the same as the option values from the previous round
  let bandsIndexes = Array.from(Array(bands.length).keys())
  for (let i = 0; i < 3; i++) {
    if (round === 0) {
      break
    }
    removeElement(bandsIndexes, bands.indexOf(bandsCache[i]))
  }

  // Zeroing bandsCache array
  bandsCache.map(() => 0)

  // Getting answer variables
  const answerIndex = bandsIndexes[randomNumber(bandsIndexes.length)]
  const answer = bands[answerIndex]
  const lyricSongIndex = randomNumber(answer.lyricsSongs.length)
  answers.push([answer.name, answer.lyricsSongs[lyricSongIndex]])
  removeElement(bandsIndexes, bands.indexOf(answer))

  // filling out the lyric and band answer on the game screen
  bandsName[answerOption].innerHTML = answer.name
  bandsImage[answerOption].src = answer.image
  lyrics.innerHTML = answer.lyricsSongs[lyricSongIndex][0]
  bandsCache[answerOption] = answer

  // filling out an option value with a random band and making sure that this option value and the remaining option value are not the same.
  let bandIndex = bandsIndexes[randomNumber(bandsIndexes.length)]
  removeElement(bandsIndexes, bandIndex)
  let band = bands[bandIndex]
  bandsName[secondOption].innerHTML = band.name
  bandsImage[secondOption].src = band.image
  bandsCache[secondOption] = band

  // filling out the last option for a band
  bandIndex = bandsIndexes[randomNumber(bandsIndexes.length)]
  band = bands[bandIndex]
  bandsName[thirdOption].innerHTML = band.name
  bandsImage[thirdOption].src = band.image
  bandsCache[thirdOption] = band

  // +1 to the total rounds played
  round++
}

function getUserChoice(event) {
  if (
    event.target === boxes[0] ||
    event.target === bandsName[0] ||
    event.target === bandsImage[0]
  ) {
    userChoices.push(bandsCache[0].name)
  } else if (
    event.target === boxes[1] ||
    event.target === bandsName[1] ||
    event.target === bandsImage[1]
  ) {
    userChoices.push(bandsCache[1].name)
  } else {
    userChoices.push(bandsCache[2].name)
  }
  console.log(answers)
  console.log(userChoices)

  if (round === 10) {
    return
  }

  fillGameScreen()
}

function startGame() {
  // Making start button invisible and the game screen visible
  startGameButtonDivision.style.display = "none"
  lyrics.style.display = "block"
  options.style.display = "block"
  fillGameScreen()
}

startGameButton.onclick = startGame
for (let i = 0; i < 3; i++) {
  boxes[i].addEventListener("click", getUserChoice)
}
console.log("abcdefghijk"[Math.floor(Math.random() * 11)])
