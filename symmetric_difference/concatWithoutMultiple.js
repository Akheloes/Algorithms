const concatMultiple = require('./concatMultiple').concatMultiple;
const eliminateDuplicate = require('./eliminateDuplicate').eliminateDuplicate;

/**
 * Takes an array of arrays, makes it into one array and eliminates the duplicates
 * @param {*} arrays 
 */
function concatWithoutMultiple(arrays) {
    return eliminateDuplicate(concatMultiple(arrays));
}

module.exports.concatWithoutMultiple = concatWithoutMultiple;