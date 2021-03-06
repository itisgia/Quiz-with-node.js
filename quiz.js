process.stdout.write('\n\nWelcome\n\n');
var questions = [
    "What is capital of Korea",
    "What is 10 x 5",
    "What school do I go to in Wellington"
];
var answers = [
    "Seoul",
    "50",
    "Yoobee"
];

var usersAnswers = [];

function askQuestions(i) {
    process.stdout.write(`\n\n ${questions[i]} \n\n`)
};

process.stdin.on('data', function (answer) {
    // process.stdout.write(`${answer}`);
    // process.exit();
    
    var questionNumber = usersAnswers.length;
    var inputAnswer = answer.toString().trim();
    if (inputAnswer == answers[questionNumber]) {
        process.stdout.write('correct');
        usersAnswers.push(inputAnswer);
        if (usersAnswers.length < answers.length) {
            askQuestions(usersAnswers.length);
        } else {
            process.exit();
        }
    } else {
        process.stdout.write(`\n\nWrong\n\n`);
        // process.exit();
    }
    checkAnswer();

});

askQuestions(0);

process.on('exit', function () {
    process.stdout.write(`\n\n Congrats, you have completed the quiz\n\n`)
})
