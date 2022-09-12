//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
//? 3. Method
const h1 = document.querySelector("#header h1");
h1.onmouseover = function () {
  h1.style.color = "red";
  h1.style.fontWeight = "300";
};
h1.onmouseout = () => {
  h1.style.color = "black";
  h1.style.fontWeight = "900";
};

//? 4.Method (addElementListener)
h1.addEventListener("click", () => {
  alert("h1 pressed");
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------

document.getElementById("btn").addEventListener("click", function () {
  const input = document.querySelector("#input");
  //   if (!input.value) {
  //     alert("Please enter an items");
  //   } else {
  //     alert(`${input.value} entered`);
  //   }

  !input.value
    ? alert("Please enter an items")
    : alert(`${input.value} entered`);

  input.value = "";
});

//* EXAMPLE-2
//* -------------------------------------------------
const list = document.querySelectorAll(".list"); //?nodelist

list.forEach((li) => {
  li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transition = "0.5s";
  };

  li.onmouseout = () => {
    li.style.fontSize = "1rem";
    li.style.transition = "0.5s";
  };
});

const print = () => {
  console.log("Starting");
};

print();
