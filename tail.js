const tail = function(words) {
  console.log(words.slice(1));
};

const assertEqual = function(actual, expected) {
  let boolean = actual === expected;
  if(boolean){
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if(!boolean){
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!