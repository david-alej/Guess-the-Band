import { bands } from "./singerData.js"

// Following variables are elements that are ordered the same as they appear in the HTML file
// Individual elements:
let title = document.getElementsByTagName("h1")[0]
let lyrics = document.getElementById("lyrics")

// Grouped Elements: later varaibles are child elements of the first variable
let startGameButtonDivision = document.getElementsByClassName("container")[0]
let startGameButton = document.getElementsByClassName("game-button")[0]

let options = document.getElementById("container-one")
let boxes = document.getElementsByClassName("box")
let bandsName = document.getElementsByClassName("bands")
let bandsImage = document.getElementsByClassName("bands-image")

let results = document.getElementsByClassName("table-container")[0]
let table = document.getElementsByTagName("table")[0]
let secondGameButton = document.getElementsByClassName("game-button")[1]

let matchHistory = document.getElementsByClassName("table-container")[1]
let tableHistory = document.getElementsByTagName("table")[1]

// Initializing meta information about the game
let round = 0
let match = 0
let correctRounds = 0
let answers = [] // formatted: [ [band name, [lyrics, name of song]], ... ]
let userChoices = [] // formatted: [ user band choice, ...]
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

function fillResultsScreen() {
  lyrics.style.display = "none"
  options.style.display = "none"
  results.style.display = "block"
  matchHistory.style.display = "block"
  title.innerHTML = "Match " + match

  // Filling out the Resuls table
  for (var i = 1, row; (row = table.rows[i]); i++) {
    if (answers[i - 1][0] === userChoices[i - 1]) {
      row.style.backgroundColor = "#32CD32"
      correctRounds++
    } else {
      row.style.backgroundColor = "#8B0000"
    }
    for (var j = 0, col; (col = row.cells[j]); j++) {
      if (j === 0) {
        col.innerHTML = i
      } else if (j === 1) {
        col.innerHTML = answers[i - 1][1][0]
      } else if (j === 2) {
        col.innerHTML = answers[i - 1][1][1]
      } else if (j === 3) {
        col.innerHTML = answers[i - 1][0]
      } else if (j === 4) {
        col.innerHTML = userChoices[i - 1]
      }
    }
  }

  // Making new row that stores information of this match in the Match History
  let matchRow = document.createElement("tr")
  let matchNumber = document.createElement("td")
  let matchResults = document.createElement("td")
  matchNumber.innerHTML = match
  matchResults.innerHTML = correctRounds
  matchRow.appendChild(matchNumber)
  matchRow.appendChild(matchResults)
  tableHistory.appendChild(matchRow)
}

function fillGameScreen() {
  // +1 to the total rounds played
  round++

  title.innerHTML = "Round " + round

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

  // Getting the indecies for the bands and making sure there are no duplicates in the band options
  let secondIndex = bandsIndexes[randomNumber(bandsIndexes.length)]
  removeElement(bandsIndexes, secondIndex)

  let thirdIndex = bandsIndexes[randomNumber(bandsIndexes.length)]
  removeElement(bandsIndexes, thirdIndex)

  // Removing all previous answers in this match from the possible choices of this round's answers
  if (round !== 0) {
    for (let i = 0; i < answers.length; i++) {
      for (let j = 0; j < bandsIndexes.length; j++) {
        if (answers[i][0] === bands[bandsIndexes[j]].name) {
          removeElement(bandsIndexes, bandsIndexes[j])
        }
      }
    }
  }

  const answerIndex = bandsIndexes[randomNumber(bandsIndexes.length)]
  const answer = bands[answerIndex]
  const lyricSongIndex = randomNumber(answer.lyricsSongs.length)

  // Insesrting and storing values
  lyrics.innerHTML = answer.lyricsSongs[lyricSongIndex][0]
  answers.push([answer.name, answer.lyricsSongs[lyricSongIndex]])

  // Filling out option values, text and image inside options
  let optionsIndexes = [
    [answerOption, answerIndex],
    [secondOption, secondIndex],
    [thirdOption, thirdIndex],
  ]
  for (let i = 0; i < optionsIndexes.length; i++) {
    const ith = optionsIndexes[i]
    const option = ith[0]
    const index = ith[1]
    bandsName[option].innerHTML = bands[index].name
    bandsImage[option].src = bands[index].image
    bandsCache[option] = bands[index]
  }
}

function getUserChoice(event) {
  // Storing user choice
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
  // here user wants to check answers and user choices on DevTools console
  console.log(answers)
  console.log(userChoices)

  // Checking if match has eneded
  if (round === 10) {
    match++
    fillResultsScreen()

    // Reseting values
    round = 0
    answers = []
    userChoices = []
    correctRounds = 0
    return
  }

  //Next round
  fillGameScreen()
}

function startGame() {
  // Making start button invisible and the game screen visible
  startGameButtonDivision.style.display = "none"
  results.style.display = "none"
  matchHistory.style.display = "none"
  lyrics.style.display = "block"
  options.style.display = "block"

  fillGameScreen()
}

startGameButton.onclick = startGame
for (let i = 0; i < 3; i++) {
  boxes[i].addEventListener("click", getUserChoice)
}
secondGameButton.onclick = startGame
