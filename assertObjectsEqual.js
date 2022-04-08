const assertObjectsEqual = function(actual, expected) {
  if (Object.is(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed:${JSON.stringify(actual)}`, "===", `${JSON.stringify(expected)}`);
  }
  if (Object.is(actual,expected) === false) {
    console.log(`🛑🛑🛑 Assertion Failed:${JSON.stringify(actual)}`, '!==', `${JSON.stringify(expected)}`);
  }
};



assertObjectsEqual({name : 'yun' , age : 26},{name : 'seo', age : 32});
