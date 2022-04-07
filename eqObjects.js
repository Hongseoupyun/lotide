
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed🧡:" + actual + "===" + expected);
  }
  if (actual !== expected) {
    console.assert('Assertion Failed😈:' + actual + '!==' + expected);
  }
};

function eqArrays(a,b){
  if(Array.isArray(a) && Array.isArray(b)) {
    if(a.length === b.length){
      for(let i = 0; i < a.length; i++){
         if(a[i] === b[i]){
            return true
         } return false
      }
    }return false
  }return false
  }

const eqObjects = function(object1, object2) {
  let arrayofkey1 = Object.keys(object1)
  let arrayofkey2 = Object.keys(object2)
  if (arrayofkey1.length === arrayofkey2.length){
    for (let key of arrayofkey1){
      if (object1[key] === object2[key] ){
        return true
      }
    }
  }
return false
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

