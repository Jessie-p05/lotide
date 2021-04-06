const assertArraysEqual = function (array1, array2) {
  const equalResult = eqArrays(array1, array2);
  if (equalResult === true) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌Assertion Failed: ${array1} !== ${array2}`);
  }
};


const eqArrays = function (array1, array2) {
  let isEqual = true;
  for (let j = 0; j < array1.length; j++) {
    if (array1[j] !== array2[j]) {
      return isEqual = false;
    }
  }
  return isEqual;
};



const without = function (array1, array2) {
  let itemsToRemove = [];
  let isIncluded = false;
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array1[i] === array2[j]) {
        isIncluded = true;
      }
    }
    if (isIncluded === false) {
      itemsToRemove.push(array1[i])
    }
  }
  return itemsToRemove;
}


// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
module.exports = without;