class Trainee {
  static #id = 4000;
  #email;
  constructor(name, email, path) {
    this.name = name;
    this.#email = email;
    this.path = path;
    this.stNumber = "F - " + Trainee.#id;
    Trainee.#id++;
  }
  skills() {
    return "IT dünyasında çalışabilir";
  }
  getSummary() {
    return this.stNumber + " " + this.name;
  }
  getMail() {
    return this.#email;
  }
  setMail(email) {
    this.#email = email;
  }
}

class FS extends Trainee {
  constructor(name, email, path, title) {
    super(name, email, path);
    this.title = title;
  }

  //! OverLoading
  skills(title) {
    return this.name + " " + title + " çalışabilir";
  }
}

class DS extends Trainee {
  constructor(name, email, path, title) {
    super(name, email, path);
    this.title = title;
  }

  //! Overwriting
  skills() {
    return this.name + " Data-sientist olarak çalışabilir";
  }
}

// const fs1 = new FS("ahmet", "ahmet@ahmet.com", "Full-Stack", "Front-end");
// console.log(fs1.skills("front-end developer"));
// const tr1 = new Trainee("veli", "veli@veli", "Data-sience");
// console.log(tr1.skills());
// const ds1 = new DS("ali", "ali@ali", "Data-sience", "data sientist");
// console.log(ds1.skills());
// console.log(ds1.getMail());
// console.log(ds1.name);

// console.log(ds1.getSummary());
// console.log(fs1.getSummary());
// console.log(tr1.getSummary());

const btn = document.querySelector(".btn");
const nameInput = document.querySelector("#name");
const mail = document.querySelector("#mail");
const path = document.querySelector("#path");

btn.addEventListener("click", () => {
  if (path.value == "fs") {
    const fsTrainee = new FS(
      nameInput.value,
      mail.value,
      path.value,
      "front-end"
    );
    console.log(fsTrainee.getSummary());
    console.log(fsTrainee.title);
  } else if (path.value == "ds") {
    const dsTrainee = new DS(
      nameInput.value,
      mail.value,
      path.value,
      "data-sience"
    );
    console.log(dsTrainee.title);
  }
});
