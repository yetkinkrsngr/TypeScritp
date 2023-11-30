interface Person {
  name: string;
}
interface Employee {
  readonly id: number;
  department: string;
}

interface Engineer extends Person, Employee {
  level: string;
  language: string[];
}
interface Manager extends Person, Employee {
  numberOfEmployees: number;
  scheduleMeeting: (topic: string) => void;
}

const yetkin: Engineer = {
  name: "Yetkin",
  id: 1,
  department: "IT",
  level: "Senior",
  language: ["English", "Turkish"],
};
const yetkinEntries: [string, any][] = Object.entries(yetkin);
const yetkinKeys: string[] = Object.keys(yetkin);
const yetkinValues: any[] = Object.values(yetkin);
console.log(yetkinKeys);
console.log(yetkinValues);
console.log(yetkinEntries);
