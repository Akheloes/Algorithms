
function naive_eliminateDuplicateArray(array) {
    let pure = [];
    for(let i=0; i<array.length; i++) {
        if(pure.indexOf(array[i]) == -1) {
            pure.push(array[i]);
        }
    }
    return pure;
}

/**
 * Takes an array and returns its purified (duplicatless) version
 */
function js_style_eliminateDuplicateArray(array) {
    return array.filter((item, pos) => { return array.indexOf(item) == pos });
}

let randomArrayGenerator = require('./randomArrayGenerator').randomArrayGenerator;
let array = randomArrayGenerator(100).sort();

console.time('naive');
let naive = naive_eliminateDuplicateArray(array);
console.timeEnd('naive');

console.time('js_style');
let js_style = js_style_eliminateDuplicateArray(array);
console.timeEnd('js_style');