// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.

//? Ayrinti icin : https://reactjs.org/docs/events.html

const Events = () => {
  let message = "EVENT BASED PROGRAM";

  const handleClick = () => {
    alert("Btn Clicked");
  };
  const handleClear = (msg) => {
    alert(msg);
  };

  const handleChange = (e) => {
    console.log(e.target);
    message = "REACT";
    console.log(message);
  };

  return (
    <div className="container text-center mt-4">
      <h1>{message}</h1>
      <button onClick={handleClick} className="btn btn-success">
        Click
      </button>

      {/* Eger bir event fonksiyonunun paremetresi olmasi gerekiyorsa
        bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi
        takdirde event fonksiyonu event gerceklesmeden cagirilir */}
      <button
        onClick={() => handleClear("Clear Btn Clicked")}
        className="btn btn-dark"
      >
        Clear
      </button>

      <button onClick={handleChange} className="btn btn-danger">
        Change
      </button>
      {/* <button onClick={(e) => handleChange(e)} className="btn btn-danger">
          Change
        </button> */}
    </div>
  );
};

export default Events;

//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.
