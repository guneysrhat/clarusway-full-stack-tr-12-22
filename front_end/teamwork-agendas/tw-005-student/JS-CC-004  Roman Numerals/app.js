//! Purpose of the this coding challenge is to write a code that given numbers convert to Roman Numerals. The Romans wrote numbers using letters - I, V, X, L, C, D, M. (notice these letters have lots of straight lines and are hence easy to hack into stone tablets).

//? Example:
//? 1000=M 900=CM 90=XC
//? 2008 is written as MMVIII:
//? 2000=MM 8=VIII

//******** Solution-1 **************/

// const convertRomanNum = (num) => {
//   const romanNum = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   let letters = [];
//   for (let i of Object.keys(romanNum)) {
//     while (num >= romanNum[i]) {
//       letters.push(i);
//       num -= romanNum[i];
//     }
//   }
//   return letters.join("");
// };
// console.log(convertRomanNum(123));

//******** Solution-2 **************/
// function romanNum(num) {
//   const romanNums = [
//     ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
//     ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
//     ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
//     ["M", "MM", "MMM"],
//   ];

//   const numArr = num
//     .toString()
//     .split("")
//     .map((n) => Number(n));
//   const result = numArr
//     .reverse()
//     .map((n, i) => romanNums[i][n - 1])
//     .reverse()
//     .join("");

//   return result;
// }

// console.log(romanNum(450));

// //******** Solution-3 **************/

// const romanStr = [
//   "M",
//   "CM",
//   "D",
//   "CD",
//   "C",
//   "XC",
//   "L",
//   "XL",
//   "X",
//   "IX",
//   "V",
//   "IV",
//   "I",
// ];

// const romanInt = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

// const intToRoman = (year) => {
//   let result = "";
//   for (let i = 0; i < romanInt.length; i++) {
//     while (year >= romanInt[i]) {
//       year -= romanInt[i];
//       result += romanStr[i];
//     }
//   }
//   return result;
// };

// console.log(intToRoman(430));
// console.log(intToRoman(429));

//******** Solution-4 **************/

// const roman = (number) => {
//   const romanNum = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };

//   let str = "";
//   let count;

//   for (i in romanNum) {
//     count = Math.floor(number / romanNum[i]);
//     number %= romanNum[i];
//     str += i.repeat(count);
//   }
//   return str;
// };
// console.log(roman(2022));

//! Girilen kelimenin ortasindaki harfi bulan bir fonksiyon yazin.Ama kelimenin ama kelimenin uzunlugu tek ise ortadaki harfi cift ise oratdaki iki harfi döndürün

//? Example => test    === es
//?            testing === t
//?            middle  === dd
//?            A       === a

//******** Solution-1 **************/

// function middle(yeni) {
//   var position;
//   var length;

//   if (yeni.length % 2 === 0) {
//     position = yeni.length / 2 - 1;
//     length = 2;
//   } else {
//     position = yeni.length / 2;
//     length = 1;
//   }
//   return yeni.substring(position, position + length);
// }

// console.log(middle("middle"));

//******** Solution-2 **************/

// const middle = (yen) => {
//   let yeni = yen.split("");
//   //   if (yeni.length % 2) {
//   //     console.log(yeni[Math.floor(yeni.length / 2)]);
//   //   } else {
//   //     console.log(
//   //       yeni[Math.floor(yeni.length / 2 - 1)] + yeni[Math.floor(yeni.length / 2)]
//   //     );
//   //   }
//   return yeni.length % 2 === 0
//     ? yeni[Math.floor(yeni.length / 2 - 1)] + yeni[Math.floor(yeni.length / 2)]
//     : yeni[Math.floor(yeni.length / 2)];
// };

// console.log(middle("test"));

//! Izogram tekrar eden harfleri olmayan bir kelimedir.Bir kelimenin izogram olup olmadigini bulan bir fonksiyon yazin

//? example ==> "terminal" --> true
//?             "helfen" --> false
//?             "Ausdrucken" --> false (ignore letter case)

//******** Solution-1 **************/

//  const arre = 'terminal'.toLowerCase().split('')

//  console.log(arre);

//  for(i of arre){
//     for(let e = arre.indexOf(i); e< arre.length; e++){
//         if(i === arre[e]){

//         }
//     }
//  }

// let isIsogram = (arre) => arre.split("").every((c, i) => arre.indexOf(c) == i);

// console.log(isIsogram("thomas")); /* no repeating letter */
// console.log(isIsogram("moses")); /* s repeat 2 times */
// console.log(isIsogram("hello")); /* l repeat 2 times */
// console.log(isIsogram("world")); /* no repeating letter */
// console.log(isIsogram("a b c")); /* space character repeat 2 times */
// console.log(isIsogram("terminal"));
// console.log(isIsogram("helfen"));
// console.log(isIsogram("Ausdrucken"));

//******** Solution-2 **************/
// TASK:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.
// Implement a function that determines whether a string that contains only letters
// is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {
  //if empty return true.
  if (str.isEmpty) {
    return true;
  } else {
    // All lower case.
    str = str.toLowerCase();
  }
  //split string into individual characters.
  var array = str.split("");
  var sortedArr = array.slice().sort();

  for (var i = 0; i < array.length; i++) {
    //if duplicate is found return false.
    if (sortedArr[i + 1] == sortedArr[i]) {
      return false;
    }
  }
  //else return true
  return true;
}

//testing
console.log(isIsogram("moOse")); //should return false
console.log(isIsogram("to be or not to be")); //should return false
console.log(isIsogram("wasdfgerty")); //should return true
console.log(isIsogram("Ausdrucken")); //should return false
console.log(isIsogram("a b c")); //should return false

//******** Solution-3 **************/

const arr = "ehelfen".toLowerCase().split("");

const filt = arr.filter((e, i) => arr.indexOf(e) === i);
console.log(filt);
if (arr.length === filt.length) {
  console.log("true");
} else {
  console.log("false");
}

//! girilen sayilari kendi degerlerine göre degilde basamak toplamlarinin degerine göre sort eden bir program yazi

//? Example         => '56 65 74 100 99 68 86 180 90' 
//?         (output)--> '100', '180', '90', '56', '65', '74', '68', '86', '99'
