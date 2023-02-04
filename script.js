const board = document.querySelector('#board')
const colors = ['#f2b3b3', '#6f64ed', '#64d4ed', '#64ed8b', '#d2ed64', '#ed8464']
const SQUARES_NUMBER = 1050

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseleave', () => removeColor(square))


  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = `${color}`
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}