const eqArrays = function (array1, array2) {
  let isEqual = true;
  for (let j = 0; j < array1.length; j++) {
    if (array1[j] !== array2[j]) {
      return isEqual = false;
    }

  }

  return isEqual;
};


module.exports = eqArrays;


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
