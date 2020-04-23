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
                let _i_ = i;
                let _k_ = k;
                while(unbroken && _i_ < firstString.length && _k_ < secondString.length) {
                    if(firstString[_i_] === secondString[_k_]) {
                        substring += firstString[_i_];
                        _i_++;
                        _k_++;
                    } else {
                        unbroken = false;
                    }
                }
                if(substring.length > 1) {
                    substringsArray.push(substring);
                }
                // i = _i_;
                // k = _k_;
            }
        }
    }
    return substringsArray
    .filter((item, index, array) => {return array.indexOf(item) === index})
}



/**
 * Example of use
 */
let firstString = 'aababbcccb'; 
let secondString = 'ababbcb';
let result = commonSubstrings(firstString, secondString);
console.log(result);