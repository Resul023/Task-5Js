// Task 1
// const a = +prompt("Enter number A");
// const b = +prompt("Enter number B");
// if (!isNaN(a) && !isNaN(b)) {
//   console.log(`Result of divide: ${Math.floor(a / b)}`);
//   console.log(`Result of remainder of the division: ${Math.floor(a % b)}`);
// } else {
//   alert("You have to enter only number");
// }

// Task 2
// let a = prompt("Write value's A...");
// let b = prompt("Write value's B...");
// let helper;
// helper = a;
// a = b;
// b = helper;

// console.log(`Value of A-${a}`);
// console.log(`Value of B-${b}`);

// Task 3
// A*X+B=C
// const a = +prompt("Enter number A");
// const b = +prompt("Enter number B");
// const c = +prompt("Enter number C");
// if (!isNaN(a) && !isNaN(b) && a != 0 && b != 0 && c != 0) {
//   console.log(`X=${(c - b) / a}`);
// } else {
//   alert("You have to enter only number");
// }

// Task 4
// const a = +prompt("Enter number A");
// const b = +prompt("Enter number B");
// if (!isNaN(a) && !isNaN(b)) {
//   if (a > b) {
//     console.log(`Result:${a + b}`);
//   } else if (a === b) {
//     console.log(`Result:${a * b}`);
//   } else {
//     console.log(`Result:${a - b}`);
//   }
// } else {
//   alert("You have to enter only number");
// }

// Task 5
// const a = +prompt(`AX^2 + BX + C = 0 ; Enter number A`);
// const b = +prompt(`${a}X^2 + BX + C = 0 ; Enter number B`);
// const c = +prompt(`${a}X^2 + ${b}X + C = 0 ; Enter number C`);
// if (!isNaN(a) && !isNaN(b) && !isNaN(b)) {
//   const d = b * b - 4 * a * c;

//   console.log(d);

//   if (d > 0) {
//     const X1 = (-b + Math.sqrt(d)) / (2 * a);
//     const X2 = (-b - Math.sqrt(d)) / (2 * a);

//     console.log(`X1 = ${X1} ; X2 = ${X2}`);
//   } else if (d === 0) {
//     const X = -b / (2 * a);

//     console.log(`X = ${X}`);
//   } else {
//     console.log(`There is no solution with real numbers`);
//   }
// }

// Task 6
// const a = +prompt("Enter number A");
// function determineSecondDigit(number) {
//   let result;
//   if (number === 1) {
//     result = "one";
//   } else if (number === 2) {
//     result = "two";
//   } else if (number === 3) {
//     result = "three";
//   } else if (number === 4) {
//     result = "four";
//   } else if (number === 5) {
//     result = "five";
//   } else if (number === 6) {
//     result = "six";
//   } else if (number === 7) {
//     result = "seven";
//   } else if (number === 8) {
//     result = "eight";
//   } else if (number === 9) {
//     result = "nine";
//   }
//   return result;
// }
// if (!isNaN(a) && a > 9 && a < 100) {
//   if (Math.floor(a / 10) === 1) {
//     if (Math.floor(a % 10) === 0) {
//       console.log("ten");
//     } else if (Math.floor(a % 10) === 1) {
//       console.log("elevan");
//     } else if (Math.floor(a % 10) === 2) {
//       console.log("twelve");
//     } else if (Math.floor(a % 10) === 3) {
//       console.log("thirteen");
//     } else if (Math.floor(a % 10) === 4) {
//       console.log("fourteen");
//     } else if (Math.floor(a % 10) === 5) {
//       console.log("fifteen");
//     } else if (Math.floor(a % 10) === 6) {
//       console.log("sixteen");
//     } else if (Math.floor(a % 10) === 7) {
//       console.log("seventeen");
//     } else if (Math.floor(a % 10) === 8) {
//       console.log("eighteen");
//     } else {
//       console.log("nineteen");
//     }
//   } else if (Math.floor(a / 10) === 2) {
//     console.log(`Twenty ${determineSecondDigit(Math.floor(a % 10))} `);
//   } else if (Math.floor(a / 10) === 3) {
//     console.log(`Thirty ${determineSecondDigit(Math.floor(a % 10))} `);
//   } else if (Math.floor(a / 10) === 4) {
//     console.log(`Forty ${determineSecondDigit(Math.floor(a % 10))} `);
//   } else if (Math.floor(a / 10) === 5) {
//     console.log(`Fifty ${determineSecondDigit(Math.floor(a % 10))} `);
//   } else if (Math.floor(a / 10) === 6) {
//     console.log(`Sixty ${determineSecondDigit(Math.floor(a % 10))} `);
//   } else if (Math.floor(a / 10) === 7) {
//     console.log(`Seventy ${determineSecondDigit(Math.floor(a % 10))} `);
//   } else if (Math.floor(a / 10) === 8) {
//     console.log(`Eighty ${determineSecondDigit(Math.floor(a % 10))} `);
//   } else if (Math.floor(a / 10) === 9) {
//     console.log(`Ninety ${determineSecondDigit(Math.floor(a % 10))} `);
//   }
// } else {
//   alert("You have to enter two-digit  number");
// }

// Task 7
// const x = +prompt("Enter number X");
// const y = +prompt("Enter number Y");
// const r = +prompt("Enter number R");
// if (!isNaN(x) && !isNaN(y) && !isNaN(r)) {
//   if (Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(r, 2)) {
//     console.log(`(${x}:${y}) this point is inside the circle`);
//   } else {
//     console.log(`(${x}:${y}) this point isn't inside the circle`);
//   }
// } else {
//   alert("You have to enter only number");
// }
