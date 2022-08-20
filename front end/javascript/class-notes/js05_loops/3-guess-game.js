//? Program 0*100 arasında rasgele bir sayı tutacak ve kullanıcının bu sayıyı 5 kere(hak) de bilmesini isteyecektir. Her yanlışta hakkını bir düşürecek ve ARTTIR/AZALT diyerek kullanıcıyı yönlendirecektir.Sonuç olarak kullanıcının hakkı 0 olursa "Üzgünüz bilemediniz" eğer bildi ise "Tebrikler ... denemede bildiniz" yazacaktır.

//? SORU - TAHMIN

//* 1- hak =5
//* 2- Raskele sayı tut (0-100)
//* 3- Kullanıcan tahmin iste (tahmın)
//* 4- hak=hak-1
//* 5- eğer (tahmin =?rasgele)
//*        print(Tebrikler Bildiniz)
//*    değilse (tahmin < rasgele)
//*        print(Arttır)
//*    değilse(tahmin > rastgele)
//*        print(Azalt)
//* 6- eğer (hak > 0 )
//*       goto stage-3
//*   değilse
//*       print(üzgünüz)

let tahmin;
let cont;
do {
  let hak = 5;
  const rastgele = Math.round(Math.random() * 100);
  console.log(rastgele);
  do {
    tahmin = +prompt("Lütfen 0-100 arasında bir tahmin giriniz");
    hak -= 1;
    if (tahmin === rastgele) {
      console.log(`Tebrikler ${5 - hak} kerede bildiniz`);
      break;
    } else if (tahmin < rastgele) {
      console.log("Arttır ⬆");
    } else {
      console.log("Azalt ⬇");
    }
  } while (hak > 0);

  if (tahmin !== rastgele) {
    console.log("uzgunuz oyunu kaybettiniz 😔😔");
  }
  cont = prompt("Tekrar oynamak istermisiniz?");
} while (cont === "y" || cont === "Y");

//? Ödev programı reflash 'le
