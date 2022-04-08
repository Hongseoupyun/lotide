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

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
};