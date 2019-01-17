import gameFlow from '..';
import generateNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  return getGcd(num2, num1 % num2);
};
const gcdGame = () => {
  const operand1 = generateNum(1, 100);
  const operand2 = generateNum(1, 100);
  const question = `${operand1} ${operand2}`;
  const answer = getGcd(operand1, operand2);
  return cons(question, String(answer));
};

export default () => gameFlow(description, gcdGame);
