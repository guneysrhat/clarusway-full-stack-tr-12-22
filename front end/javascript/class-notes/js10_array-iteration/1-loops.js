//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log("******* LOOPS IN ARRAYS ******");

const dizi = [-5, 15, 22, -4, 45, 78];

const negatifler = [];
const pozitifler = [];

const dizilereAyir = (n) => {
  for (let i = 0; i < n.length; i++) {
    if (n[i] < 0) {
      negatifler.push(n[i]);
    } else {
      pozitifler.push(n[i]);
    }
  }
};
dizilereAyir(dizi);
console.log(negatifler);
console.log(pozitifler);
console.log(dizi);
//?-----------------ORNEK--------------------------
//? Dizideki notlarin ortalamasini hesaplayiniz.
const notlar = [55, 77, 23, 89, 100];

let toplam = 0;

for (let i = 0; i < notlar.length; i++) {
  toplam += notlar[i];
}

console.log("ORTALAMA:", toplam / notlar.length);

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrencileri aramamizi saglayacak ve aranilan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//* fonksiyonu yaziniz. Eger aranilan isimde bir ogrenci yok ise
//* fonksiyon "ogrenci bulunamadi" dondurulmelidir.
//*--------------------------------------------------------

const students = ["ahmet", "mehmet", "ismet", "ahmet", "can", "mehmet", "cem"];

const findStudents = (arr, search) => {
  let counter = 0;
  for (let i in arr) {
    if (search === arr[i]) {
      counter++;
    }
  }
  if (counter === 0) {
    return `${search} can not be found `;
  } else {
    return `${search} found ${counter} times`;
  }
};

const name = prompt("Please enter a name").toLowerCase();
console.log(findStudents(students, name));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const findStudentsOf = (arr, search) => {
  let counter = 0;
  for (let item of arr) {
    if (search === item) {
      counter++;
    }
  }
  if (!counter) {
    return `${search} can not be found `;
  } else {
    return `${search} found ${counter} times`;
  }
};

const studentsName = prompt("Please enter a name").toLowerCase();
console.log(findStudentsOf(students, studentsName));
