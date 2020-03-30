/**
 * Calculates the cartesian product of two sets (represented as arrays)
 * @param {*[]} firstSet 
 * @param {*[]} secondSet 
 * @returns {*[]}
 */
function cartesianProduct(firstSet, secondSet) {
    if(!firstSet || !secondSet) {
        return null;
    }
    let product = [];
    for(let f=0; f<firstSet.length; f++) {
        for(let s=0; s<firstSet.length; s++) {
            product.push([firstSet[f], secondSet[s]]);
        }
    }
    return product;
}

let firstSet = [1, 2];
let secondSet = [3, 4];
let product = cartesianProduct(firstSet, secondSet);

console.log(product);