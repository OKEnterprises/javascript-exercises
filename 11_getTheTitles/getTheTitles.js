const getTheTitles = function(arr) {
    let out = [];
    arr.forEach(book => {
        out.push(book.title);
    });
    return out;
};

// Do not edit below this line
module.exports = getTheTitles;
