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

//? Sub-Class tanimlamasi (Inheritance)

class Magazine extends Book {
  constructor(title, author, year, month) {
    //! Book'un constructor'i cagrildi
    super(title, author, year); //! Book'un prototpye kopyalanmis
    this.month = month;
  }

  //! Overrided Metot (Parent class'daki bir metodun farkli
  //! fonksiyonellikle fakat ayni isimle tanimlanmasi)
  getSummary() {
    return `${this.title} was writtten by ${this.author} in ${this.year} in ${this.month}`;
  }

  getSummaryParent() {
    return super.getSummary();
  }
}

//? Magazine objesinin yeni bir instance
const mag1 = new Magazine("Scientific Research", "Einstein", 1926, "Sep");
console.log(mag1.getSummary());
console.log(mag1.getSummaryParent());
