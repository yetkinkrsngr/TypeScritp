function greaating(name) {
    return "hello ".concat(name);
}
console.log(greaating("yetkin"));
var amount = function (price, tax, tips) {
    var total;
    return (total = price * tax + price + tips);
};
console.log(amount(100, 0.4, 20));
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var emailCheck = function (email) {
    return emailRegex.test(email)
        ? "Valid email address"
        : "Invalid email address";
};
var result = emailCheck("abc@gmail.com");
console.log(result);
var defaultValue = function (defaultString) {
    if (defaultString === void 0) { defaultString = "default"; }
    return defaultString;
};
var colors = ["red", "blue", "yellow"];
var bigColorss = new Array();
var bigColors = colors.map(function (color) {
    bigColorss.push(color.toUpperCase());
});
console.log(bigColorss);
