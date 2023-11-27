const movies = ["Arrival", "The Thing", "Alliens"];

let foundMovie = "The Thing";
for (let movie of movies) {
  if ((movie = foundMovie)) {
    console.log(`yes in data we have this film ${movie}`);
  } else {
    console.log("not Found 404");
  }
}

let pickle;
