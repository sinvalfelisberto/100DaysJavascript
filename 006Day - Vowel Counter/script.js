 const result = document.querySelector('.result')
 const btn = document.querySelector('.btn')
 const word = document.querySelector('.input-text')
 


 btn.addEventListener('click', countVowel)

 function countVowel() {
    let vowelCount = 0
    let wordValue = word.value.toLowerCase()
    for (let i = 0; i < wordValue.length; i++){
        let letter = wordValue[i]
        if (letter.match(/([a,e,i,o,u])/)) {
            vowelCount++
        }
    }
    result.innerHTML = `${wordValue.toUpperCase()} contains ${vowelCount} vowel(s)`
 }