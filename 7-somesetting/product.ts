import Product from ".";

let product: Product = {
  name: "Samsung S6",
  price: 3000,
  quantity: 5,
};
const printProduct = (product: Product): void => {
  console.log(product.name);
  console.log(product.price);
  console.log(product.quantity);
};

printProduct(product);
