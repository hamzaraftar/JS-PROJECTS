// This ... is rest operator
function sum(name, ...args) {
  // console.log(`Hello ${name} :`);
  let sum = 0;
  for (let i in arguments) {
    sum += arguments[i];
  }
  console.log(sum + "");
}
sum(23,45,78)
// sum(2, 3);
