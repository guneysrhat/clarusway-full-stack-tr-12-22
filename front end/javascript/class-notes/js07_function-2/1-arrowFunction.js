// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

console.log("**** ARROW ******");

//* ORNEK:
//************************************************/

const topla = (a, b) => a + b;
console.log(topla(2, 3));

const usal = (t, u) => t ** u;
console.log(usal(2, 3));

const yazdir = () => console.log("Hi");
const selam = (x) => console.log(x);

//* ORNEK: Silindir Hacmi
//************************************************/

const r = Number(prompt("yaricap giriniz"));
const h = Number(prompt("yukleklik giriniz"));

const hacimHesapla = (r, h) => Math.PI * r ** 2 * h;

console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);

//* ORNEK: Yas hesapla
//************************************************/

const tarih = Number(prompt("Dogum Tarihini giriniz:"));

//! Arrow Func yontemi ile tanimlama
const yasHesapla = (tarih) => {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};
console.log("YASINIZ:" + yasHesapla(tarih));

//* altarnatif

const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

console.log("YASINIZ:" + yasHesaplaKisa(tarih));

//?-----------------------------------------

// console.log("YASINIZ:" + yasHesapla2(tarih));
//! Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.

//! Func Expression yontemi ile tanimlama
const yasHesapla2 = function (tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
};
//?-----------------------------------------

console.log("YASINIZ:" + yasHesapla3(tarih));

//! Func Declaration yontemi ile tanimlama
function yasHesapla3(tarih) {
  const yas = new Date().getFullYear() - tarih;
  return yas;
}
//?-----------------------------------------

//* Ornek: Girilen n terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI  terimleri : 1, 1, 2, 3, 5, 8, 13, 21, 34 ....
let stringResult = "1,1";
// f(n) = f(n-1) + f(n-2)

const fibo = (n) => {
  let fib1 = 1;
  let fib2 = 1;
  let toplam = 0;
  for (let i = 2; i < n; i++) {
    toplam = fib1 + fib2;
    fib1 = fib2;
    fib2 = toplam;
    stringResult += "," + fib2;
  }
  return fib2;
};
const n = +prompt("n terimini giriniz:");
if (n <= 0) {
  console.log("Lutfen 0 dan buyuk bir sayi giriniz");
} else {
  console.log(`FIBO(${n})= ${fibo(n)}`);
  console.log(stringResult);
}
