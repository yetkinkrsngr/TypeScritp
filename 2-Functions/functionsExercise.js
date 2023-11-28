// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"
// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"
var twoFer = function (name) {
    return "one for ".concat(name, ", one for me");
};
console.log(twoFer("Elton"));
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false
// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo
var checkYear;
var leapyear = function (years) {
    if ((years % 4 == 0 && years % 100 !== 0) || years % 400 == 0) {
        return (checkYear = true);
    }
    else {
        return (checkYear = false);
    }
};
console.log(leapyear(2012));
console.log(leapyear(2013));
