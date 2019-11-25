const readlineSync = require("readline-sync");

console.log();
do {
  input = readlineSync.question("Enter a shape: ");
} while (input !== ("circle" || "rectangle" || "square" || "triangle"));

if (input == "circle") {
  let radius = readlineSync.question("Enter a radius: ");
  area = Math.PI * (radius ** 2);
  area = area.toLocaleString("en");
  console.log("\n" + area + ".");
}
if (input == "rectangle") {
  let length = readlineSync.question("Enter a length: ");
  let width = readlineSync.question("Enter a width: ");
}
if (input == "square") {
  let side = readlineSync.question("Enter a side: ");
}
if (input == "triangle") {
  let base = readlineSync.question("Enter a base: ");
  let height = readlineSync.question("Enter a height: ");
}
