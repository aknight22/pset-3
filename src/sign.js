const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const amount = Number(readlineSync.question("\nEnter a number: "));

if (Number.isNaN(amount)) {
  console.log("\nInvalid.");
}

if (amount > 0) {
  console.log("\nPositive.")
}

if (amount < 0) {
  console.log("\nNegative.")
}

if (amount == 0) {
  console.log("\nZero.")
}
