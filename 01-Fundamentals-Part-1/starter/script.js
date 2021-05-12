// let js = "amazing";
// if (js !== "amazing") alert("js is fun");
// let stringHola = "hola";
// let x, y;
// const fisrtName = "Claudio";
// const lastName = "Jimenez";
// const birthYear = 1978;
// const currentYear = "2020";

// const cj = `I am ${fisrtName}, a ${currentYear - birthYear}
// years old student`;
// console.log(cj);
// const favorite = prompt(`whats your favoratite number`);
// console.log(favorite);
// const hasDriverLicense = true;
// const hasGoodVision = true;
// console.log(hasDriverLicense && hasGoodVision);

"use strict";
const bill = prompt(`Enter your bill amount:`);
const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
const tipToString = `yout bill is ${bill}
you should tip ${tip} for a total of ${Number(bill) + tip}`;
console.log(tipToString);
