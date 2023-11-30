//degismez degerler
let hi: "hi" = "hi";

const giveAnswer = (answer: "yes" | "no") => {
  return `The answer is ${answer}`;
};
giveAnswer("yes");
//degismezin disinda degerler
giveAnswer("no boy");

let mood: "happy" | "sad" = "happy";
mood = "sad";

type Days =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
let today: Days = getDayAsString(new Date().getDay());

function getDayAsString(dayNumber: number): Days {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      throw new Error("Invalid day number");
  }
}
