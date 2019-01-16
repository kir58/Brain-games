import { gameFlow, getQuestionAndAnswer } from '..';

const description = 'What is the result of the expression?';


const calcGame = () => {
  const operand1 = Math.floor(Math.random() * 1000);
  const operand2 = Math.floor(Math.random() * 1000);
  const randomOperator = Math.floor(Math.random() * 3);
  let question;
  let answer;
  if (randomOperator === 0) {
    question = `${operand1} - ${operand2}`;
    answer = operand1 - operand2;
  } else if (randomOperator === 1) {
    question = `${operand1} * ${operand2}`;
    answer = operand1 * operand2;
  } else if (randomOperator === 2) {
    question = `${operand1} + ${operand2}`;
    answer = operand1 + operand2;
  }
  return getQuestionAndAnswer(question, String(answer));
};
const loadCalcGame = () => gameFlow(description, calcGame);
export default loadCalcGame;
