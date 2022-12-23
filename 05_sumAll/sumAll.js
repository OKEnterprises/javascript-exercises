function smaller(a, b) {
    if (a > b) return b;
    else return a;
}

function larger(a, b) {
    if (a > b) return a;
    else return b;
}

const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) return 'ERROR';
    let sum = 0;
    let start = smaller(a, b);
    let end = larger(a, b);
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
