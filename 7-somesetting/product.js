"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let product = {
    name: "Samsung S6",
    price: 3000,
    quantity: 5,
};
const printProduct = (product) => {
    console.log(product.name);
    console.log(product.price);
    console.log(product.quantity);
};
printProduct(product);
