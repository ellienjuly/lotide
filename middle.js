const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(arr) {
  let center = arr.length / 2;
  let noCenter;
  let result = [];
  
  if (center > 1) {
    if (!Number.isInteger(center)) {
      result.push(arr[Math.ceil(center - 1)]);

      return result;

    } else if (Number.isInteger(center)) {
      result.push(arr[center - 1]);
      result.push(arr[center]);
      
      return result;
    }
  } else {
    return noCenter;
  }
};


module.exports = middle;