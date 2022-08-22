// ? ===================================================
// ?                FONKSİYONLAR-SCOPE
// ? ====================================================
console.log("******* 3 - SCOPE ********");

let sayi1 = 5; //! Glabal Scope
console.log(sayi1); //! 5

const fonks1 = function () {
  sayi1 = 22;
  console.log(sayi1); //! 22
};
fonks1();

console.log(++sayi1); //! 23
console.log(sayi1); //! 23
console.log(sayi1++); //! 23
console.log(sayi1); //! 24

//?-----------------------------------------------------------
let sayi2 = 7; //! Glabal Scope
console.log(sayi2); //! 7

const fonks2 = () => {
  let sayi2 = 11; //! Function Scope
  console.log(sayi2); //! 11
};

fonks2(); //! 11
console.log(sayi2++); //!7
