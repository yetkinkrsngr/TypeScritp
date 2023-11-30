var age = 25;
age = "25";
var coordinates = {
    x: 10,
    y: 20,
};
coordinates = {
    lat: 10,
    lng: 20,
};
function calculateTax(amount, tax) {
    if (typeof amount === "number") {
        return amount * tax;
    }
    if (typeof amount === "string") {
        amount = amount.replace("$", "");
        return parseFloat(amount) * tax;
    }
}
