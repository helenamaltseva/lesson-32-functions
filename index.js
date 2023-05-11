Варіанти створення функцій
- Function Declaration;
- Function Expression;
- Arrow Function.



// function countArguments() {
//   console.log(arguments.length);
// }

// countArguments('one', 2, { name: 'Olena'}); 
// countArguments(0, 'Hello', [1, 2, 3], { name: 'World' }); 



// function compareNumbers(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(compareNumbers(1, 2));
// console.log(compareNumbers(2, 1)); 
// console.log(compareNumbers(1, 1)); 



// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// console.log(factorial(3)); 



// function combineDigits(a, b, c) {
//   const combinedNumber = Number(`${a}${b}${c}`);
//   return combinedNumber;
// }

// console.log(combineDigits(1, 4, 9)); 



// function calculateArea(length, width) {
//   if (width === undefined) {
//     return length * length;
//   } else {
//     return length * width;
//   }
// }

// console.log(calculateArea(5, 10));
// console.log(calculateArea(5)); 
