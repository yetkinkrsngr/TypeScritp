var pt = { x: 1, y: 2 };
console.log(pt);
var person = {
    id: 1,
    fisrtName: "Yetkin",
    lastName: "Celenk",
    nickName: "Yetkin",
};
console.log(person);
var person2 = {
    id: 2,
    fisrtName: "Yetkin",
    lastName: "Celenk",
};
console.log(person2);
var thomas = {
    id: 3,
    fisrtName: "Thomas",
    lastName: "Shelby",
    nickName: "Tommy",
};
console.log(thomas);
var shoes = {
    id: 1,
    name: "Nike Air",
    price: 100,
    applyDiscount: function (discount) {
        return this.price - discount;
    },
};
console.log(shoes.applyDiscount(20));
// Kullanım örneği:
var myObject = {
    id: 1,
    name: "John",
    age: 30, // Artık TypeScript hata vermeyecek.
};
var myDog = {
    name: "Tommy",
    age: 2,
    breed: "Golden",
    color: "Yellow",
    bark: function () {
        return true;
    },
};
var barkCheck;
if (myDog.bark()) {
    barkCheck = "Havladı";
}
else {
    barkCheck = "Havlamadı";
}
console.log("".concat(myDog.name, " ").concat(barkCheck));
