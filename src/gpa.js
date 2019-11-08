const readlineSync = require("readline-sync");

const gradeLetter = String(readlineSync.question("\nEnter a letter grade: "));

if (gradeLetter == "A+" || gradeLetter == "A" || gradeLetter == "a+" || gradeLetter == "a") {
      console.log("\nYour GPA is 4.00.\n")

} else if  (gradeLetter == "A-" || gradeLetter == "a-") {
      console.log("\nYour GPA is 3.67.\n")

} else if  (gradeLetter == "B+" || gradeLetter == "b+") {
      console.log("\nYour GPA is 3.33.\n")

} else if  (gradeLetter == "B"  || gradeLetter == "b") {
      console.log("\nYour GPA is 3.00.\n")

} else if  (gradeLetter == "B-" || gradeLetter == "b-") {
      console.log("\nYour GPA is 2.67.\n")

} else if  (gradeLetter == "C+" || gradeLetter == "c+") {
      console.log("\nYour GPA is 2.33.\n")

} else if  (gradeLetter == "C"  || gradeLetter == "c") {
      console.log("\nYour GPA is 2.00.\n")

} else if  (gradeLetter == "C-" || gradeLetter == "c-") {
      console.log("\nYour GPA is 1.67.\n")

} else if  (gradeLetter == "D+" || gradeLetter == "d+") {
      console.log("\nYour GPA is 1.33.\n")

} else if  (gradeLetter == "D"  || gradeLetter == "d") {
      console.log("\nYour GPA is 1.00.\n")

} else if  (gradeLetter == "D-" || gradeLetter == "d-") {
      console.log("\nYour GPA is 0.67.\n")

} else if  (gradeLetter == "F"  || gradeLetter == "f") {
      console.log("\nYour GPA is 0.00.\n")

} else {
      console.log("\nInvalid.\n")
}
