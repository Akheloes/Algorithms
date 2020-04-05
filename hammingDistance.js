/**
 * Calculates the hamming distance between two strings
 */
function hammingDistance(firstString, secondString) {
    let distance = 0;
    let maxSize = Math.max(firstString.length, secondString.length);
    for(let i=0; i < maxSize; i++) {
        if(firstString[i] !== secondString[i]) {
            distance++;
        }
    }
    return distance;
}

// let stringOne = "abed";
// let stringTwo = "abed";
// let stringThree = "a";
// let stringFour = "abex";
// let distance = hammingDistance(stringOne, stringTwo);
// console.log(distance);