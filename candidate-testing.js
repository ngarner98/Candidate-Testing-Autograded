const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ',
 "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
// candidateAnswer = input.question(question + "\n")

for (i = 0; i < questions.length; i++) {
  let answer = input.question(`${i + 1}) ${questions[i]}`);
  candidateAnswers.push(answer);
} 
console.log('\n');
// this.candidateAnswers = candidateAnswers;
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
// if (candidateAnswer.toLowerCase === correctAnswer.toLowerCase) {
//   console.log("Your answer is correct!");
// } else {
//   console.log("Your answer is incorrect...");
// }
console.log(`Candidate Name: ${candidateName}`)

for (i = 0; i < correctAnswers.length; i++) {
console.log(`For question ${[i+1]} you said ${candidateAnswers[i]} and the correct answer is ${correctAnswers[i]}.`)
}
 
//TODO 3.2 use this variable to calculate the candidates score.

  let grade = 0;
  let correctResponse = 0

for (i = 0; i < questions.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    grade++;
  }
} grade = (grade / correctAnswers.length)*100;
console.log(`\nOverall grade is ${grade}% (You answered ${(grade/100)*correctAnswers.length} out of ${correctAnswers.length} correctly.)\n`);
if(grade >= 80) {
  console.log(`Status: PASSED`);
}  else {
  console.log(`Status: FAILED`);
}
return grade;
  
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Hello " + candidateName + " welcome to the quiz.\n");
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};