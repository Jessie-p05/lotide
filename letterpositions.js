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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i =0; i < sentence.length; i++) {
    
   if (results[sentence[i]]){
     results[sentence[i]].push(i);
   } else if (sentence[i] != ' ') {
     results[sentence[i]] = [i];
   }
 }
  return results;
};



console.log(letterPositions("lighthouse in the house"));