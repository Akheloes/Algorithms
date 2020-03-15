const eliminateDuplicate = require('./eliminateDuplicate').eliminateDuplicate;

/**
 * Calculates the intersection of two arrays
 * @param {*} firstArray 
 * @param {*} secondArray 
 */
function biintersection(firstArray, secondArray) {
    let intersection_ = [];
    for(let f=0; f<firstArray.length; f++) {
        for(let s=0; s<secondArray.length; s++) {
            if(firstArray[f] == secondArray[s]) {
                intersection_.push(firstArray[f]);
            }
        }
    }
    return intersection_;
}

/**
 * Calculates the intersection of multiple arrays
 */
function intersection(arrays) {
    //calculate the intersection of the first two arrays
    let biint_ = biintersection(arrays[0], arrays[1]);
    if(arrays.length == 2) {
        return eliminateDuplicate(biint_);
    } else {
        //intersect the first intersection with the other arrays
        for(let i=2; i<arrays.length; i++) {
            biint_ = biintersection(biint_, arrays[i]);
        }
        return eliminateDuplicate(biint_);
    }
}

module.exports.intersection = intersection;