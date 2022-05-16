function createRandomArray(x) {
  let simonArray = []
  for (let i=x; i > 0; i--) {
    binary = Math.round(Math.random()).toString() + Math.round(Math.random()).toString()
    simonArray+= parseInt(binary, 2)
  }
  return simonArray
}

function displayArray(array) {
  for (const element of array) {
    console.log(element)
  }
}

function playGame() {
  for (x=3; x>0; i++) {
    var simonArray = createRandomArray(i)
    displayArray(simonArray)
    }
  }

function clickFunction(x) {
  clickNumber = x[0]
  
}

//funcion comienze el juego
// ranInt 0-3 {} i++
// []
// mostrar secuencia
//0-3
//game.close()
// your score is i
// math.random(0,3)

