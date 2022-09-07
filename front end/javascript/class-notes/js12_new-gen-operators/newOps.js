//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******");

const car = {
  name: "BMW",
  model: 1990,
  engine: 1.6,
  colors: ["blue", "purple"],
};

//* 1.YONTEM (Classical)
const name1 = car.name;
const model1 = car["model"];

//* 2.YONTEM: DESTRUCTURING

const { name: carName, colors, model, engine } = car;
console.log(carName, model, engine, colors);

//* EXAMPLE: NESTED
const cars = {
  car1: {
    name: "BMW",
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: "Mercedes",
    model: 2022,
    engine: 2.0,
  },
};

const { car1, car2 } = cars;
console.log(car1);

const { name: c1Name, model: c1Model } = car1;
const { name: c2Name, model: c2Model } = car2;

console.log(c1Name, c2Name);

//* Example
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "Josh",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

team.forEach((p) => {
  console.log("********************");
  console.log("Name", p.name);
  console.log("Surname", p.surname);
  console.log("Job", p.job);
  console.log("Age", p.age);
});

//*  DESTRUCTURING

team.forEach((p) => {
  const { name, surname, job, age } = p;
  console.log("********************");
  console.log("Name", p.name);
  console.log("Surname", p.surname);
  console.log("Job", p.job);
  console.log("Age", p.age);
});

//* function
const getInfo = () => {
  return {
    id: 1,
    productName: "Iphone",
    price: 30000,
  };
};

console.log(getInfo());
const { productName, price } = getInfo();
console.log("Product Name", productName);
console.log("Product Price", price);

//? Fonksiyonlarin obje parametreleri dogrudan dest. yapilabilir.
const calculate = ({ id, price }) => {
  console.log(price * 1.1);
};

calculate({ id: 1, price: 3000 });

//* ======================================================
//*  DESTRUCTURING (ARRAY)
//* ======================================================
const names = ["Ahmet", "Mehmet", "Ismet", "Saffet"];

//* Classical
const mehmet = names[1]; //* indexing

const [p1, p2, p3] = names;
console.log(p1, p2, p3);
//*======================================================
//*  REST (...)
//* ======================================================

//? REST operatoru kullanici tarafindan girilen degerleri dizi
//? icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1- Bir dizi veya object'deki bazi degerlerden geri kalanlarini
//!    ayri dizi yada objelere kopyalanmasini saglayabilir.

//* REST: (Arrays)
const autos = ["reno", "anadol", "bmw", "mercedes", "ferrari"];

const [anadol, reno, , ...restAutos] = autos;
console.log(reno, anadol);
console.log(restAutos);

//* REST (Objects)
const personel = {
  pName: "john",
  surname: "smith",
  job: "developer",
  age: 30,
};

const { pName, job, ...ageSurname } = personel;
console.log(ageSurname);
console.log(pName, job);

//! Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilabilirler.
const sum = (x, y) => x + y;
//? Hata vermez fakat sadece 2 argumani toplar
console.log(sum(1, 2, 3, 4, 5, 6));

const sumAll = (...numbers) => {
  console.log(numbers); //? (4)[1,2,3,4]
  return numbers.reduce((s, n) => (s += n), 0);
};

console.log("SUM OF NUMBERS:", sumAll(1, 2, 3, 4, 5, 6));



//*======================================================
//*  SPREAD (...)
//* ======================================================
