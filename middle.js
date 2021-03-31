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

const middle = function (array) {
  let middleNum =[];
  if (array.length%2 === 1){
     middleNum.push(array[Math.floor(array.length/2)]);
  } else {
      middleNum.push(array[Math.floor(array.length/2)-1])
      middleNum.push(array[Math.floor(array.length/2)])
    }
    console.log(middleNum) 
    return middleNum
}
