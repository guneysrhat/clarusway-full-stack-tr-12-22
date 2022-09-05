//* ===================================================
//*                 (OBJECTS)
//* ===================================================

//? Diziler sirali bellek bölgeleridir.Bu yuzden dizilere
//? indeksleme ile erisebiliriz. Ancak daha karmasik (unstructured)
//? verilerimiz icin  Object'leri kullanabiliriz.

//? Object'lerde Key-value (property-value) yapisi kullanilir.
//? Herhangi bir veriyi erismek icin property (key) adi kullanilir.

console.log("******* Objects *********");

//! 3 farkli yontem ile object olusturulabilir
//* ======================================================
//* 1- Object() class'indan new Operatoru ile
//* ======================================================

const arabalar = new Object();
arabalar.marka = "BMW";
arabalar.motor = "1.3";
arabalar.model = 2022;
arabalar.lpg = true;
console.log(arabalar);

//! Read
console.log(arabalar.lpg); //? .notation
console.log("MODEL:", arabalar["model"]); //? Square bracket notation

//? Square bracket yonteminin en buyuk avantaji key degerini
//? degisken olarak kullanabilmemizdir.
const key = "motor";
console.log(arabalar[key]);

arabalar.motor = "1.6";
console.log(arabalar);

//* ---------------------------------------------------------
//* 2- object constructor'i kullanarak (OOP ile ayrintilandirilacak)
//* ---------------------------------------------------------

//? Object Constructure
function Personel(id, ad, maas) {
  this.perId = id;
  this.perAd = ad;
  this.maas = maas;
  //   console.log(this); //! Personel objesine baslanmistir(binded )
}

const kisi1 = new Personel("123456789", "Mustafa", 15000);
const kisi2 = new Personel("13214456789", "Canan", 25000);
// console.log(kisi1);
console.log(kisi1.perAd);
console.log(kisi2.maas);
console.log(kisi2["perId"]);

//? Global alanda window objesini gosterir.
console.log(this);
// window.alert("Meraba");

//* ---------------------------------------------------------
//* 3- Object Literal (En cok tercih edilen yontem)
//* ---------------------------------------------------------

const worker = {
  name: "Can",
  surnam: "Canan",
  age: 33,
  job: "developer",
  languages: ["C++", "Java", "JavaScript", "Python", "Go"],
  salary: 140000,
};
console.log(worker);

console.log("JOB:", worker.job);
console.log("Lang:", worker["languages"]);

worker["languages"].forEach((l) => console.log(l));

console.log(worker.languages[2]);

worker.dob = "1990";
worker.email = "can@gmail.com";
console.log(worker);

// worker["salary"] = worker["salary"] * 1.1;
worker["salary"] *= 1.1;
console.log(worker);

//*Objest Capy
const person = worker; //! Shallow (Sig -Sig) Copying
console.log("PERSON:", person);

//! Object.create(), Object.assign(), spread (...), concat() , slice() -> Shallow Copying

person.dob = 2000;
console.log("PERSON:", person);

//! Deep Copy
let deepCopyOfWorker = JSON.parse(JSON.stringify(worker));
// console.log(JSON.stringify(worker));

deepCopyOfWorker.dob = "2022";
console.log("DEEP:", deepCopyOfWorker);

//* ---------------------------------------------------------
//*                  Object Methodlari
//* ---------------------------------------------------------

const personal = {
  name: "Can",
  surnam: "Canan",
  dob: 1990,
  job: "developer",
  salary: "140000",
  driveingLicanse: true,
  calculateAge: function () {
    return new Date().getFullYear() - this.dob;
  },
  summary: () => {
    return `${this.name} is ${this.calculateAge()} years old`;
  },
};

console.log("Dob:", personal.calculateAge());
console.log("SUMMARY:", personal.summary());
