
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("Assertion Passed🧡:" + actual + "===" + expected);
  }
  if (actual !== expected) {
    console.assert('Assertion Failed😈:' + actual + '!==' + expected);
  }
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const countOnly =function(allItems, itemsToCount){
  let result ={}
  
  for (let item of allItems){
    for (let name in itemsToCount){
      if (item === name && itemsToCount[name]){
        if (result[name]){
          result[name] +=1
        }
        else{
          result[name] = 1
        }
      }
    }
  }
return result}

console.log(countOnly(firstNames,{ "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }))




