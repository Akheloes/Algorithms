/**
 * Generates a random integer under an input cap integer.
 * For example, if entry is 7, we'd expect a random integer between 0 and 7
 */
function randomIntegerCaped(Cap) {
    let seed = Math.random();
    let scaling = seed * (Cap + 1);
    return Math.floor(scaling);
}

// let cap = 7;
// let results = [];
// for(let i=0; i<100; i++) {
//     results.push(randomIntegerCaped(cap));
// }

// console.log(results);