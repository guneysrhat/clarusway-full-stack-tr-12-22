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

function selamla(ad, soyad) {
  console.log(`Merhaba ${ad} ${soyad}`);
}

selamla("Can", "Yilmaz");
selamla("Canan", "Ozturk");
