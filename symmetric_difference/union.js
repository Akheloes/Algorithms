const concatWithoutMultiple = require('./concatWithoutMultiple').concatWithoutMultiple;

/**
 * Calculates the union of multiple arrays
 */
function union(arrays) {
    let concatAndUnique = concatWithoutMultiple(arrays);
    return concatAndUnique;
}

module.exports.union = union;

