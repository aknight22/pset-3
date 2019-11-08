const readlineSync = require("readline-sync");

const gradeLetter = Number(readlineSync.question("\nEnter a grade: "));

const lowA = 90;
const highA = 100;
const lowB = 80;
const highB = 89;
const lowC = 70;
const highC = 79
const lowD = 60;
const highD = 69;
const lowF = 0;
const highF = 59;

if (gradeLetter > 100 || gradeLetter < 0) {
      console.log("\nInvalid\n")

} else if (gradeLetter >= lowA && gradeLetter <= highA) {
      console.log("\nYou received an A.\n")

} else if (gradeLetter >= lowB && gradeLetter < lowA) {
      console.log("\nYou received a B.\n")

} else if (gradeLetter >= lowC && gradeLetter < lowB) {
      console.log("\nYou received a C.\n")

} else if (gradeLetter >= lowD && gradeLetter < lowC) {
      console.log("\nYou received a D.\n")

} else if (gradeLetter >= lowF && gradeLetter < lowD) {
      console.log("\nYou received an F.\n")

} else {
      console.log("\nInvalid.\n")
}
