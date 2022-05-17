function createRandomArray(x) {
  let simonArray = []
  for (let i = x; i > 0; i--) {
    binary = Math.round(Math.random()).toString() + Math.round(Math.random()).toString()
    simonArray += parseInt(binary, 2)
  }
  return simonArray
}

function returnColour(element, prev) {
  document.getElementById(element).style.background=previousColour;
}

function displayArray(array) { 
  for (const element of array) {
    var previousColour = document.getElementById(element).style.background
    console.log(previousColour)
    document.getElementById(element).style.background='#ffffff'
    console.log(element)
    setTimeout(returnColour, 100, [element, previousColour])
  }
}



function clickFunction(x) {
  console.log(x)
}

function newRound(length = 3) {
  var simonArray = createRandomArray(length)
  displayArray(simonArray)
  

  

  length++
}

//funcion comienze el juego
// ranInt 0-3 {} i++
// []
// mostrar secuencia
//0-3
//game.close()
// your score is i
// math.random(0,3)

