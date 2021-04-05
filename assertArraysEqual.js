const eqArrays = require('./eqArrays')
const assertArraysEqual = function (array1, array2) {
  const equalResult = eqArrays(array1, array2);
  if (equalResult === true) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌Assertion Failed: ${array1} !== ${array2}`);
  }
};


// const eqArrays = function (array1, array2) {
//   let isEqual = true;
//   for (let j = 0; j < array1.length; j++) {
//     if (array1[j] !== array2[j]) {
//       return isEqual = false;
//     }
//   }
//   return isEqual;
// };
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
module.exports = assertArraysEqual;