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
// assertArrayEqual([1, 2, 3], [1, 2, 3]);

const takeUntil = function (array, callback) {
  // ...
  const results = [];
  // for (let i = 0; i < array.length; i++) {
  //   if (!callback(array[i])){
  //     results.push(array[i])
  //   }
  //   else {
  //     break;
  //   }
  // }
  // return results

  for (let elm of array) {
    if (!callback(elm)) {
      results.push(elm)
    }
    else break;
  }
  return results
}


// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
// assertArrayEqual(results1, [ 1, 2, 5, 7, 2 ]);
// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
// assertArrayEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
module.exports = takeUntil;