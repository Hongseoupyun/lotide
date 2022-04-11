
function eqArrays(a,b){
  for ( i =0 ; i < a.length ; i ++){
    for ( j=0 ; j < b.length ; j++){
      if (a.length === b.length && a[i]===b[j]){
        return true
      }
    }
  }
return false}

module.exports = eqArrays;
 

