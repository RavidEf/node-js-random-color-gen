import chalk from 'chalk';
import uniqolor from 'uniqolor';

const genRandomColor = uniqolor.random();
const randomColor = genRandomColor.color;

// create grid variables
/*const gridSize = 31;
const gridHash = '#';
const gridStart = '';
const gridMiddle = '';
const gridEnd = '';

// create the grid for loop

for (let row = 1; row <= gridSize; row++) {
  console.log(gridHash + gridStart);
}*/

//manually print the hash string + put the random color heu in the middle of it

const printHash = `###############################
###############################
###############################
#####                     #####
#####       ${randomColor}       #####
#####                     #####
###############################
###############################
###############################`;

//print the long string inside the method that colors the terminal

const genRandomColorChalk = chalk.blue(`${printHash}`);
console.log(genRandomColorChalk);

//console.log(genRandomColor);
//console.log(genRandomColorChalk);
