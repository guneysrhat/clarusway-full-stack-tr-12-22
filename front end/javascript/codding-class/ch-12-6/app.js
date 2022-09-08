//*******************************QUESTION 1********************************************/

// Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// Example
// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
// Notes
// The input array will always contain only positive numbers, and will never be empty or null.

//*******************************QUESTION 2********************************************/

// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.
// The solution would work like the following:
// getEvenNumbers([2,4,5,6]) // should == [2,4,6]


// console.log(getEvenNumbers([2,3,8,9,4,5,6]));

//*******************************QUESTION 3********************************************/

//Given an array of integers,find the sum of its positive elements
// Example:

// input:[1,3,-5,12,4,-21,3,-2]
// output:23

// input:[-3,-5,1,-87]
// output:1

// *******************************QUESTION 4********************************************/

// Write a function that takes an integer as input, 
// and returns the number of bits that are equal to one in the binary representation of that number.
//  You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case


// *******************************QUESTION 5*******************************************/

// Strong number is the number that the sum of the factorial of its digits is equal to number itself.
// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.
// Task
// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".
// Notes
// Number passed is always Positive.
// Return the result as String
// Input >> Output Examples
// strong_num(1) ==> return "STRONG!!!!"
// Since, the sum of its digits' factorial (1) is equal to number itself, then its a Strong.
// strong_num(123) ==> return "Not Strong !!"
// Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .
// strong_num(2)  ==>  return "STRONG!!!!"
// Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.
// strong_num(150) ==> return "Not Strong !!"
// Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong .


//************************************************************QUESTION 6***************************** */
// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']
//************************************************************QUESTION 7***************************** */
//Write a function to accept two arrays. Does the first array contain all elements represented in the second array?

// const containsAllElements = (firstArray, secondArray) => {
//     // your code
// }

// console.log(containsAllElements(["monday", "tuesday"], ["tuesday"])) // false
// console.log(containsAllElements([1,2,3,4,5,6,78,9,], [1,2,3,5]))  //true

//************************************************************QUESTION 8***************************** */
//Write a function that accepts an array as a parameter and returns the first item that smaller than the average of its elements

// const smallerThanAvg = ([1,2,6]) => {
//     // your code
// }