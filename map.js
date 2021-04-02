const assertArrayEqual = function(array1,array2) {
  const equalResult = eqArrays(array1,array2);
  if (equalResult === true) {
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`❌Assertion Failed: ${array1} !== ${array2}`);
  }
};


const eqArrays = function(array1, array2) {
  let isEqual = true;
  for (let j = 0; j < array1.length; j++) {
    if (array1[j] !== array2[j]) {
      return isEqual = false;
    }
  }
  return isEqual;
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[2]);
const results3 = map(words, word => word+1);

// console.log(results1);

assertArrayEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArrayEqual(results2, [ 'o', 'n', undefined, 'j', 'm' ]);
assertArrayEqual(results3, ["ground1", "control1", "to1", "major1", "tom1"]);
