/**
 * Concatenates multiple arrays
 */
function concatMultiple(arrayOfArrays) {
    let ensemble = []; 
    for(let i=0; i<arrayOfArrays.length; i++) {
        ensemble = ensemble.concat(arrayOfArrays[i]);
    }

    return ensemble;
}

module.exports.concatMultiple = concatMultiple;