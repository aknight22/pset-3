const readlineSync = require("readline-sync");

const MIN = Number.MIN_SAFE_INTEGER;
const MAX = Number.MAX_SAFE_INTEGER;

const temperature = Number(readlineSync.question("\nEnter a temperature: "));
let scale = readlineSync.question("Enter a scale: ").toLowerCase();


    if (Number.isNaN(temperature)) {
    console.log("\nInvalid.")
  } else if (temperature > MAX || temperature < MIN) {
    console.log("\nInvalid.")
  } else if (scale !== "f" && scale !== "c" && scale !== "k") {
    console.log("\nInvalid.")
  }


  else {

if (scale === "f") {
      if (temperature >= 212) {
      console.log("\nGas.")
    } else if (temperature > 32 && temperature < 212) {
      console.log("\nLiquid.")
    } else if ( temperature <= 32) {
      console.log("\nSolid.")
    } }

if (scale === "c") {
    if (temperature > 100) {
    console.log("\nGas.")
  } else if (temperature > 0 && temperature <= 100) {
    console.log("\nLiquid.")
  } else if ( temperature <= 0) {
    console.log("\nSolid.")
  } }

if (scale === "k") {
    if (temperature >= 373.15) {
    console.log("\nGas.")
  } else if (temperature > 273.15 && temperature < 373.15) {
    console.log("\nLiquid.")
  } else if ( temperature <= 273.15) {
    console.log("\nSolid.")
  }
}
}
