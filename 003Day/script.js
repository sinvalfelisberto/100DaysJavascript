const randColor = document.querySelector('.randColor')
const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', () => {
    const color = setRandomColor()
    randColor.innerHTML = color
    setBackGroundColor(color)
})

function setRandomColor() {
    const color = Math.random().toString(16).substring(2, 8)
    return `#${color}`
}

function setBackGroundColor(color) {
    document.body.style.backgroundColor = color
}