function greaating(name: string) {
  return `hello ${name}`;
}
console.log(greaating("yetkin"));
let amount = function (price: number, tax: number, tips: number) {
  let total: number;
  return (total = price * tax + price + tips);
};
console.log(amount(100, 0.4, 20));

const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let emailCheck = (email: string): string => {
  return emailRegex.test(email)
    ? "Valid email address"
    : "Invalid email address";
};
let result = emailCheck("abc@gmail.com");
console.log(result);

let defaultValue = (defaultString: string = "default") => {
  return defaultString;
};

let colors = ["red", "blue", "yellow"];
let bigColorss = new Array();
let bigColors = colors.map((color) => {
  bigColorss.push(color.toUpperCase());
});
console.log(bigColorss);

function aa() {
  return 20 * 10;
}
