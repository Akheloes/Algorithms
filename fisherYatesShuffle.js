/**
 * Implemantation of the fisher yates shuffle over an array
 */
function fisherYatesShuffle(array) {
    let shuffled = [...array];
    let size = array.length;
    for(let i=0; i<size; i++) {
        let shuffleIndex = randomIntegerCaped(size);
        [shuffled[i], shuffled[shuffleIndex]] = [shuffled[shuffleIndex], shuffled[i]];
    }
    return shuffled;
}

function randomIntegerCaped(Cap) {
    let seed = Math.random();
    let scaling = seed * Cap;
    return Math.floor(scaling);
}

// let array = [1, 2, 3, 4, 5, 6, 7];
// let shuffled = fisherYatesShuffle(array);
// console.log(shuffled);