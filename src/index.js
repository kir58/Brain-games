import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};
export const getQuestionAndAnswer = (question, answer) => cons(question, answer);
const getQuestion = pair => car(pair);
const getAnswer = pair => cdr(pair);

export const gameFlow = (description, getPairQuestionAndAnswer) => {
  const steps = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let step = 1; step <= steps; step += 1) {
    const questionAndAnswer = getPairQuestionAndAnswer();
    const question = getQuestion(questionAndAnswer);
    console.log(`Question:  ${question}`);
    const answer = getAnswer(questionAndAnswer);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}`);
};
