const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const amount = Number(readlineSync.question("\nEnter an integer: "));

if (Number.isInteger(amount)) {
  if (amount % 2 == 0) {
  console.log("\nEven.");
  }

  if (amount % 2 == +-1){
  console.log("\nOdd.");
  }

} else {
  console.log("\nInvalid.")
}
