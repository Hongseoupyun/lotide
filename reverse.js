let words = process.argv.slice(2)
//without .reverse method
function reverseWords(arrOfWords) {
  let result = []
  for (let j = 0; j <= arrOfWords.length - 1; j++) {
    let reversed = ""
    for (let i = arrOfWords[j].length - 1; i >= 0; i--) {
      reversed += arrOfWords[j][i]
    }
    result.push(reversed)
  }
  return result
}
//with .reverse method
function reverseWords(arrOfWords){
  console.log(arrOfWords.map(word=>{
    return word.split('').reverse().join('')
  }))
}

//with charAt

function reverseWords(arrOfWords) {
  let result = []
  for (let j = 0; j <= arrOfWords.length - 1; j++) {
    let reversed = ""
    for (let i = arrOfWords[j].length - 1; i >= 0; i--) {
      reversed += arrOfWords[j].charAt(i)
    }
    result.push(reversed)
  }
  return result
}

console.log(reverseWords(words))
