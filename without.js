const without = function(source,itemsToRemove){
let results = []

for (let item1 of source){
  let matched = true
  for (let item2 of itemsToRemove){
    if (item1 === item2){
     matched = false 
    }
  }if (matched){
    results.push(item1)
  }
}
return results
}
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]