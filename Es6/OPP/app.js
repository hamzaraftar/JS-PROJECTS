class fruites {
  constructor(name) {
    this.name = name;
    console.log("constructor for fruites");
  }
}
// extends is keyword that is use to Inheritance
class apple extends fruites {
  info() {
    console.log(`hi my name is  ${this.name}`);
  }
}
let a = new apple();
