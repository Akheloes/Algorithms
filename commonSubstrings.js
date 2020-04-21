/**
 * Returns the array of commun substrings of two strings
 */
// @TODO: eliminate revisiting the substrings of a substring
function commonSubstrings(firstString, secondString) {
    let substringsArray = [];
    for(let i=0; i<firstString.length; i++) {
        for(let k=0; k<secondString.length; k++) {
            if (firstString[i] === secondString[k]) {
                let unbroken = true;
                let substring = '';
                let ii = i;
                let kk = k;
                while(unbroken && ii < firstString.length && kk < secondString.length) {
                    if(firstString[ii] === secondString[kk]) {
                        substring += firstString[ii];
                        ii++;
                        kk++;
                    } else {
                        unbroken = false;
                    }
                }
                if(substring.length > 1) {
                    substringsArray.push(substring);
                }
            }
        }
    }
    return substringsArray;
}



/**
 * Example of use
 */
let firstString = 'ABABC---'; 
let secondString = 'BABCA---';
let result = commonSubstrings(firstString, secondString);
console.log(result);