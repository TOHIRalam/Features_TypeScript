// Normal function
let logs = function(message : string) {
  console.log(message);
}

let sum = function(a : number, b : number) {
  return a + b;
}
console.log(sum(1, 2));

let doSomething = function() {
  return 10;
}

// Arrow function

let logs2 = (message : string) => console.log(message)
let sum2 = (a : number, b : number) => a + b;
console.log(sum2(1, 2));
let doSomething2 = () => 10;