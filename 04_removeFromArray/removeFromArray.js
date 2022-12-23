const removeFromArray = function(array, ...args) {
    let result = array.filter(elt => !args.includes(elt));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
