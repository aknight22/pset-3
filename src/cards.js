const readlineSync = require("readline-sync");

const card = readlineSync.question("\nEnter a playing card: ").toLowerCase();

let rank1 = card.charAt(0);
let suit1 = card.charAt(1);
let rank2 = 0;

if (rank1 <=2 || rank1 >= 9) {
  console.log("\nInvalid.")
} else if (rank1 ==! "t" && rank1 ==! "j" && rank1 ==! "q" && rank1 ==! "k" && rank1 ==! "a") {
  console.log("\nInvalid.")
}else if (suit1 ==! "s" && suit1 ==! "c" && suit1 ==! "d" && suit1 ==! "h") {
  console.log("\nInvalid.")
}

else{
  switch (rank1) {
  case "2":
        rank2 = 2;
        break;
  case "3":
        rank2 = 3;
        break;
  case "4":
        rank2 = 4;
        break;
  case "5":
        rank2 = 5;
        break;
  case "6":
        rank2 = 6;
        break;
  case "7":
        rank2 = 7;
        break;
  case "8":
        rank2 = 8;
        break;
  case "9":
        rank2 = 9;
        break;
  case "t":
       rank2 = "Ten";
        break;
  case "j":
       rank2 = "Jack";
       break;
  case "q":
       rank2 = "Queen";
       break;
  case "k":
       rank2 = "King";
       break;
  case "a":
       rank2 = "Ace";
       break;
}

switch (suit1) {
  case "h":
        suit2 = "Hearts.";
        break;
  case "d":
        suit2 = "Diamonds.";
        break;
  case "c":
        suit2 = "Clubs.";
        break;
  case "s":
        suit2 = "Spades.";
        break;
}

console.log("\n" + rank2 + " of " + suit2)
}
