const assertArrayEqual = function (array1, array2) {
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

const flatten = function (array) {
  const flattenArray = [];
  for (let j = 0; j < array.length; j++) {
    if (Array.isArray(array[j])) {
      for (let i = 0; i < array[j].length; i++) {
        flattenArray.push(array[j][i]);
      }
    } else {
      flattenArray.push(array[j]);
    }
  }
  return (flattenArray);
};

// console.log(flatten([1, 2, [3, 4], 5, [6]]));