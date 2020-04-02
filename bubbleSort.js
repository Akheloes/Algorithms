/**
 * Bubble sort algorithm implemented on arrays for numbers
 */
function bubbleSort(unsortedArray_, comparisonFunction) {
    const unsortedArray = [...unsortedArray_];
    let swape = false;
    for(let i=0; i<unsortedArray.length; i++) {
        swape = false;
        for(let j=0; j<unsortedArray.length - i; j++) {
            if(comparisonFunction(unsortedArray[j], unsortedArray[j+1]) >= 0) {
                [unsortedArray[j], unsortedArray[j+1]] = [unsortedArray[j+1], unsortedArray[j]];
                swape = true;
            }
        }
    }
    if(!swape) { return unsortedArray; }
}

function comparator(a, b) {
    if(a == b) return 0;
    if(a < b) return 1; 
    if(a > b) return -1;
    // return a == b ? 0 : (a > b ? 1 : -1 );
}

let unsortedArray = [ 1, 5, 3, 77, 3];
let sortedArray = bubbleSort(unsortedArray, comparator);
console.log(sortedArray);

// console.log(typeof(comparator(1, 1)))