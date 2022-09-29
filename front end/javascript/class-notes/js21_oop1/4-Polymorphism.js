//* ======================================================
//*        OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding gibi alt kavramlar
//* ile bilinir.


class Book {
    constructor(title, author, year) {
      this.author = author;
      this.title = title;
      this.year = year;
  
      //? bu alana yazilan bur metot butun instance`larin belleginde tek tek yer kaplar
      this.getTitle = function () {
        return this.title;
      };
    }
  
    //! bu kisimda yazilan fonksiyonlar aslinda prototype alaninda bulunur
    getAge() {
      return new Date().getFullYear() - this.year;
    }
  
    getSummary() {
      return `${this.title} was writtten by ${this.author} in ${this.year}`;
    }
  }