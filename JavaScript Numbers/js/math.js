const secsPerMin = 60;
const minsPerHour = 60;
const hoursPerDay = 24;
const dayPerWeek = 7;
const weeksPerYear = 52;

const secondsPerDay = secsPerMin * minsPerHour * hoursPerDay;
console.log(`There are ${secondsPerDay} seconds in a day.`)

const yearsAlive = 30;
const secsPerYearAlive = secsPerMin * minsPerHour * hoursPerDay * yearsAlive;
console.log(`I've been alive fore more than ${secsPerYearAlive} seconds!`)