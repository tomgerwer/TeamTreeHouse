// Collect input from a URLSearchParams
const inputLow = prompt('Please provide your lowest number')
const inputHigh = prompt("Please provide your highest number.");

// Convert the input to a Number
const lowNumber = parseInt(inputLow);
const highNumber = parseInt(inputHigh);

if (lowNumber && highNumber) {
    // Use Math.random() and the user's number to generate a random number
const randomNumber = Math.floor(Math.random() * (highNumber - lowNumber + 1)) + lowNumber;

// Create a message displaying the random number
console.log(`${randomNumber} is a random number between ${lowNumber} and ${highNumber}.`)
} else {
    console.log('You need to provide two number. Try again');
}