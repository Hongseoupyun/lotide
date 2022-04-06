// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed🧡:" + actual + "===" + expected);
  }
  if (actual !== expected) {
    console.assert('Assertion Failed😈:' + actual + '!==' + expected);
  }
};

function eqArrays(a,b){
  for ( i =0 ; i < a.length ; i ++){
    for ( j=0 ; j < b.length ; j++){
      if (a.length === b.length && a[i]===b[j]){
        return true
      }
    }
  }
return false}

 

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
