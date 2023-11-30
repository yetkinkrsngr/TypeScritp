var firstDog = {
    name: "Tommy",
    age: 2,
    breed: "Golden",
    bark: function () {
        return true;
    },
    eatMeat: function () {
        return true;
    },
    sleep: function () {
        console.log("Uyudu");
    },
};
var dogBarkCheck = function () {
    if (firstDog.bark()) {
        return "Havladı";
    }
    else {
        return "Havlamadı";
    }
};
console.log("".concat(firstDog.name, " ").concat(dogBarkCheck()));
