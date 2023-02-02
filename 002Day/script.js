const rand = document.querySelector('.randomNumber') 



const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('setNumber')) {
        rand.innerHTML = setRandomNumber()
        setrandColor()
    }
    
})

function setRandomNumber() {
    return Math.floor(Math.random() * 10)
    
}

function setrandColor() {
    if(rand.innerHTML > 0) {
        rand.style.color = 'yellow'
        return
    }
    if(rand.innerHTML < 0) {
        rand.style.color = 'red'
        return
    }
    rand.style.color = '#fff'
    return
}

// const add = document.querySelector('.add') 
// const reset = document.querySelector('.reset') 
// const subtract = document.querySelector('.subtract') 

// add.addEventListener('click', () => {
//     rand.innerHTML++ 
// })

// subtract.addEventListener('click', () => {
//     rand.innerHTML-- 
// })

// reset.addEventListener('click', () => {
//     rand.innerHTML = 0 
// })