pos = 0; length = 0
simonArray = createRandomArray(length)

function createRandomArray(x) {
  if (x >= 3) {
    x++
    simonArray = Array.from(simonArray)
    binary = Math.round(Math.random()).toString() + 
               Math.round(Math.random()).toString()
    simonArray.push(parseInt(binary, 2))
                    
    console.info(x, simonArray)
  } else {
    simonArray = []
    for (let i = 3; i > 0; i--) {
      binary = Math.round(Math.random()).toString() + 
               Math.round(Math.random()).toString()
      simonArray += parseInt(binary, 2)
    }
    return simonArray
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function displayArray() {
  for (let i = 0; i < (simonArray.length); i++) {
    element = simonArray[i]
    let previousColour = document.getElementById(element).style.backgroundColor
    document.getElementById(element).style.backgroundColor = '#ffffff'
    await sleep(1000)
    document.getElementById(element).style.backgroundColor = previousColour
    await sleep(100)
  }
}

function clickFunction(click) {
  if (click != simonArray[pos]) {
    endGame()
  } else
    pos++

  if (pos == simonArray.length) {
    createRandomArray(pos)
    pos = 0
    newRound()
  }
}

function newRound() {
  displayArray(simonArray)
 // gameplay
  //  newRound(length++)
}

function endGame() {
  
}

//funcion comienze el juego
// ranInt 0-3 {} i++
// []
// mostrar secuencia
//0-3
//game.close()
// your score is i
// math.random(0,3)

