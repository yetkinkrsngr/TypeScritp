const nums: number[] = [1, 2, 3, 4, 5];
const users: string[] = ["yetkin", "cemile", "şeref"];

// this is regular array

// this is union array
let mixed: (string | number | boolean)[] = [
  "yetkin",
  31,
  true,
  true,
  56,
  "cemile",
  false,
  60,
  "şeref",
];
