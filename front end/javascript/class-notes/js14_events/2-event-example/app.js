console.log("**** app.js *******");

//? Selectors
const langInput = document.querySelector(".lang-input");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");
const langList = document.getElementById("lang-list");

const newUl = document.createElement("ul");
langList.appendChild(newUl);

//? addBtn event handler
addBtn.addEventListener("click", () => {
  if (!langInput.value) {
    alert("Please enter a language");
  } else {
    newUl.innerHTML += `<li>${langInput.value}</li>`;
    langInput.value = "";
  }
  langInput.focus();
});

//?deleteBtn event handler
deleteBtn.addEventListener("click", () => {
  newUl.childElementCount > 0
    ? newUl.removeChild(newUl.lastElementChild)
    : alert("There is no item to delete");
  newUl.removeChild(newUl.lastElementChild);
});

//? onLoad event handler
window.addEventListener("load", () => {
  langInput.focus();
});
