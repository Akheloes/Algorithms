/**
 * Calculate the coefficient in given (n, k) position of Pascal's triangle
 * Not optimized
 */
function pascalTriangle(n, k) {
    return factorial(n) / (factorial(k) * factorial(n-k));
}

function factorial(i) {
    let f = 1;
    for(let k=2; k<i+1; k++) {
        f *= k;
    }
    return f;
}

/**
 * A LUT (look-up table) algorithm is less computation intensive, has much better performance
 */
var binomials = [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1],
    [1,6,15,20,15,6,1],
    [1,7,21,35,35,21,7,1]
]; // max_n = 7
// [1,8,28,56,70,56,28,8,1]


function binomial(n, k) {
    // return binomials[n][k];
    if (n < binomials.length) { return binomials[n][k];}
    if (n >= binomials.length) {
        let size = binomials.length - 1;
        while (size <= n) {
            let array = [1];
            for(let i=1, s = size; i<=s; i++) {
                array[i] = binomials[s][i-1] + (binomials[s][i] == undefined ? 0 : binomials[s][i]);
            }
            array[size + 1] = 1
            binomials.push(array);
            size++;
        }
        return binomials[n][k];
    }
}

// console.log(binomial(9, 1));

// console.log(pascalTriangle(100, 17));