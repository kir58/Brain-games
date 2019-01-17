import gameFlow from '..';
import generateNum from '../utils';
import { cons } from 'hexlet-pairs';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const progressionGame = () => {
  const startNum = generateNum(1, 100);
  const step = generateNum(1, 10);
  const secretPlace = generateNum(0, progressionLength - 1);
  let progression = '';
  for (let indexEl = 0; indexEl < progressionLength; indexEl += 1) {
    const progressionEl = startNum + step * indexEl;
    if (indexEl === secretPlace) {
      progression += '.. ';
    } else {
      progression += `${progressionEl} `;
    }
  }
  const question = progression;
  const answer = startNum + secretPlace * step;
  return cons(question, String(answer));
};

export default () => gameFlow(description, progressionGame);
