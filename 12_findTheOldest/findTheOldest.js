const findTheOldest = function(array) {
    let oldestAge = 0;
    let oldestPerson;
    array.forEach(person => {
        let upperBound = person.yearOfDeath || new Date().getFullYear();
        let age = upperBound - person.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = person;
        }
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
