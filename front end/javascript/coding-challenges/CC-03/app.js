// let control = "abcdefghijklmnopqrstuvwxyz0123456789_+.@";
// let cont_array = control.split();
// let emailControl = function (data) {
//   let controlArray = data.split("");
//   console.log(controlArray);
//   for (let i = 0; i < controlArray.length; i++) {
//     if (!control.includes(controlArray[i])) {
//       return false;
//     } else {
//       if (controlArray[0] === "@") {
//         return false;
//       }
//     }
//   }
// };

// emailControl("deneme1234@deneme.com");

//* sort Array
// const sortArr = function (arr, n) {
//     if (n > arr.length || n <= 0) {
//       return "Out of range";
//     }
//     arr.sort((a, b) => {
//       return a - b;
//     });
//     console.log(arr);
//     // array.sort() mutater func.
//     return arr[n - 1];
//   };

//   const sample = [2, 35, 14, 3, 12, 15];

//   console.log(sortArr(sample, 2));

//*Tc
// const IdControl = function (str) {
//     if (str.length !== 11 || +str[0] === 0) {
//       return "Id is invalid";
//     }

//     let even = +str[1] + +str[3] + +str[5] + +str[7];
//     // 0 - 2 - 4 - 6 - 8
//     let odd = +str[0] + +str[2] + +str[4] + +str[6] + +str[8];
//     // 1 - 3 - 5 - 7 - 9

//     const s10 = (odd * 7 - even) % 10;
//     const s11 = (even + odd + s10) % 10;

//     return s10 === +str[9] && s11 === +str[10] ? "Id is valid" : "Id is invalid";
//   };

//   console.log(IdControl("14702551364"));

/ ******* ROLL THE DICES***********

// const roll = (number) => {
//   for (let i = 1; i <= number; i++) {
//     let rol1 = Math.ceil(Math.random() * 6);
//     let rol2 = Math.ceil(Math.random() * 6);
//     const arr = ["one", "two", "three", "four", "five", "six"];
//     if (rol1 > rol2) {
//       console.log(`${i}. times => ${arr[rol2 - 1]} - ${arr[rol1 - 1]}`);
//     } else {
//       console.log(`${i}. times => ${arr[rol1 - 1]} - ${arr[rol2 - 1]}`);
//     }
//   }
// };
// roll(10);

// ******* Student Registration **************

// const arr = [
//   "C1234 - John Doe, London, Full-Stack",
//   "C2345 - Jane Doe, London, Data-Science",
//   "C2346 - Mary Ann, Paris, AWS-Devops",
//   "C2347 - Adam Smith, Texas, AWS-Devops",
//   "C2444 - Michael Great, Arizona, Full-Stack",
//   "C2555 - William Cash, Manchester, Data-Science",
//   "C2455 - Patrick Jane, Madrid, Full-Stack",
// ];

// const student = (a) => {
//   a.map((str) => {
//     let result = str.split(" ");
//     console.log(`Student Nr: ${result[0]}\n
// First Name: ${result[2]}\n
// Last Name: ${result[3].slice(0, -1)}\n
// Location: ${result[4].replace(/,$/, "")}\n
// Program: ${result[5]}\n
// ==========================`);
//   });
// };
// student(arr);

 //* Email */

// const emailValidation = email => {
//     const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     email.match(emailformat) ? alert("Valid email address!"): alert("You have entered an invalid email address!");
//   }
//   emailValidation('can.ocalir@gmail.com')