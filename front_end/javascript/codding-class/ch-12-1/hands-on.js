//! Write a JavaScript code to find the area of a triangle.

//? pseudocode:
//? a, b and c sides of a triangle
//? assume bottom = c
//? semiperimeter = s
//? s = (a + b + c) / 2
//? (s(s-a)(s-b)(s-c))**0.5

const areaOfTriangle = (a, b, c) => {
  let s = (a + b + c) / 2;
  return (s * (s - a) * (s - b) * (s - c)) ** 0.5;
};

console.log(areaOfTriangle(3, 4, 5));

//! Write a JavaScript program to display the difference between a given number and 20, if the number is greater than 20 display double the absolute difference.

//? pseudode:
//? if given number is greater than 20 or not.
//? if false 20 - given number
//? if true abs((20 - given number) * 2) or multiply * (-1)

const absoluteResult = (num) => {
  if (num < 20) {
    return 20 - num;
  } else {
    return Math.abs((20 - num) * 2);
  }
};

console.log(absoluteResult(15));
console.log(absoluteResult(35));

//! Write a JavaScript program that takes two integers from a user and displays the larger.

//? pseudocode:
//? get two numbers
//? compare them with if first greater than second one
//? compare them with else first equals or smaller than second one

// let number1 = prompt("pls enter a number");
// let number2 = prompt("pls enter second number");

const largerNumOfTwo = (number1, number2) => {
  if (number1 > number2) {
    return `${number1} greater than ${number2}`;
  } else if (number1 == number2) {
    return `${number2} equals ${number1}`;
  } else {
    return `${number2} greater than ${number1}`;
  }
};

// console.log(largerNumOfTwo(number1, number2));

//! Write a JavaScript program that takes 3 integers from a user and displays the largest.

// let number3 = prompt("pls enter third number");

const largerNum = (number1, number2, number3) => {
  let big;
  if (number1 > number2 && number1 > number3) {
    big = number1;
  } else if (number2 > number1 && number2 > number3) {
    big = number2;
  } else {
    big = number3;
  }
  return `${big}`;
};
// console.log(largerNum(number1, number2, number3));

//! Write a JavaScript program that takes 3 integers from a user, multiplies all these numbers, and displays the sign of the product.
//? Example1:
//? number1 = 5, number2 = -4, number3 = 2 ⇒ product is -40. Then the sign is “-”
//? Example2:
//? number1 = -5, number2 = -4, number3 = 2 ⇒ product is 40. Then the sign is “+”

//? pseudocode:
//? if product is greater than zero sign is + else -

const multiplyOfThreeNum = (number1, number2, number3) => {
  let product = number1 * number2 * number3;
  return product > 0 ? "the sign is +" : "the sign is -";
};
console.log(multiplyOfThreeNum(4, 0, -2));

//! Write a JavaScript program to check whether a given integer is in the range 50 to 100.

//? pseudocode:
//? if num is greater than 50 && is smaller than 100 => num is in the range 50 to 100;
//? else num is not in the range 50 to 100;

const isInTheRange50To100 = (number) => {
  if (number > 50 && number < 100) {
    return `${number} range 50 to 100 `;
  } else {
    return `${number} range not 50 to 100 `;
  }
};
console.log(isInTheRange50To100(55));
console.log(isInTheRange50To100(45));

//! Write a basic Calculator with JavaScript. Ask the user to enter 2 numbers and an operand (+,-,*,/). Execute the desired operation and display the result.

//? Example:
//? number1 = 5, number2 = 6, operand = * ⇒ result is 5 * 6 = 30
//? pseudocode:
//? parameters a, b, operand
//? switch case

const calc = (a, b, operand) => {
  let result;
  switch (operand) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = a / b;
      break;
    default:
      return "invalid process";
  }
  return result;
};
console.log(calc(45, 77, "+"));
console.log(calc(5, 7, "*"));

//! Write a JavaScript program that asks the user to enter a day, check this day, and display whether a weekday or not.

//? Example1:
//? input = Tuesday ⇒ output: Tuesday is a weekday
//? Example2:
//? input = Saturday⇒ output: Saturday is not a weekday

const checkDay = (day) => {
  let output;
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      output = `${day} is a weekday`;
      break;
    case "Sunday":
    case "Saturday":
      output = `${day} is not a weekday `;
      break;
    default:
      return "invalid process";
  }
  return output;
};

console.log(checkDay("Monday"));
console.log(checkDay("Tuesday"));
console.log(checkDay("Sunday"));

//! Write a JavaScript program that tells the user provided number is odd or even.

//? pseudocode:
//? num % 2

const oddOrEven = (num) => {
  if (num % 2 === 0) {
    return `${num} is even`;
  } else {
    return `${num} is odd`;
  }
};

console.log(oddOrEven(45));
console.log(oddOrEven(44));

//! Write a JavaScript program to find a value that is nearest to 100 from two different given integer values.

//? pseudocode:
//? smaller result difference from 100 is the nearest

const nearestNum = (y, z) => {
  let diffY = Math.abs(100 - y);
  let diffZ = Math.abs(100 - z);

  if (diffY > diffZ) {
    return `${z} is the nearest to 100`;
  } else if (diffY === diffZ) {
    return `they are equally close`;
  } else {
    return `${y} is the nearest to 100`;
  }
};

console.log(nearestNum(25, -96));
console.log(nearestNum(95, 105));
console.log(nearestNum(98, 99));
