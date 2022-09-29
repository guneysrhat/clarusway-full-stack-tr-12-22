//* ======================================================
//*           OOP - Classes and Inheritance (ES6)
//* ======================================================

//? Classes'lar, object (nesne) olsuturmak icin kullanilan sablonlardir.
//? JS'de Class'lar prototipler uzerine insa edilmistir. Ancak, syntax
//? ES5'den farklidir. Aslinda, class keyword'u ilk olarak ES6 da
//? kullanilmistir ancak bu sadece bir syntactical sugar'dir.
//? JavaScript, class-tabanli bir dil degil, prototype-tabanli bir dildir.
//? yaygin kullanim class-tabanli oldugu icin syntax'ini O'na benzetmistir.

//? Bir parent class'in degisken ve fonksiyonelliği extends
//? keyword'u ile child class'a gecmektedir.(INHERITANCE)

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



//?instance
const book2 = new Book("Sinekli Bakkal", "H. Edip Adıvar", 1930);

console.log(book1);
console.log(book1.getAge());
console.log(book1.getSummary());

//? Sub-Class tanimlamasi (Inheritance)

class