const arguments = process.argv.slice(2);
console.log('arguments:', arguments);

// Edge case: We need at least 2 arguments.
if (arguments.length < 2) {
  console.log(`Please add at least 2 command-line arguments`);
  process.exit();
}

const convertToNum = function (numbers) {
  const outputArr = [];

  for (let nb of numbers) {
    outputArr.push(Number(nb));
  }

  return outputArr;
};

// goes through each
// for let i = 0 => c-style loop
// for of
// for each

const sum = function (numbers) {
  let total = 0;
  console.log('numbers', numbers);
  for (let nb of numbers) {
    
    if (isNaN(nb)) {
      console.log(`Error: please input only numbers`);
      process.exit(); // exit the script
    }

    if (Number.isInteger(nb)) {
      // typecast
      total += nb;
    }

    console.log('nb:', nb, 'total:', total);
  }
  return total;
};

const result = sum(convertToNum(arguments));

console.log('Result:', result);