/**
 * This function takes two arrays and returns the union array (without duplicates). Also, sorts the resulting array.
 */
function js_style_union(firstArray, secondArray) {
    let union_ = firstArray.concat(secondArray);
    return union_.filter((item, pos) => {
        return union_.indexOf(item) == pos;
    }).sort();
}

// let f = [3, 3, 1];
// let s = [3, 4, 5, 3];
// let result = union(f, s);

// console.log(result);