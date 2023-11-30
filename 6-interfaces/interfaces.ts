interface Point {
  x: number | string;
  y: number;
}

let pt: Point = { x: 1, y: 2 };
console.log(pt);

// interface type farki interface de tanimlanan degiskenlerin degerleri degistirilebilir
// type da degiskenlerin degerleri degistirilemez

interface Person {
  readonly id: number;
  fisrtName: string;
  lastName: string;
  //  nickname string olup olmaycağını belirtmek için ? işareti kullanılırq
  nickName?: string;
}
let person: Person = {
  id: 1,
  fisrtName: "Yetkin",
  lastName: "Celenk",
  nickName: "Yetkin",
};
console.log(person);

let person2: Person = {
  id: 2,
  fisrtName: "Yetkin",
  lastName: "Celenk",
};
console.log(person2);

let thomas: Person = {
  id: 3,
  fisrtName: "Thomas",
  lastName: "Shelby",
  nickName: "Tommy",
};
console.log(thomas);

interface Product {
  id: number;
  name: string;
  price?: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  id: 1,
  name: "Nike Air",
  price: 100,
  applyDiscount(discount: number): number {
    return this.price - discount;
  },
};

console.log(shoes.applyDiscount(20));

interface MyDynamicType {
  id: number;
  name: string;
  surname?: string; // Opsiyonel hale getirildi.
  [key: string]: any; // İndeks imzası, ek özelliklere izin verir.
}

// Kullanım örneği:
const myObject: MyDynamicType = {
  id: 1,
  name: "John",
  age: 30, // Artık TypeScript hata vermeyecek.
};

interface Dog {
  name: string;
  age: number;
  breed: string;
}

interface Dog {
  color: string;
  bark(): boolean;
}

const myDog: Dog = {
  name: "Tommy",
  age: 2,
  breed: "Golden",
  color: "Yellow",
  bark() {
    return true;
  },
};
let barkCheck: string;
if (myDog.bark()) {
  barkCheck = "Havladı";
} else {
  barkCheck = "Havlamadı";
}
console.log(`${myDog.name} ${barkCheck}`);
