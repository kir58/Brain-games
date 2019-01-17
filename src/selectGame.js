import readlineSync from 'readline-sync';
import calc from './games/calc';
import even from './games/even';
import progression from './games/progression';
import prime from './games/prime';
import gcd from './games/gcd';

const selectGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('1 - brain-calc');
  console.log('2 - brain-even');
  console.log('3 - brain-gcd');
  console.log('4 - brain-prime');
  console.log('5 - brain-progression');
  console.log('0 - exit');
  const select = readlineSync.question('Select the game please! ');
  const numbersofGames = ['0', '1', '2', '3', '4', '5'];
  if (!numbersofGames.includes(select)) {
    console.log('Incorrect input');
    return;
  }
  if (select === '0') {
    console.log('Goodbye!');
    return;
  }
  const games = [calc, even, gcd, prime, progression];
  games[Number(select) - 1]();
  const again = readlineSync.question('Do you want to play again? yes or no ');
  if (again === 'yes') {
    selectGame();
  } else {
    console.log('Goodbye!');
  }
};
export default selectGame;
