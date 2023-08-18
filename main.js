import { bands } from "./singerData.js"

let startGameButton = document.getElementById("start-game")
let startGameButtonDivision = document.getElementById("container")
let lyrics = document.getElementById("lyrics")
let options = document.getElementById("container-1")

let boxes = document.getElementsByClassName("box")
let bandsName = document.getElementsByClassName("bands")
let bandsImage = document.getElementsByClassName("bands-image")

// Initializing meta information about the game
let round = 1
let games = 0
let answers = []
let bandsCache = []

// Following two functions are Helper functions
function randomNumber(upperLimit) {
  return Math.floor(Math.random() * upperLimit)
}

function removeElement(array, unwantedElement) {
  const index = array.indexOf(unwantedElement)
  array.splice(index, 1)
}

function fillGameScreen() {
  if (round > 15) {
    return
  }
  // Getting the positions of the band answer for the lyric and the other two options randomly
  const optionsArray = [0, 1, 2]
  const answerOption = randomNumber(3)
  removeElement(optionsArray, answerOption)
  const secondOption = optionsArray[randomNumber(2)]
  removeElement(optionsArray, secondOption)
  const thirdOption = optionsArray[0]

  // Making sure that the option values in the current round are not the same as the option values from the previous round
  let bandsIndexes = Array.from(Array(bands.length).keys())
  for (let i = 0; i < 3; i++) {
    if (round === 1) {
      break
    }
    removeElement(bandsIndexes, bands.indexOf(bandsCache[i]))
  }

  // Emptying bandsCache array
  bandsCache.splice(0, bandsCache.length)

  // Getting answer variables
  const answerIndex = bandsIndexes[randomNumber(bandsIndexes.length)]
  const answer = bands[answerIndex]
  const lyricSongIndex = randomNumber(answer.lyricsSongs.length)
  answers.push([answer.name, answer.lyricsSongs[lyricSongIndex]])

  // filling out the lyric and band answer on the game screen
  bandsName[answerOption].innerHTML = answer.name
  bandsImage[answerOption].src = answer.image
  lyrics.innerHTML = answer.lyricsSongs[lyricSongIndex][0]
  bandsCache.push(answer)

  //Removing the band answer lyric or the whole band from the bands array
  if (answer.lyricsSongs.length === 1) {
    removeElement(bands, answer)
  } else {
    removeElement(answer.lyricsSongs, answer.lyricsSongs[lyricSongIndex])
  }

  // filling out an option value with a random band and making sure that this option value and the remaining option value are not the same.
  if (answer in bands) {
    removeElement(bandsIndexes, bands.indexOf(answer))
  }
  let bandIndex = randomNumber(bandsIndexes.length)
  removeElement(bandsIndexes, bandIndex)
  let band = bands[bandIndex]
  bandsName[secondOption].innerHTML = band.name
  bandsImage[secondOption].src = band.image
  bandsCache.push(band)

  // filling out the last option for a band
  bandIndex = bandsIndexes[randomNumber(bandsIndexes.length)]
  band = bands[bandIndex]
  bandsName[thirdOption].innerHTML = band.name
  bandsImage[thirdOption].src = band.image
  bandsCache.push(band)

  // +1 to the total rounds played
  round++
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
  boxes[i].onclick = fillGameScreen
}
console.log("abcdefghijk"[Math.floor(Math.random() * 11)])
