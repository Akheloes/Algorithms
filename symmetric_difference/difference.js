/**
 * Returns an array containing all the element of BigArray wich are not in SmallArray
 * @param {*} BigArray 
 * @param {*} SmallArray 
 */
function difference(BigArray, SmallArray) {
    let toEliminate = [];
    // Detecting all the common elements between the two arrays
    for(let b=0; b<BigArray.length; b++) {
        for(let s=0; s<SmallArray.length; s++) {
            if(BigArray[b] == SmallArray[s]) {
                toEliminate.push(BigArray[b]);
            }
        }
    }
    // Eliminate the common elements from the big array
    let e=0;
    while(e < toEliminate.length) {
        let index = BigArray.indexOf(toEliminate[e]);
        if(index != -1) {
            BigArray.splice(index, 1);
        }
        e++;
    }
    return BigArray;
}

module.exports.difference = difference;