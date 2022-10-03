let arr = [0, 1, ["ali", "veli"], 3, 4, [24, 27], 6, [12000, 15000]];

//? arr dizisi içerisindeki alt dizilerden bir obje üretelim
let obj1 = {
  name: arr[2][0],
  age: arr[5][0],
  salary: arr[7][0],
};
let obj2 = {
  name: arr[2][1],
  age: arr[5][1],
  salary: arr[7][1],
};
let json = [obj1, obj2];
console.log(json);

//! map ve filter kullanımı

//? çalışanların maaşına yüzde 10 zam yapılmış halini ekrana yazdıralım
let dizi = json.map((item) => Math.round(item.salary * 1.1));
console.log(dizi);

//? yaşı 25 in üzerinde olan çalışanlar
console.log(json.filter((item) => item.age > 25));

//? map uyguladıktan sonra çıktıyı json formatında istiyoruz

let js = json.map((item) => {
  return {
    salary: Math.round(item.salary * 1.1),
  };
});
console.log(js);

//? çalışanların maaşlarına yüzde 20 zam yapalım maaşı 16000 nin üzerinde olanların isimlerini listeleyelim
let son = json.map((item) => {
  return {
    salary: Math.round(item.salary * 1.2),
    name: item.name,
  };
});
son
  .filter((item) => item.salary > 16000)
  .forEach((item) => console.log(item.name));

//? json da ki salary i değişelim

json.forEach((item) => (item.salary = item.salary * 1.1));
console.log(json);
