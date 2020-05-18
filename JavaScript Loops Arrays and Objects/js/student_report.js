let message = ' ';
let student = 0;
let search;

function print(message) {
    let outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function getStudentReport (student) {
    let report = '<h2>Student: ' + student.name + '</h2>';
    report += '<p>Track: ' + student.track + '</p>';
    report += '<p>Achievements: ' + student.achievements + '</p>'
    report += '<p>Points: ' +student.points + '</p>';
    return report;
}

while(true) {
    search = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
    if (search === null || search.toLowerCase() === 'quit') {
        break;
    }
    for (let i = 0; i < students.length; i += 1) {
        student = students[i];
        if (student.name == search) {
            message = getStudentReport(student);
            print(message);
        }
    }
}
