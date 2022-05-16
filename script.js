function cambia_texto() {
  const tit = document.getElementById('a_title')

  tit.style.color = 'red'
  tit.style.fontFamily= 'Liberation Mono'
  tit.style.fontStyle= 'italic'
  tit.innerHTML = "Haloo!!!"
}

function clickFunction(x) {
  console.log(x)
}