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
    const randomNum = Math.floor(Math.random() * 1000);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = answer === 'yes' ? 'no' : 'yes';
    const check = isEven(randomNum) ? 'yes' : 'no';
    if (answer === check) {
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
