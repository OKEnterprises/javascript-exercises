const repeatString = function(string, numTimes) {
    if (numTimes < 0) return "ERROR";
    let out = "";
    for (let i = 0; i < numTimes; i++) {
        out += string;
    }
    return out;
};

// Do not edit below this line
module.exports = repeatString;
