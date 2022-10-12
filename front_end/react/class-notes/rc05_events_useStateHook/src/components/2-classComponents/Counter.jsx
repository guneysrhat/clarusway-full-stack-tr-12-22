//* ============================ CLASS COMPONENTS AND STATE ============================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================================

const Counter = () => {
  return <div>Counter</div>;
};

export default Counter;
