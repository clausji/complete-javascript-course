// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const x = 5;

// const calcAge = birthYear => 2020 - birthYear;

// console.log('hello clau!');

// console.log(calcAge(1983));

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// const calcTempAmp = function (arr) {
//   let max = arr[0];
//   let min = arr[0];
//   for (const i in arr) {
//     let val = arr[i];
//     if (typeof val !== 'number') {
//       continue;
//     } else {
//       if (val > max) {
//         max = val;
//       }
//       if (arr[i] < min) {
//         min = val;
//       }
//     }
//   }
//   console.log(max, min);
//   return max - Math.abs(min);
// };
// const result = calcTempAmp(temperatures);
// console.log(result);

// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const forecast = function (arr) {
  let strTemps = [];
  for (let i = 0; i < arr.length; i++) {
    strTemps.push(`... ${arr[i]}ºC in ${i + 1} days `);
  }
  strTemps.push(` ...`);

  for (let i = 0; i < strTemps.length; i++) {
    console.log(strTemps.join(''));
  }
};

forecast([12, 5, -5, 0, 4]);
