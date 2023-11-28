function printName(person) {
    console.log("hello ".concat(person.firstName, " ").concat(person.lastName, " ").concat(person.age));
}
printName({ firstName: "john", lastName: "Doe", age: 30 });
function ownCat(cat) {
    console.log("This is my cat. Her name is ".concat(cat.name, ", she is a ").concat(cat.kind, ", and she is ").concat(cat.age, " years old."));
}
// Example usage:
ownCat({ name: "Kedo", kind: "British Long Hair", age: 1 });
var welcoming = function (person) {
    return "Welcome dear ".concat(person.name, " and age of ").concat(person.age);
};
console.log(welcoming({ name: "yetkin", age: 20 }));
