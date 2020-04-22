/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct = 0;

// 2. Store the rank of a player
let rank;

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
const question1 = prompt("Where does Frodo have to go to destroy the ring in Lord of the Rings?")
if (question1.toLowerCase() === "mordor") {
    correct += 1;
}

const question2 = prompt("How many people are in the fellowship?")
if (+question2 === 9) {
    correct += 1;
}

const question3 = prompt("Who is the first person in the followship to die?")
if (question3.toLowerCase() === "gandalf") {
    correct += 1;
}

const question4 = prompt("Name one of the kingdoms of Men.")
if (question4.toLowerCase() === "gondor" || question4.toLowerCase() === "rohan") {
    correct += 1;
}

const question5 = prompt("Who guides Frodo and Sam into Mordor?")
if (question5.toLowerCase() === "gollum" || question5.toLowerCase() === "smeagol") {
    correct += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/

if(correct === 5) {
    rank = "Aragorn";
} else if (correct <= 4 && correct >= 3) {
    rank = "Legolas";
} else if (correct <= 2 && correct >= 1) {
    rank = "Gimli"
} else {
    rank = "Wormtongue";
}

// 6. Output results to the <main> element
main.innerHTML = `
    <h2> You got ${correct} out of 5 questions correct.</h2>
    <p>You are: <strong>${rank}</strong></p>
`;