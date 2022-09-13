let doObj = (pname, page, psalary) => {
  let json = [];
  for (let indis in pname) {
    let obj = {
      name: pname[indis],
      age: page[indis],
      salary: psalary[indis] ? psalary[indis] : 18000,
    };
    json.push(obj);
  }

  return json;
};

let name = ["ali", "veli", "ahmet"];

let age = [21, 22, 24];
let salary = [10000, 12000];
console.log(doObj(name, age, salary));

//! Nested objeceler

let veri = {
  name: "ahmet",
  age: 25,
  adress: {
    city: "Istanbul",
    district: "üsküdar",
    street: "1256 sk",
    no: "18",
    daire: "20",
    aptName: "polat apt.",
  },
  phone: [
    {
      type: "home",
      number: "123-456-789",
    },
    {
      type: "company",
      number: "098-765-132",
    },
    {
      type: "cell",
      number: "654-342-123",
    },
  ],
};

let dom = document.getElementById("veri");
//? ahnet in sokak ismini yazdıralım
dom.innerHTML += veri.adress.street + "<br>";

//? ahmetin ev telefonunu yazdıralım
let tel = veri.phone.filter((item) => item.type === "home");
for (item of Object.values(tel[0])) {
  dom.innerHTML += item + " " + "<br>";
}

//? ahmet'in tüm telefon numaralarını yazdıralım
let numbers = veri.phone;
console.log("numbers : ", numbers);
for (obje of numbers) {
  let counter = 0;
  console.log("obje : ", obje);
  for (item of Object.values(obje)) {
    dom.innerHTML += item + "  ";
    counter++;
    if (counter == 2) {
      dom.innerHTML += "<br>";
    }
  }
}
