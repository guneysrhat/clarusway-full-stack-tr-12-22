// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------


//! 1. yontem (array literal) - tercih edilen yontem
const isimler = ["ahmet" , "ismet", "can", "canan","Mathew"];
console.log(isimler);
console.log(typeof isimler);
console.log(isimler.length);

const bosDizi = []
console.log(bosDizi)
//! 2. yontem (object Constructor)
const diller= new Array("C++" , "javascript", "Assembly" , "Go", "Rubby") 
console.log(diller)

const numbers = new Array(3, 2, 1);
console.log(numbers)

//! 10 elemanli bos bir Array olusturuldu
const numbers1 = Array(10)
console.log(numbers1)

//! 3. yontem (Array.of())
const veriler = Array.of(1, 2, 3)
console.log(veriler)

const veri = Array.of("Deneme");
console.log(veri)

//* Diziden Veri Okuma-Yazma (indisleme)
//* ---------------------------------------------------------
//! Diuziden veri okuma

console.log(diller[1])
const go = diller[3]
console.log(go)

console.log(isimler[isimler.length - 1])
//?at\()
console.log(isimler.at(-1))

//!  Diziye veri yazma
// const isimler = ["ahmet", "ismet", "can", "canan", "Matheww"];
isimler[1] = "Saffet";
console.log(isimler);

//!Uncaught TypeError: Assignment to constant variable.
// isimler = ["Ali", "Veli"];

 //? numbers dizisinn son elemanin  degerini bir arttirin
 console.log(numbers)
 numbers[numbers.length -1]++
console.log(numbers)

const yaslar = [22, 44, 55]
const kisiler = ["ahmet", "can", 2022, 2022 - 1990 , true, yaslar]
console.log(kisiler)

//? kisiler icerisindeki yaslar dizisindebuklunan  55 yasini konsola yazdiriniz

const yas55 = kisiler [5][2]
console.log(yas55)

//? kisiler icerisindeki yaslar dizinnde bulunan 44 yasini bir eksiltiniz
kisiler [5][1]-- ; //? 43
console.log(kisiler)
console.log(yaslar)