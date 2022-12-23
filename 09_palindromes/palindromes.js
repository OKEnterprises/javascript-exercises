const reverseString = function(string) {
    let charArr = string.split("");
    return charArr.reverse().join("");
};

function stripString(string) {
    let punctuation = ['!', ',', '.', ' '];

    console.log(string.split("").filter(char => !punctuation.includes(char)).join(""));

    return string.split("").filter(char => !punctuation.includes(char)).join("");
}

const palindromes = function (string) {
    let stripped = stripString(string).toLowerCase()
    return reverseString(stripped) === stripped;
};

// Do not edit below this line
module.exports = palindromes;
