import gameFlow from '..';
import generateNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const question = generateNum(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => gameFlow(description, primeGame);
