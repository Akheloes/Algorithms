/**
 * Takes an array and eliminates the duplicated elements in it.
 * If an element is not new, insert it in returnable array, otherwise, pass.
 */
function eliminateDuplicate(array) {
    let pure = [];
    for(let i=0; i<array.length; i++) {
        if(pure.indexOf(array[i]) == -1) {
            pure.push(array[i]);
        }
    }
    return pure;
}

module.exports.eliminateDuplicate = eliminateDuplicate;