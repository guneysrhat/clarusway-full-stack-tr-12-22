//! 1. Bölüm Loops

//! Q-1
//? Ask the user to input a number. Check the input of the user, if it is not a valid number
//? then keep getting input from the user until provides a valid number.

const validNumber = () => {
  //   let num = prompt("Enter a valid number");

  if (Number(num)) {
    return "is is a valid number";
  } else {
    return validNumber();
  }
};

// console.log(validNumber());

//! Q-2
//? Write a JavaScript program to compute the greatest common divisor (GCD) (OBEB) of two positive integers.

const findGcd = (number1, number2) => {
  let gcd;

  if (number1 === 0 || number2 === 0) {
    return "Please enter a valid number";
  }
  for (let i = 1; i <= number1 && 1 <= number2; i++) {}
  return gcd;
};

console.log(findGcd(45, 33));
