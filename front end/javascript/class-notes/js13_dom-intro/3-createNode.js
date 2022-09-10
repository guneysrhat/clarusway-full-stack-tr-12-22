console.log("**** CREATE NODE ****");

//?Yeni bir P elementi olusturalim
const newP = document.createElement("p");
newP.id = "new-par";
newP.setAttribute("class", "new-class");
const text = document.createTextNode("this is a new p element");
newP.appendChild(text);
console.log(newP);

const h2 = document.querySelector(".item-list h2");
h2.after(newP);
