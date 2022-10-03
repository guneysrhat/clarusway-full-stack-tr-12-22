// ?=========================================================
// ?                DIZILER (ARRAYS)
// ?=========================================================

console.log("***** ARRAYS ******");

//* Dizi Tanimlama
//* ---------------------------------------------------------


//! 1. yontem (array literal) - tercih edilen yontem
const isimler = ["ahmet" , "ismet", "can", "canan","mathew"];
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
//?at()
console.log(isimler.at(-1))

//!  Diziye veri yazma
// const isimler = ["ahmet", "ismet", "can", "canan", "Matheww"];
isimler[1] = "saffet";
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

// ?=========================================================
// ?          DIZIYI DEGISTIREN  (MUTATOR) METOTLAR
// ?=========================================================

const arabalar = ["BMW", "Mercedes", "Fiat", "Anadolu"]
 
//** pop() son elemani siler ve sildigi elemani dondurur */

const silinen = arabalar.pop()
console.log(arabalar, silinen)

//* push() dizinin sonuna eleman ekler ve dizinin son elaman sayisini dondurur.

const n = arabalar.push("Citroen")
console.log(arabalar, n)

//*unshift dizinin 0. indexine eleman ekler ve dizinin son eleman sayisini dondurur

const n1 = arabalar.unshift("Audi");
console.log(arabalar, n1);

//*shift dizinin 0. indeks elemanini siler ve silinen elemani dondurur
const audi = arabalar.shift()
console.log(arabalar,audi)

//*splice()

//? 1. parametre: eklenecek indis numarasi
//? 2. parametre: 0 ise araya ekleme, 1 ise uzerine yazma 
//? 3. paarametre: yeni eklenecek veri
arabalar.splice(1, 0, "Passat");
console.log(arabalar) 

arabalar.splice(3, 1, "Honda")
console.log(arabalar)

//* Dizinin tamamini ters siraya ceviriniz
arabalar.reverse();
console.log(arabalar)

//* sort() Diziyi alfebetik olarak siralar

isimler.sort()
console.log(isimler)

//! Alfabetik siraladigi icin dogru sonuc cikmayabilir
const sayilar = [2, 3, 111, 22 , 1, 11, 5, 7, 6, 6]
sayilar.sort()
console.log(sayilar)

//* sort metodu diziyi iterasyona ugratir ve parametre olark aldigi arrow
//* fonksiyonunu dizinin her bir elemanina uygular. Bu sayede kucuk sayilar
//* ile buyuk sayilari yer degistirerek siralama islemini gerceklestirir.
sayilar.sort((a,b)=> a - b);
console.log(sayilar)

//* fill()
const array1 = [1, 2, 3, 4];
array1.fill(0);
console.log(array1);

array1.fill(1,2,4)
console.log(array1)

array1.fill(-1,1) //* 1.eleman ve sonrasini -1 yap
console.log(array1)

//? ===========================================================
//?  DIZI ERISIM METOTLARI
//? ===========================================================
const sayilar1 = [3, 5, 2, "2", "üc", 2, "3", "bes", "5"];

//* includes()
//*-----------------------------------------------------------
console.log(sayilar1.includes(5)) //? true
console.log(sayilar1.includes("5"))  //? false


//* indexOf(),  lastIndexOf();
//*-----------------------------------------------------------
//* ilk eslesen indeksi dondurur.
console.log(sayilar1.indexOf(2)) //? 2
console.log(sayilar1.lastIndexOf(2)) //? 5
console.log(sayilar1.lastIndexOf(4)) //? 2

//! Odev: prompt ile konsoldan bir sayi istenmeli (string veya number
//! olarak) eger bu girilen sayi, dizi icerisinde bulunuyorsa indisi
//! (string ve number olarak ayri) yazdirilmalidir. Eger bulunamadiysa
//! Aranilan bulunamamistir yazidirilmalidir.
//!-----------------------------------------------------------

//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.

console.log(sayilar1.join(" "))
console.log(sayilar1.join()) // 3,5,...
console.log(sayilar1)

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString())


//* slice()
//*-----------------------------------------------------------

const arabalar1 = ["BMW", "Mercedes", "Fiat", "Anadolu"]
const yeniArabalar = arabalar1.slice(2)
console.log(yeniArabalar,arabalar1)

const yeniArabalar1 = arabalar1.slice(1, 3)
console.log(yeniArabalar1)

//* concat()
//*-----------------------------------------------------------

const yazilar = ["Bugun", "hava", "cok", "guzel"]
const numbersArr = [1,2,5,7]
const combinedArr = yazilar.concat(numbersArr, ["aslinda", "cok", "sicak"])
console.log(combinedArr)

//* every()
//*-----------------------------------------------------------

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yasArray = [18,22,34,78,81,5]
const check = yasArray.every((yas) => yas >= 18)
check ? console.log("dizideki herkesin yasi 18 denh buyuktur"): console.log("Dizide 18 yas alti var");

//* yas dizisi içinde doloş (iterate et) tek tek 18 den büyük mü diye bak, eğer hepsi büyükse (hepsi şartı sağlıyorsa) true döndür, eğer bir tane bile büyük değilse (şartı sağlamıyorsa) false döndür.

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const buyuk80 =yasArray.some((yas) => yas >= 80);
console.log(buyuk80) 

//* find() findLast()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: yasi 30dan buyuk olan ilk indisi dondurun
const yasilk30 = yasArray.find((yas)=> yas>=30)
const yasson30 = yasArray.findLast((yas)=> yas>=30)
console.log(yasilk30, yasson30)

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.
 const foundIndex = yasArray.findIndex((yas) => yas >=30)
 console.log(foundIndex)
