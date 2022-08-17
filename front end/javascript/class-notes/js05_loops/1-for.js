// * ============================================
// *            DONGULER(LOOPS)- FOR
// * ============================================

console.log("****** FOR *******");


//? ornek : 1 den n e kadar sayıları toplayan kodu yazınız.

// const n = Number(prompt("Bır sayı gırınız:"))

// let toplam=0
// for (let i = 1; i <= n ; i++ ){
//     let toplam = i;
//     console.log(object);
// }

// console.log("SONUC:", toplam);

// //? 0-100 arasında 10 adet ratsgele sayı ureten kodu for donguus ıle yazınız.

// for (let i=1; i<=10; i++){
//     const rasgele =Math.floor(Math.random()* 100)
//     console.log(rasgele);
// }

//* NOT:
//* Math.floor() =>surekli asagiya yuvarlar
//* Math.ceil() =>sürekli yukariya yuvarlar
//* Math.round() => degerine gore yuvarlar.
//* Math.trunc() => kesirli sayinin tam kismini alir


//? ÖRNEK: Girilen bir sayinin Asal olup olmadigini yazdiran 
//? kodu for dongulerini kullanarak yaziniz.


const sayi = Number(prompt("Pozitif bir sayı giriniz"));
let asal = true;

if (sayi <= 1){
    alert("sayı 1den buyuk olmalıdır.");
}else{
    for (let i = 2; i < sayi; i++) {
        if(sayi % i === 0){
            asal = false
            break;
        }
        
    }
    const sonuc = asal === true ? "ASALDIR" : "ASAL DEGILDIR";
    console.log(`${sayi} ${sonuc}`);
}



