const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

btn.addEventListener('click', palindrome)

function palindrome() {
    const word = document.querySelector('.input-text').value
    let len = word.length
    let start = word.substring(0, Math.floor(len/2)).toLowerCase()
    let end = word.substring(len - Math.floor(len/2)).toLowerCase()
    let flip = end.split('').reverse().join('')
    if(flip == start) {
        result.innerHTML = `${word.toUpperCase()} is a Palidrome!`
        return
    }
    result.innerHTML = `${word.toUpperCase()} is not a Palindrome!`
}