"use strict";
// function fruitProcessor(apples, oranges) {
//   const juice = `I love juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(5, 6));

// function calcAge1(birthYear) {
//   return 2020 - birthYear;
// }
// console.log(calcAge1(1978));

// const calcAge2 = function (birthYear) {
//   return 2020 - birthYear;
// };

// console.log(calcAge2(1988));

// const calcAge3 = (birthYear) => 2020 - birthYear;

// console.log(calcAge3(2000));

// const calcAvg = (val1, val2, val3) => (val1 + val2 + val3) / 3;

// function checkWiner(avgTeam1, avgTeam2) {
//   if (avgTeam1 > avgTeam2) {
//     console.log(`Koalas win (${avgTeam1} vs ${avgTeam2})`);
//   } else {
//     console.log(`Dolphins win (${avgTeam2} vs ${avgTeam1})`);
//   }
// }
// checkWiner(calcAvg(85, 54, 41), calcAvg(23, 34, 27));
// const arr = [`claudio`, `jimenez`, 42];
// console.log(arr);
// arr.push("t");
// arr.unshift(`como estas`);
// console.log(arr);
// arr.shift();
// console.log(arr);

// const cj = {
//   firstName: "Claudio",
//   lastName: `Jimenez`,
// };

// cj.location = "Denver";
// cj["city"] = `chicago`;

// console.log(cj);

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, 
let's use objects to implement the calculations! 
Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, 
mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI 
(the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full 
name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   bmi: function () {
//     this.bmi = calcBMI(this.mass, this.height);
//     return this.bmi;
//   },
// };

// console.log(mark.bmi());

// const john = {
//   fullName: "John Smith",
//   mass: 922,
//   height: 1.95,
//   bmi: function () {
//     this.bmi = calcBMI(this.mass, this.height);
//     return this.bmi;
//   },
// };

// function calcBMI(mass, height) {
//   return mass / height ** 2;
// }
// console.log(john.bmi());

// const result = function (object1, object2) {
//   higherBmi = "";
//   lowerBmi = "";
//   bmi1 = object1.bmi;
//   bmi2 = object2.bmi;
//   if (bmi1 > bmi2) {
//     higherBmi = object1.fullName;
//     lowerBmi = object2.fullName;
//     bmi1 = object1.bmi;
//     bmi2 = object2.bmi;
//   } else {
//     higherBmi = object2.fullName;
//     lowerBmi = object1.fullName;
//     bmi1 = object2.bmi;
//     bmi2 = object1.bmi;
//   }
//   return `${higherBmi + `'s`} BMI (${bmi1}) is higher than ${
//     lowerBmi + `'s`
//   } (${bmi2}))`;
// };

// console.log(result(mark, john));

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to 
calculate tips and total values (bill + tip) for every bill value in 
the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. 
This function calculates the average of all numbers in the given array. 
This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, 
  start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. 
  In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, 
  you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the 
  length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [],
  totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  let total = bills[i] + tip;
  tips.push(tip);
  totals.push(total);
}
console.log(bills, tips, totals);

function calcAverage(arr) {
  let runSum = 0;
  const divisor = arr.length;
  for (let i = 0; i < divisor; i++) {
    runSum += arr[i];
  }
  console.log(runSum, divisor);
  return runSum / divisor;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals), calcAverage(tips));
