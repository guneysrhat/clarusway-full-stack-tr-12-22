//? # ODEV1: Dort Islem Hesap Makinasi (2 Sayı bir operator)

//? const number1 = +prompt("Bir sayi giriniz:");
//? const operator = prompt("Bir operator giriniz.(+, -, /,,)");
//? const number2 = +prompt("Bir sayi giriniz:");
//?  let sonuc = 0
//?     switch (operator) {
//?         case "+":
//?             sonuc = number1 + number2;
//?             break;
//?         case "-":
//?             sonuc = number1 - number2;
//?             break;
//?         case "/":
//?             sonuc = number1 / number2;
//?             break;
//?         case "":
//?             sonuc = number1 number2;
//?             break;

//?         default:
//?                 alert("Yanlis islem yapildi.")
//?             break;
//?     }
//?     console.log(sonuc:${sonuc});

//* # ODEV2 :Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

//* const dersgunu = +prompt("Haftanin kacinci gunune gitmek istersiniz?");

//* switch (dersgunu) {
//*     case 1:
//*         console.log("Pazartesi gunu:Inclass");
//*         break;
//*     case 2:
//*         console.log("Salı gunu:Inclass");
//*         break;
//*     case 3:
//*         console.log("Carsamba gunu:Inclass");
//*         break;
//*     case 4:
//*         console.log("Persembe gunu:Inclass");
//*         break;
//*     case 5:
//*         console.log("Cuma gunu:Teamwork");
//*         break;
//*     case 6:
//*         console.log("Cumartesi gunu:Inclass+Teamwork");
//*         break;
//*     case 7:
//*         console.log("Pazar gunu:Off-day");
//*         break;

//*     default:
//*         alert("AAAA");
//         break;
//* }

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,fazla olanlara ise %10 zam yapmak istiyoruz.
let maas = +prompt("Maasinizi giriniz;");
const asgari_ucret = 5500;

if (maas > asgari_ucret) {
  maas = Math.floor(`maas * 1.1`);
} else {
  maas = Math.floor(`maas * 1.5`);
}
console.log(`Yeni maasiniz ${maas}`);
