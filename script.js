
pos = 0 // position
length = 0 // initialise length of array
simonArray = createRandomArray(length) // initialise simonArray
disableButtonPress(true) // make simon buttons not trigger endGame

// creates and updates the SimonArray 
function createRandomArray(x) {
  if (x >= 3) { // if already created, add another item
    x++
    simonArray = Array.from(simonArray)
    binary = Math.round(Math.random()).toString() + 
               Math.round(Math.random()).toString()
    simonArray.push(parseInt(binary, 2))
                    
    console.info(x, simonArray)
  } else { // else create array of length 3
    simonArray = []
    for (let i = 3; i > 0; i--) {
      binary = Math.round(Math.random()).toString() + 
               Math.round(Math.random()).toString()
      simonArray += parseInt(binary, 2)
    }
    return simonArray
  }
}

// wait on each  highlighted item
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// show simonArray this round
async function displayArray() {
  //flag_display = true
  disableButtonPress(true)
  
  for (let i = 0; i < (simonArray.length); i++) {
    element = simonArray[i]
    let previousColour = document.getElementById(element).style.backgroundColor
    document.getElementById(element).style.backgroundColor = '#ffffff'
    await sleep(1000)
    document.getElementById(element).style.backgroundColor = previousColour
    await sleep(100)
  }

  disableButtonPress(false)
}

// enable / disable buttons
function disableButtonPress(x) {
  var botones = document.getElementsByClassName("bot")
  
  for(boton of botones) {
    boton.disabled = x 
  }
}

// compare each click to simonArray
function clickFunction(click) { 
  if (click != simonArray[pos]) {
    pos = 0
    endGame()
    //return
  } else {
    pos++
    if (pos == simonArray.length) {
      createRandomArray(pos)
      pos = 0
      disableButtonPress(true)
      newRound()
    }
  }
}

function newRound() {
  displayArray(simonArray)
 // gameplay
  //  newRound(length++)
}

function loseButtonClick() {
  document.getElementById('losePopup').style.visibility = 'hidden';

}

var flg_responseok = false

function errorornot() {
  if (!flg_responseok) {
    document.getElementById('loseImage').src = 'dumbimg.jpg'
  }
}

function endGame() {
  disableButtonPress(true)
  var url_api = "https://dog.ceo/api/breeds/image/random"
  flg_responseok = false
  setTimeout(errorornot, 1000)
  
  fetch(url_api).then(     
    response => {
      if (response.ok) {
        return response.text()
      } else {
        //throw new Error(`HTTP error: ${response.status}`);
        return "{'message':'dumbimg.jpg'}"
      }
    }     
  ).then( 
      t => { 
        document.getElementById('loseImage').src = JSON.parse(t).message
        
        document.getElementById('losePopup').style.visibility = 'visible';
        flg_responseok = true
      }
  ).catch(console.log('pipo'))
  
  simonArray = createRandomArray(0)
  
}
