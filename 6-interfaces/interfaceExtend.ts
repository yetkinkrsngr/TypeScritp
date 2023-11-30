interface Animal {
  name: string;
  age: number;
  eatMeat(): boolean;
  sleep(): void;
}

interface Dog extends Animal {
  breed: string;
  bark(): boolean;
}

const firstDog: Dog = {
  name: "Tommy",
  age: 2,
  breed: "Golden",
  bark() {
    return true;
  },
  eatMeat() {
    return true;
  },
  sleep() {
    console.log("Uyudu");
  },
};

const dogBarkCheck: () => string = () => {
  if (firstDog.bark()) {
    return "Havladı";
  } else {
    return "Havlamadı";
  }
};
console.log(`${firstDog.name} ${dogBarkCheck()}`);
