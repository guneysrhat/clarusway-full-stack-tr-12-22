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
