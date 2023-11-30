let age: number | string = 25;
age = "25";

type point = {
  x: number;
  y: number;
};

type loc = {
  lat: number;
  lng: number;
};

let coordinates: point | loc = {
  x: 10,
  y: 20,
};

coordinates = {
  lat: 10,
  lng: 20,
};

function calculateTax(amount: number | string, tax: number) {
  if (typeof amount === "number") {
    return amount * tax;
  }
  if (typeof amount === "string") {
    amount = amount.replace("$", "");
    return parseFloat(amount) * tax;
  }
}
