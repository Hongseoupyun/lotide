const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
///if value === object.keys(object) then return the key

const findKeyByValue = function(object,value){
  let result =''
  let arrayofkey = Object.keys(object)
  //console.log(arrayofkey)

  for (let key of arrayofkey){
    //console.log(key)
    if ( object[key] === value){
      return result = key
    }
  }
  
return result
}

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))

