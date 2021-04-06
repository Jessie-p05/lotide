const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (str) {
  const noSpaces = str.replace(/ /g, "");
  const countObj = {};
  for (let letter of noSpaces) {
    if (countObj[letter]) {
      countObj[letter] += 1;
    } else {
      countObj[letter] = 1;
    }
  }
  return countObj
}

// console.log(countLetters("lighthouse in the house"));
module.exports = countLetters;