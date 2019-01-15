#!/usr/bin/env node
import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;
const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no"');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  let count = 0;
  while (count !== 3) {
    const randonNum = Math.floor(Math.random() * (1 + 1000 - 1) + 1);
    console.log(`Question: ${randonNum}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = answer === 'yes' ? 'no' : 'yes';
    const chek = isEven(randonNum) ? 'yes' : 'no';
    if (answer === chek) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
    }
    count += 1;
  }
  console.log(`Congratulations, ${userName}`);
};
evenGame();
