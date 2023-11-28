function printName(person: {
  firstName: string;
  lastName: string;
  age: number;
}): void {
  console.log(`hello ${person.firstName} ${person.lastName} ${person.age}`);
}
printName({ firstName: "john", lastName: "Doe", age: 30 });
// interface
interface MyCat {
  name: string;
  kind: string;
  age: number;
}

function ownCat(cat: MyCat): void {
  console.log(
    `This is my cat. Her name is ${cat.name}, she is a ${cat.kind}, and she is ${cat.age} years old.`
  );
}

// Example usage:
ownCat({ name: "Kedo", kind: "British Long Hair", age: 1 });

// alias
type Person = {
  name: string;
  age: number;
};

let welcoming = (person: Person) => {
  return `Welcome dear ${person.name} and age of ${person.age}`;
};

console.log(welcoming({ name: "yetkin", age: 20 }));

// nested obeject object içineki obje

const describePerson = (person: {
  named: string;
  age: number;
  parentNames: {
    mom: string;
    dad: string;
  };
}) => {
  return `Person: ${person.named},
    Age: ${person.age},
    Parents: ${person.parentNames.mom}, ${person.parentNames.dad}`;
};

const personDescription = describePerson({
  named: "yetkin",
  age: 31,
  parentNames: { mom: "cemile", dad: "şeref" },
});

console.log(personDescription);
