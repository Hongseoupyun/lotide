
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





const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);




