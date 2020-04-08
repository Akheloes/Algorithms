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

console.log(pascalTriangle(100, 17));