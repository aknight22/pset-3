const readlineSync = require("readline-sync");

const MIN = 0.01;
const MAX = 0.99;

const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;

const amount = Number(readlineSync.question("\nEnter a dollar amount: "));

if (Number.isNaN(amount)) {
  console.log("Invalid.");

} else if (amount < MIN || amount > MAX) {
  console.log("Invalid.");

} else {
  let pennies = Math.round(amount * 100);

  let quarters = Math.floor(pennies / QUARTER);
  pennies = (pennies % QUARTER);

  let dimes = Math.floor(pennies / DIME);
  pennies = (pennies % DIME);

  let nickels = Math.floor(pennies / NICKEL);
  pennies = (pennies % NICKEL);

    console.log(""+ quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies + " pennies.")
}
