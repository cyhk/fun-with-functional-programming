/*****************************************
               Y O U R  T U R N
******************************************/
// -- Challenge 1 ------------------------
// Make a function called "words" which 
// returns a list of words in a string.
// Use only the split function and
// currying.


console.log("Testing challenge 1...");

var words = function (w) {
  return w === undefined ? 
    words : w.split(' ');
};

assertEqualArrays(
  ['one', 'two', 'three'],
  words('one two three')
);
assertEqualArrays(
  ['one', 'two', 'three'],
  words()()()('one two three')
);
console.log("passed");

// -- Challenge 2 ------------------------
// Create a function to triple every
// number in a list using only
// _.multiply and _.map.

console.log("Testing challenge 2...");

var tripleList = function (list) {
  return list === undefined ?
    tripleList : list.map(item => item*3);
};

assertEqualArrays([3,6,9], tripleList([1,2,3]));
assertEqualArrays([3,6,9], tripleList()()([1,2,3]));

console.log("passed");

// -- Challenge 3 ------------------------
// Create a function to find the largest
// number in a list. You can use the
// greater(a,b) function which returns the
// greater of its two inputs. You can do
// this with currying and one of the list
// functions _.map, _.filter, or _.reduce.

console.log("Testing challenge 3...");

var greater = function(a,b) {
  return a > b ? a : b;
};

var max = function(list) {
  return list === undefined ?
    max : list.reduce((acc, elem) => acc = greater(acc, elem));
};

assertEqual(9, max([1,-3483,9,7,2]));
assertEqual(-1, max()()()([-21,-3483,-2,-1]));

console.log("passed");

console.log("All tests pass.");

// --- More practice ---------------------

var addThree = function(x) {
  if (x === undefined) return addThree;

  let sum = x;
  let count = 1;
  
  return function addMore(y) {
    if (y === undefined) return addMore;

    sum += y;
    count++;

    return count === 3 ? sum : addMore;
  }
}
console.log(addThree(2)(3)(4) === 9);
console.log(addThree(1)()()(3)()()(4) === 8);

/******************************************
        B A C K G R O U N D  C O D E
*******************************************/

function assertEqualArrays(x,y) {
  if(x.length !== y.length) throw("expected "+x+" to equal "+y);
  for(var i in x) {
    if(x[i] !== y[i]) {
      throw("expected "+x+" to equal "+y);
    }
  }
}
function assertEqual(x,y){
  if(x !== y) throw("expected "+x+" to equal "+y);
}
