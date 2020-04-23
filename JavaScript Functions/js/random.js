/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

const getRandomNumber = (lower, upper) => {
    if (isNaN(lower) || isNaN(upper)) {
        throw Error('Both arguments must be numbers')
    }
    number = Math.floor(Math.random() * (upper - lower + 1)) + lower;
    return number;
}

// Call the function and pass it different values
console.log(getRandomNumber(1, 6));
console.log(`${getRandomNumber(10)} is a random number between 10 and 100`);
console.log(getRandomNumber(200, 'three hundred'));