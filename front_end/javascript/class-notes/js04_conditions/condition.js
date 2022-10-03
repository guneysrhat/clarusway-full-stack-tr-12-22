// * ===================================================
// *                  KARAR YAPILARI
// * ===================================================

// * ******************* IF-ELSE ************************

console.log("****** CONDITIONS *******");

//? ORNEK1: Consoldan girilen bir sayisinin pozitif, negatif 
//? yada 0 oldugunu tespit ederek yazdiriniz

// const sayi = Number(prompt("Bir sayi giriniz"))
// if( sayi > 0) {
//     console.log(`${sayi} pozitiftir.`);
// }else if( sayi == 0){
//     console.log(`${sayi} 'a esittir.`);
// }
// else{
//     console.log(`${sayi} negatiftir.`);
// }
// console.log(sayi, typeof sayi);

//? Ornek2: console'dan 3 tamsayi olarak bunlari en buyugunu 
//? yazdirniz.

// const n1 = prompt("Sayi1:")
// const n2 = prompt("Sayi2:")
// const n3 = prompt("Sayi3:")


//* 1. Yontem
// if (n1 >= n2 && n1 >= n3){
//     console.log(`${n1} en buyuk sayidir`);
// }else if (n2 >= n1 && n2 >= n3){
//     console.log(`${n2} en buyuk sayidir`);
// }else if (n3 >= n1 && n3 >= n2){
//     console.log(`${n3} en buyuk sayidir`);
// }

//* 2. Yontem 
// let enBuyuk = n1

// if (n2 >= enBuyuk ) {
//     enBuyuk = n2;
// } if (n3 >= enBuyuk){
//     enBuyuk = n3;
// }
// console.log(`${enBuyuk} en buyuktur1`);

//* 3. Yontem 
// let enBuyuk = n1

// if (n2 >= enBuyuk ) {
//     enBuyuk = n2;
//     if (n3 >= enBuyuk){
//         enBuyuk = n3;
//     }
// }

// console.log(`${enBuyuk} en buyuktur1`);


//? 4 islem hesap makinesi yaziniz (2 adet sayi yaziniz)
//? (SWITCH-CASE KULLAN)
//
//
//
//
//
//
//
//
//
//

// const yas
// const cinsiyet
// const saglikli //eklenecek silayttan


// * ******************* SWITCH-CASE ************************
//! ODEV2
//! Clarusway’deki haftalık ders ve etkinlik programınızı, console’dan girilen gün değerine göre çıktı veren kodu switch-case yapısı ile yazınız.

//! Program
//! Pazartesi, Salı ,Çarşamba, Perşembe -> InClass
//! Cuma -> Teamwork
//! Cumartesi ->  InClass + Workshop
//! Pazar -> Self-Study
//! Aksi takdirde -> Yanlis gun girildi.

// * ******************* TERNARY ************************

//? ORNEKS: KALDI-GECTI

const not = +prompt("notunuzu giriniz");
// let sonuc = not >= 50 ? "Gecti" : "Kaldi";
// console.log(sonuc);
console.log( not >= 50 ? "Gecti" : "Kaldi");

//? ORNEK6:
const yas = 17;
const cinsiyet = "erkek";
const saglikli = false;

yas >= 18 && cinsiyet === "erkek" && saglikli
  ? console.log("askerlik yapmali")
  : console.log("Askerlik yapmasina gerek yok");

//! ODEV3:Maasi asgari ucretten az olanlara %50 zam,
//! fazla olanlara ise %10 zam yapmak istiyoruz.

//* let maas = 5000;
//* maas = maas * 1.5

//! ODEV4: Console’dan kişinin gelir ve gider miktarını alan
//! eğer kişinin geliri giderinden en az asgari ücret kadar fazla ise Kredi Verilebilir 🤑
//! değilse  Kredi Verilemez 🥺
//! şeklinde çıktı veren kodu Ternary deyimi kullanarak yazınız.
