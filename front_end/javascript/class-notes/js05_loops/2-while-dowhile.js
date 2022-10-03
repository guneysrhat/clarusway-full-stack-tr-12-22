// * ============================================
// *            DONGULER(LOOPS)- WHILE
// * ============================================

console.log("****** WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu while dongusu ile yaziniz.

let not = prompt("Lütfen 0-100 arsında bir sayı griniz")

while (not < 0 || not> 100) {
    console.log("Not 0-100 arasında olmalidir");
    not = prompt("Lütfen 0-100 arsında bir sayı griniz")
}

console.log("Girilen Not:", not);


// if (not < 0 || not> 100){
//     alert("Not 0-100 arasında olmalidir")
// }

// * ============================================
// *            DONGULER(LOOPS)- DO-WHILE
// * ============================================

console.log("****** DO - WHILE *******");

//? ORNEK: Kullanicidan 0-100 arasinda bir not isteyen ve girilen not
//? 0-100'den farkli ise Kullaciniyi uyararak yeniden 0-100 arasinda
//? not girmeye zorlayan kodu do-while dongusu ile yaziniz.

let not1 ;

 do{
    not1 = +prompt("Lütfen 0-100 arsında bir sayı griniz")
    if (not1 < 0 || not1> 100) {
        console.log("Not 0-100 arasında olmalıdır.");
    }
}while (not1 < 0 || not1> 100)

console.log("Girilen Not:", not1);


//!!!!!  ÖDEV 
//!! Klavyeden Q veya q karakteri girilene kadar not girişi yapan ve bu karakterlerden birisi girildiğinde O ana kadar girilen tüm notların ortalamasını hesaplayarak konsola ortalamayı bastıran uygulamayı yazınız.





