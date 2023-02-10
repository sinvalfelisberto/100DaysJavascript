 const result = document.querySelector('.result')
 const btn = document.querySelector('.btn')
 const word = document.querySelector('.input-text')

function mouseEmCima(testo) {
    alert(testo)
 }

 btn.addEventListener('click', (event) => {
    let wordValue = word.value.toLowerCase()
    let retorno = countVowel(wordValue)
    result.innerHTML = retorno
 })

 function countVowel(wordValue) {
    let vowelCount = 0
    for (let i = 0; i < wordValue.length; i++){
        let letter = wordValue[i]
        if (letter.match(/([a,e,i,o,u])/)) {
            vowelCount++
        }
    }
    return `${wordValue.toUpperCase()} contains ${vowelCount} vowel(s)`
 }