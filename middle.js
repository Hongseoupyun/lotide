const middle =(array) => {
let result = []

if (array.length < 3){
  result = []
}
if (array.length % 2 !==0){
  result.push(array[(array.length-1) /2])
}
if (array.length % 2 === 0){
  result.push(array[(array.length)/2-1],array[array.length/2])
}
return result}



console.log(middle([1,2,3]))
console.log(middle([1,2,3,4,5,6]))

