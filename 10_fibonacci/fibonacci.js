const fibonacci = function(index) {
    if (index < 0) return 'OOPS';
    let counter = 1;
    let prevNum = 0;
    let currNum = 1;
    while (counter < index) {
        let temp = currNum;
        currNum = currNum + prevNum;
        prevNum = temp;
        counter++;
    }
    return currNum;
};

// Do not edit below this line
module.exports = fibonacci;
