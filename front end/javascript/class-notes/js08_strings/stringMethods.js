// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

console.log("*** STRING METHODS ***");

//!1- Klasik yöntem (String Literals) ile string tanimlanirsa bu string
//! bir primitive degiskendir.
let str1 = "Clarusway";
//Char => C, l, a,....
const str2 = " Hello";
const str3 = " Full Stack";

console.log(str1, typeof str1);

//!2 - Non-primitive String tanımlama
const str4 = new String("Non-Primitive");
console.log(typeof str4);

//?----------------------------------------
console.log(str1.toLowerCase());

//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string'ler ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.

//? Ek Açıklama için : https://javascript.info/primitives-methods

const sayi = 5;
const str5 = str1 + str2 + str3 + sayi; // Concatination
console.log(str5, typeof str5);

//* ---------------------------------------------------
//*  concat() - immutable
//* ---------------------------------------------------

console.log(str1.concat(str2)); //* Orjinal degerler bozulmaz
console.log(str1, str2);

//? Assigning ile degiskenin degeri degistirilebilir.
str1 = str1.concat(str3, " Path");
console.log(str1);

//* ----------------------------------------------------------
//* toUpperCase(), toLowerCase() --immutable
//* ----------------------------------------------------------

const myName = "Noah Adams";
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

let yourName = "ismet";
// yourName = yourName.toUpperCase();
// yourName = yourName.toLocaleUpperCase('tr');
yourName = yourName.toLocaleUpperCase();
console.log(yourName);

//! ORNEK: iki string'i esit veya degil diye kiyaslayarak sonucu
//! donduren fonksiyonu yaziniz.

// const esitMi = (str1, str2) => {
//   return str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
//     ? `${str1} ile ${str2} Esittir`
//     : `${str1} ile ${str2} Esit degildir`;
// };

const esitMi = (str1, str2) =>
  str1.toLocaleUpperCase() === str2.toLocaleUpperCase()
    ? `${str1} ile ${str2} Esittir`
    : `${str1} ile ${str2} Esit degildir`;

console.log(esitMi("MerHaba", "MERHABA"));
console.log(esitMi("Hello", "Hell"));

//* ----------------------------------------------------------
//* LocaleCompare()
//* ----------------------------------------------------------

const a = "réservé"; // with accents, lowercase
const b = "RESERVE"; // no accents, uppercase

console.log(a.localeCompare(b));
// expected output: 1
console.log(a.localeCompare(b, "en", { sensitivity: "base" }));

//? 'BASE: a ≠ b, a = á, a = A'
//? 'ACCENT: a ≠ b, a ≠ á, a = A'
//? 'CASE: a ≠ b, a = á, a ≠ A'

//* ----------------------------------------------------------
//* LocaleCompare()
//* ----------------------------------------------------------
