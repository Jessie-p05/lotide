const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  let isEqual = true;
  if (key1.length === key2.length) {
    for (let i = 0; i < key1.length; i++) {
      if (typeof (object1[key1[i]]) === 'object') {
        if (object1[key1[i]].length === object2[key1[i]].length) {
          for (let j = 0; j < object1[key1[i]].length; j++) {
            if (object1[key1[i]][j] !== object2[key1[i]][j]) {
              return false;
            }
          }
        }
        else {
          return false;
        }
      }
      else if (object1[key1[i]] !== object2[key1[i]]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return isEqual;
}
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true
// // console.log('hello world')
// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2));  
// console.log('hello')
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true
// assertEqual(eqObjects(cd,dc), true)
// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
// assertEqual(eqObjects(cd,cd2),false)
module.exports = eqObjects;
