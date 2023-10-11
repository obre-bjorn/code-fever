// #1
const getSleepHours = (day) => {
  // #2
  switch (day.toLowerCase()) {
    case 'monday':
      return 8;
    case 'tuesday':
      return 7;
    case 'wednesday':
      return 6;
    case 'thursday':
      return 8;
    case 'friday':
      return 7;
    case 'saturday':
      return 8;
    case 'sunday':
      return 7;
    default:
      return 0;
  }
};

// #5
const getActualSleepHours = () => {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  let totalSleepHours = 0;
  for (const day of days) {
    totalSleepHours += getSleepHours(day);
  }
  return totalSleepHours;
};

// #6
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

// #8
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  let sleepDebt = 0;

  // #9
  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    sleepDebt = actualSleepHours - idealSleepHours;
    console.log(`You got more sleep than needed by ${sleepDebt} hours.`);
  } else {
    sleepDebt = idealSleepHours - actualSleepHours;
    console.log(`You should get some rest. You are ${sleepDebt} hours under your ideal sleep.`);
  }
};

// #11
calculateSleepDebt();
