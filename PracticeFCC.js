//Problem 1: Multiples of 3 and 5

// function multiplesOf3and5(number) {
//   let sum = 0;

//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(multiplesOf3and5(50));

//Problem 2: Even Fibonacci Numbers

function fiboEvenSum(n) {
  let sum = 0;

  let num1 = 1;
  let num2 = 2;

  if (n >= 2) {
    sum = sum + num2;
  }

  let nextNum = 0;
  while (nextNum <= n) {
    nextNum = num1 + num2;
    if (nextNum % 2 === 0) {
      sum = sum + nextNum;
    }
    num1 = num2;
    num2 = nextNum;
  }

  return sum;
}

console.log("Result is: " + fiboEvenSum(1000));
