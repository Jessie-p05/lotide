const assertEqual = function(actual,expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
    } else {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    }
  }
  
};

let tail = function(array) {
  const tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);