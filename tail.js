const assertEqual = require('./assertEqual');

const tail = function(words) {
  console.log(words.slice(1));
};

module.exports = tail;