/**
 * Takes an array an returns only the elements which are not intercontained,
 * for example: 'ab' and 'a' are intercontained, 'abce' and 'bc' are intercontained, etc.
 * 'abc' and 'bd' are not intercontained
 */
function intercontained(firstString, secondString) {
    return (firstString.includes(secondString) || secondString.includes(firstString))
}

/**
 * Takes an array and return it's intercontained-purified-version, 
 * that is, if two elements are intercontained, they the smallest is eliminated.
 * Example: if input is ['ee', 'abcd', 'ab', 'abc', 'e', 'abcd', 'abcde'], output is ['ee', 'abcde']
 */
function interContainelessArray(array) {
    let purified = [];
    for(let outer=0; outer < array.length; outer++) {
        let biggest = undefined;
        for(let inner=0; inner < array.length; inner++) {
            if(intercontained(array[outer], array[inner]) && outer !== inner) {
                biggest = array[outer].length > array[inner].length ? array[outer] : array[inner];
            }
        }
        if(biggest && !purified.includes(biggest)) {
            purified.push(biggest);
        }
    }
    return purified;
}

/**
 * Example of use
 */
let array = ['ee', 'abcd', 'ab', 'abc', 'e', 'abcd', 'abcde'];

let result = interContainelessArray(array);
console.log(result);