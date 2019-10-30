const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const QUARTER = 0.25;
const DIME = 0.10;
const NICKEL = 0.05;
const PENNY = 0.01;

let amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
  console.log("Invalid.");

} else if (amount < MIN || amount > MAX) {
  console.log("Invalid.");

} else {
  let quarters = (amount / QUARTER) - (amount % QUARTER);
  let amountAfterQuarters = amount % QUARTER;
  let dimes = amountAfterQuarters / DIME;
  let amountAfterDimes = amountAfterQuarters % dimes;
  let nickels = amountAfterDimes / NICKEL;
  let amountAfterNickels = amountAfterDimes % nickels;
  let pennies = amountAfterDimes / PENNY;
    // write your code for making change here
    console.log(""+ quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels,and " + pennies + " pennies.")
}
