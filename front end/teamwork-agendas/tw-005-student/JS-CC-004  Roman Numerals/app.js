//******** Solution-1 **************/

const convertRomanNum = (num) => {
  const romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let letters = [];
  for (let i of Object.keys(romanNum)) {
    while (num >= romanNum[i]) {
      letters.push(i);
      num -= romanNum[i];
    }
  }
  return letters.join("");
};
console.log(convertRomanNum(123));

//******** Solution-2 **************/
// function romanNum(num) {
//     const romanNums = [
//       ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
//       ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
//       ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
//       ["M", "MM", "MMM"],
//     ];

//     const numArr = num.toString().split("").map((n) => Number(n));
//     const result = numArr
//       .reverse()
//       .map((n, i) => romanNums[i][n - 1])
//       .reverse()
//       .join("");

//     return result;
//   }

//******** Solution-3 **************/

// INT TO ROMAN

// const romanStr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX",
//  "V","IV", "I",];

// const romanInt = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

// const intToRoman = (year) => {
//   let result = "";
//   for (let i = 0; i < romanInt.length; i++) {
//     while (year >= romanInt[i]) {
//       year -= romanInt[i];
//       result += "" + romanStr[i];
//     }
//   }
//   return result;
// };

//******** Solution-4 **************/
