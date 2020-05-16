let questions = [
    ['How many states are in the United States?', 50],
    ['How many branches of government are there in the US?', 3],
    ['How many presidents have there been currently (2020)?', 45]
]

let correctAnswers = 0;
let question;
let answer;
let response;
let correct = [];
let wrong = [];

function print(message) {
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList(arr) {
    let listHTML = '<ol>';
    for (let i = 0; i < arr.length; i += 1) {
        listHTML += '<li>' +arr[i] + '</li>';
    }
    listHTML += '</ol>'
    return listHTML;
}

for (let i = 0; i < questions.length; i += 1) {
    question = questions[i][0];
    answer = questions[i][1];
    response = prompt(question);
    response = parseInt(response);
    if (response === answer) {
        correctAnswers += 1;
        correct.push(question);
    } else {
        wrong.push(question);
    }
}

html = "You go " + correctAnswers + " question(s) right.";
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);