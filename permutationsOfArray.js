function permute(input) {
  var permArr = [],
      usedChars = [];
  return (function main() {
    for (var i = 0; i < input.length; i++) { // Once input (in closure of this inner method) is peeled off entirely, the for loop is broken
      var ch = input.splice(i, 1)[0]; // extracts character and cuts it off the input array
      usedChars.push(ch);
      if (input.length == 0) {
        permArr.push(usedChars.slice()); // slice, used in this way, just makes a copy
      }
      main();
      input.splice(i, 0, ch); // Executes after the return permArr is executed, inserts 'ch' at i-th index
      usedChars.pop();
    }
    return permArr; // This return statement is engaged once the loop is broken, loop at comment above
  })();
}

/**
 * With swapping technique, is O(n!)
 */
function permutations(array) {
  var perms = [];
  var input = array.slice();
  return (function recurrence(input, n = input.length){
    if(n == 1) {
      perms.push(input.slice());
    }
    for(let i=0; i<n; i++) {
      swap(input, i, n-1);
      recurrence(input, n-1);
      swap(input, i, n-1);
    }
    return perms;
  })(input);
}

function swap(input, firstIndex, secondIndex) {
  [input[firstIndex], input[secondIndex]] = [input[secondIndex], input[firstIndex]];
  return input;
}

/**
 * Examples of use
 */

let array = [1, 2, 3, 4];
let result = permutations(array);
console.log(result);