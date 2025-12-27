// here we are defining an enum named Gender
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
// using the enum values
console.log("Index of 'Gender.Male': " + Gender.Male); // output: 0
console.log("Index of 'Gender.Female': " + Gender.Female); // output: 1
console.log("Value of Gender[0]: " + Gender[0]); // output: Male
console.log("Value of Gender[1]: " + Gender[1]); // output: Female
// defining an enum with custom numeric values
var Weekends;
(function (Weekends) {
    Weekends[Weekends["Saturday"] = 6] = "Saturday";
    Weekends[Weekends["Sunday"] = 7] = "Sunday";
})(Weekends || (Weekends = {}));
// using the enum values
console.log("Value of 'Weekends.Saturday': " + Weekends.Saturday); // output: 6
console.log("Value of 'Weekends.Sunday': " + Weekends.Sunday); // output: 7
console.log("Key of 'Weekends[6]': " + Weekends[6]); // output: Saturday
console.log("Key of 'Weekends[7]': " + Weekends[7]); // output: Sunday
