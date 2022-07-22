words = process.argv.slice(2)

//split words
//move first letter to the end
//add "ay" at the end

pigLatinGenerator = function(array){
  array.map(e=>{
    return console.log(e.slice(1) + e[0]+ "ay")
  })
}

pigLatinGenerator(words)