/**
 * Algorithm which realises the intersection of two arrays
 * - Step 1: if an element is common to both arrays, capture it in the intersection;
 * - Step 2: but verify first if it's not already in the intersection array - to avoid duplicates
 * - Step 3: ascending sorting, just for esthetics
 */
function naive_intersection(firstArray, secondArray) {
    let intersection_ = [];
    for(let f=0; f<firstArray.length; f++) {
        for(let s=0; s<secondArray.length; s++) {
            if(firstArray[f] == secondArray[s]) { // Step 1
                if(intersection_.indexOf(firstArray[f]) == -1) { // Step 2
                    intersection_.push(firstArray[f]);
                }
            }
        }
    }
    return intersection_.sort(); // Step 3
}

/**
 * Going for more javascripty style
 */
function jsy_intersection(firstArray, secondArray) {
    return firstArray.filter(f => secondArray.indexOf(f) !== -1).sort(); //@todo: eliminate duplicates
}

const randomArrayGenerator = require('./randomArrayGenerator').randomArrayGenerator;

let first = randomArrayGenerator(100);
let second = randomArrayGenerator(100);

console.time('jsy');
let result = jsy_intersection(first, second);
console.timeEnd('jsy');

console.time('naive');
let result_ = naive_intersection(first, second);
console.timeEnd('naive');

console.log(result);
console.log(result_);