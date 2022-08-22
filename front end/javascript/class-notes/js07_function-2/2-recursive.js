// ? =================================================
// ?           FONKSİYONLAR - RECURSIVE
// ? ================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.
//* Özellikle karmasik matematiksel hesaplamalarin kodlamasini
//* kolaylaştirmak icin kullanilir.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alınabilir.

//* ORNEK: Girilen n. terime kadar Fibonacci sayılarının toplamini
//* hesaplayarak yazdiran fonksiyonu recursive olarak kodlayiniz.

console.log("****** 2 - RECURSION ********");

//? FIBONACCI terimleri:  0, 1, 1, 2, 3, 5, 8, 13, 21, ...
//! f(n) = f(n-1) + f(n-2)

const fibo = (n) => {
  if (n <= 0) {
    return 0;
  } else if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
};

const n = +prompt("n terimini giriniz:");
console.log(`FIBO(${n})= ${fibo(n)}`);
