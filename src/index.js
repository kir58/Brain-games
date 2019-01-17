import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const getQuestion = pair => car(pair);
const getAnswer = pair => cdr(pair);
const steps = 3;

const gameFlow = (description, getPairQuestionAndAnswer) => {
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
export default gameFlow;
