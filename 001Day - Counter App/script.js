const count = document.querySelector('.count') 

const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', (e) => {
    if(e.target.classList.contains('add')){
        count.innerHTML ++
        setCountColor()
    }
    if(e.target.classList.contains('reset')) {
        count.innerHTML = 0
        setCountColor()
    }
    if(e.target.classList.contains('subtract')) {
        count.innerHTML --
        setCountColor()
    }
})

function setCountColor() {
    if(count.innerHTML > 0) {
        count.style.color = 'yellow'
        return
    }
    if(count.innerHTML < 0) {
        count.style.color = 'red'
        return
    }
    count.style.color = '#fff'
    return
}



// const add = document.querySelector('.add') 
// const reset = document.querySelector('.reset') 
// const subtract = document.querySelector('.subtract') 

// add.addEventListener('click', () => {
//     count.innerHTML++ 
// })

// subtract.addEventListener('click', () => {
//     count.innerHTML-- 
// })

// reset.addEventListener('click', () => {
//     count.innerHTML = 0 
// })