const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed✅:" + actual + "===" + expected);
  }
  if (actual !== expected) {
    console.assert('Assertion Failed🚫:' + actual + '!==' + expected);
  }
};

let string = 'aaabBBbbsssbbbeeddd'
const countLetters = function(string){
  let result = {}
  let allstring = string.toLowerCase()

  for (let letter of allstring){
    if (result[letter]){
      result[letter] = result[letter]+ 1
    }
    else{
      result[letter] = 1
    }
  }
  return result
}

console.log(countLetters(string))