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
 * Returns the array of commun substrings of two strings
 */
// @TODO: eliminate revisiting the substrings of a substring
function commonSubstrings(firstString, secondString) {
    let substringsArray = [];
    for(let i=0; i<firstString.length; i++) {
        for(let k=0; k<secondString.length; k++) {
            if (firstString[i] === secondString[k]) {
                let unbroken = true;
                let substring = '';
                let _i_ = i;
                let _k_ = k;
                while(unbroken && _i_ < firstString.length && _k_ < secondString.length) {
                    if(firstString[_i_] === secondString[_k_]) {
                        substring += firstString[_i_];
                        _i_++;
                        _k_++;
                    } else {
                        unbroken = false;
                    }
                }
                if(substring.length > 1) {
                    substringsArray.push(substring);
                }
            }
        }
    }
    let prefiltered = substringsArray.filter((item, index, array) => {return array.indexOf(item) === index});
    return interContainelessArray(prefiltered);
}


/**
 * Example of use
 */
let firstString = 'aababbcccb'; 
let secondString = 'ababbcb';
let result = commonSubstrings(firstString, secondString);
console.log(result);