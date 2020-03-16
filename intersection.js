/**
 * Algorithm which realises the intersection of two arrays
 * - Step 1: if an element is common to both arrays, capture it in the intersection;
 * - Step 2: but verify first if it's not already in the intersection array - to avoid duplicates
 * - Step 3: ascending sorting, just for esthetics
 */
function intersection(firstArray, secondArray) {
    let intersection_ = [];
    for(let f=0; f<firstArray.length; f++) {
        for(let s=0; s<secondArray.length; s++) {
            if(firstArray[f] == secondArray[s]) { // Step 1
                if(intersection_.indexOf(firstArray[f]) == -1) { // Step 2
                    intersection_.push(firstArray[f]);
                }
            }
        }
    }
    return intersection_.sort(); // Step 3
}