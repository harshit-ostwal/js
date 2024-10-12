//Variables

//1. Var -> Global Scope

console.log(age);
var age = 30;
console.log(age);
age = "Harshit Jain";
console.log(age);

var num1 = 10;
var num2 = 20;
console.log(num1 + num2);

if (true) {
  var num3 = 30;
}
console.log(num3);
num3 = 120;
console.log(num3);

//2. Let -> Local Scope
let a = 20;
console.log(a);

if (true) {
  let b = 30;

  // It Can Be Accessed Coz It's In The Same Block

  console.log(b);
}
// Not Possible Coz Let is an Local Variable & It Can't Be Accessed & It's Not In The Same Block
console.log(b);

//4. Const -> Local Scope

const number = 123;
console.log(number);

// It Can't Be Changed Coz It Is Immutable DataType
number = 32;
console.log(number);
console.log(number + 100);