function assertArraysEqual(a,b){
  let result 
  for ( i =0 ; i < a.length ; i ++){
      if (a.length === b.length && a[i]===b[i]){
        result = true
      }
      else{
        result = false
      }
    }
  if (result === true){
    console.log('The arrays are equal!')
  }
  else{
    console.log('The arrays are not equal!')
  }
}



module.exports = assertArraysEqual;



