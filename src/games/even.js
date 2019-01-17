import gameFlow from '..';
import generateNum from '../utils';
import cons from 'hexlet-pairs';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no"';
const evenGame = () => {
  const question = generateNum(1, 1000);
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};
export default () => gameFlow(description, evenGame);
