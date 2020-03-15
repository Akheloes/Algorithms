const intersection = require('./intersection').intersection;
const union = require('./union').union;
const difference = require('./difference').difference;

/**
 * To calculate symmetric difference of two arrays, we need to:
 * - calculate the union U;
 * - calculate intersection I;
 * - calculate the difference U - I;
 */
function bisym() {
    let arrays = Array.from(arguments);
    let union_ = union(arrays);
    let intersection_ = intersection(arrays);
    let difference_ = difference(union_, intersection_);

    return difference_;

}

/**
 * Symmetric difference between multiple sets (A, B, C & D) operates in the following algorithm : ((A - B) - C) - D
 */
function sym() {
    let arrays = Array.from(arguments);
    let diff = bisym(arrays[0], arrays[1]);
    for(let i=2; i<arrays.length; i++) {
        diff = bisym(diff, arrays[i]);
    }
    return diff;    
}

module.exports.symmetricDifference = sym;