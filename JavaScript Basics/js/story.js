// 1. Declare variables and capture input
const adjective = prompt("Please type an adjective.");
console.log(adjective);
const verb = prompt("Please type a verb.");
console.log(verb);
const noun = prompt("Please type a noun.");
console.log(noun);
// 2. Combine the input with other words to create a story.
let message = `<p>There once was a ${adjective} programmer who wanted to use JavaScript to ${verb} the ${noun}.</p>`;
console.log(message);
// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = message;
