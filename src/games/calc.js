import gameFlow from '..';
import cons from 'hexlet-pairs';
import generateNum from '../utils';

const description = 'What is the result of the expression?';

const calcGame = () => {
  const operand1 = generateNum(1, 100);
  const operand2 = generateNum(1, 100);
  const randomOperator = generateNum(1, 2);
  let question;
  let answer;
  switch (randomOperator) {
    case 0:
      question = `${operand1} - ${operand2}`;
      answer = operand1 - operand2;
      break;
    case 1:
      question = `${operand1} * ${operand2}`;
      answer = operand1 * operand2;
      break;
    default:
      question = `${operand1} + ${operand2}`;
      answer = operand1 + operand2;
  }
  return cons(question, String(answer));
};
export default () => gameFlow(description, calcGame);
