// eslint-disable-next-line import/named
import { gameFlow, getQuestionAndAnswer } from '..';

const isEven = num => num % 2 === 0;

const description = 'Answer "yes" if number even otherwise answer "no"';
const evenGame = () => {
  const question = Math.floor(Math.random() * 1000);
  const answer = isEven(question) ? 'yes' : 'no';
  return getQuestionAndAnswer(question, answer);
};
const loadEvenGame = () => gameFlow(description, evenGame);
export default loadEvenGame;
