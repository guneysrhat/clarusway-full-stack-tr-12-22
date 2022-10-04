class Trainee {
  static #id = 4000;
  #email;
  constructor(name, email, path) {
    this.name = name;
    this.#email = email;
    this.path = path;
    this.stNumber = "F - " + Trainee.#id;
    Trainee.id++;
  }
  skills() {
    return "IT dunyasinda calisabilir";
  }
  getSummary() {
    return this.stNumber + " " + this.name;
  }
  getMail() {
    return this.email;
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
    return this.name + " " + title + "calisabilir";
  }
}

const fs1 = new FS("ahmet", "ahmet@gamil.com", "Full-Stack", "Front-End");
console.log(fs1.skills("front-end deceloper"));
node "D:\Users\guney\OneDrive\Masaüstü\clarusway\clarusway-full-stack-tr-12-22\front_end\javascript\codding-class\ch-12-8\app.js"