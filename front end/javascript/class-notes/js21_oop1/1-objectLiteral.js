//* ======================================================
//*                     (OOPS)
//* ======================================================

//* Object Literals
console.log("**** Object Literals ****");

const book1 = {
  title: "The Kramazov Brothers",
  author: "Dostoevski",
  year: 1880,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1);
console.log(book1.hasOwnProperty("author")); //?true
console.log(book1.getSummary());
//! object nesnesinden miras yoluyla geldi.

const book2 = {
  title: "The Lily of the valley",
  author: "Honero de Balzac",
  year: 1888,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book2);
console.log(book2.getSummary());


