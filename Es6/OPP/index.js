class student {
  //constructor is keywork
  constructor(name) {
    this.name = name;
    console.log("constructor function ");
  }
  hello() {
    console.log(`hello ${this.name}`);
  }
}
let a = new student("hamza");
a.hello()