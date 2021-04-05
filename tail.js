

let tail = function (array) {
  // const tailArray = [];
  // for (let i = 1; i < array.length; i++) {
  //   tailArray.push(array[i]);
  // }
  array.shift()
  return array;
};


module.exports = tail;