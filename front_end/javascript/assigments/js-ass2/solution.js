//! ODEV1: Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.

let flag = true;
let arr = [];
let sum = 0;

while (flag) {
  let input = prompt("sayi girisi yapin").toLowerCase();
  if (input === "q") {
    alert("Basari ile cikis yaptiniz");
    flag = false;
  } else {
    if (input > 0 && input < 100) {
      arr.push(input);
    } else {
      alert("sayi 0 le 100 arasinda olmalidir");
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  sum += parseFloat(arr[i] / arr.length);
}
console.log(sum.toFixed(2));
