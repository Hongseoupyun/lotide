const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


assertArraysEqual(eqArrays(middle([1,2,3]),[1,2,3]));