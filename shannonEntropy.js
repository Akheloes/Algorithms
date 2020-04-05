/**
 * Shannon entropy for a string.
 * The algorithm:
 * - Calculate the frequency of each character in the string;
 * - Apply the formula -1 * Sum(frequency * Ln(frequency))
 */
function shannonEntropy(string) {
    // Calculating the frequencies of the characters
    let occurances = new Map();
    for(index in string) {
        if(!occurances.has(string[index])) {
            occurances.set(string[index], 1);
        } else {
            occurances.set(string[index], occurances.get(string[index]) + 1);
        }
    }
    // Applying the entropy formula
    let entropy = 0;
    for (const occurance of occurances.values()) {
        let frequency = occurance / string.length;
        entropy -= frequency * (Math.log(frequency)/Math.log(2));
    }
    return entropy;
}

// let string = "Hello, World!";
// let entropy = shannonEntropy(string);
// console.log(entropy);
