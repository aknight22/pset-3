const readlineSync = require("readline-sync");

const number1 = Number(readlineSync.question("\nEnter three numbers.\n\n"));
const number2 = Number(readlineSync.question(""));
const number3 = Number(readlineSync.question(""))

if (number1, number2, number3 < (Number.MIN_SAFE_INTEGER) || number1, number2, number3 > Number.MAX_SAFE_INTEGER) {
   console.log("\nInvalid.\n")

} else if (number1 == number2 & number2 == number3) {
      console.log("\nEqual.\n")

} else if (number1 > number2 && number2 > number3) {
      console.log("\nStrictly decreasing.\n")

} else if (number1 < number2 && number2 < number3) {
      console.log("\nStrictly increasing.\n")

} else if (number1 >= number2 && number2 >= number3) {
      console.log("\nDecreasing.\n")

} else if (number1 <= number2 && number2 <= number3) {
      console.log("\nIncreasing.\n")

} else if ((number1 >= number2 && number2 <= number3) || (number1 <= number2 && number2 >= number3)) {
      console.log("\nUnordered.\n")

} else {
      console.log("\nInvalid.\n")
}
