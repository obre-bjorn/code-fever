// #1 Generate a random race number.
let raceNumber = Math.floor(Math.random() * 1000);

// #2 Create variables for registration and age.
const registeredEarly = false; // Change to true if the runner registered early.
const runnerAge = 18; // Change to test different ages.

// #3 Check if the runner is an adult and registered early.
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

// #4 Determine race time.
if (runnerAge > 18 && registeredEarly) {
  console.log(`Runner ${raceNumber}, you will race at 9:30 am.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Runner ${raceNumber}, you will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Runner ${raceNumber}, you will race at 12:30 pm.`);
} else {
  console.log(`Runner ${raceNumber}, please see the registration desk.`);
}
