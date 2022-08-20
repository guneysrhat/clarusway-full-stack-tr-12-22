// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("****** FUNC DECLARATION *********");

//* ORNEK 1:
//******************************************************/

yazdir();

//! Fonksiyonun Tanimlanmasi(declaration)
function yazdir() {
  console.log("nerhaba");
}

yazdir(); //! invoke, call, cagirma
yazdir();

//* ORNEK 2:
//******************************************************/

function selamla(ad, soyad = "") {
  console.log(`Merhaba ${ad} ${soyad}`);
}

selamla("Can", "Yilmaz");
selamla("Canan", "Ozturk");
selamla("Ayse");

//! Bir parametreyi cagirma sirasinda kullanmaz isek onun
//! yerine default parametre atayabiliriz. Ornekteki lastName
//! parametresi icin default değer olarak '' atanmistir.

//* ORNEK 3:
//******************************************************/

function yasHesaplama(isim, dogumTarihi) {
  //   const sonuc = `${isim} in yasi ${2022 - dogumTarihi} dir.`;
  //   const sonuc = `${isim} in yasi ${
  //     new Date().getFullYear() - dogumTarihi
  //   } dir.`;
  //   return sonuc;
  return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi} dir.`;
}

const mesaj1 = yasHesaplama("Elif Can", 1990);

console.log(mesaj1);
console.log(yasHesaplama("Veli Canan", 1980));

//* ORNEK 3:
//******************************************************/
