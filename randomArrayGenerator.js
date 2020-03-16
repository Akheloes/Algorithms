/**
 * This function will randomely generate and array and return it.
 * Only integers will be returned, the size will be caped by an input number 'capSize'
 */
function randomArrayGenerator(capSize) {

    let array = [];

    for(let r=0; r<capSize; r++) {
        let v_power = Math.floor(Math.random()*10);
        let v_base = Math.pow(10, v_power);
        let item = Math.floor(Math.random()*v_base);
        array.push(item);
    }

    return array;
}

// module.exports.randomArrayGenerator = randomArrayGenerator;