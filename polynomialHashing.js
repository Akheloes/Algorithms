/**
 * A function which hashes a string based on the Rabin–Karp (under Holder's) algorithm.
 */
function polynomialHashing(string) {
    let base = 17;
    let hash = 0;
    for(s in string) {
        hash += (hash*base + string.charCodeAt(s)) % string.length;
    }
    return hash;
}

/**
 * Example of use
 */
let string = 'string';
let hash = polynomialHashing(string);
console.log(hash);