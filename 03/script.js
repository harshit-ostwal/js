//DataTypes

//Numbers
let num = 3.14;
let num2 = 10;
console.log(num + num2);

//Strings
const firstName = "Harshit Jain"; //U Can Use Double Quotes/Single Quotes
console.log(firstName);
//or
const lastName = "Harshit Jain";
console.log(lastName);
console.log(firstName + "  " + lastName);
//or
console.log(firstName + " " + lastName);

//Boolean
let isAdmin = true;
console.log(isAdmin);
//or
let isAdmin2 = false;
console.log(isAdmin2);

//NULL
let lastLoginDate = null;
console.log(lastLoginDate);
lastLoginDate = 10;
console.log(lastLoginDate);

//Undefiend
let lastLoginDate2;
console.log(lastLoginDate2);
//or
let lastLoginDate3 = undefined;
console.log(lastLoginDate3);

//Objects
const person = {
  firstName: "Harshit",
  lastName: "Jain",
  age: 20,
  isAdmin: true,
  lastLoginDate: null,
};
console.log(person);
console.log(person.firstName);

//Operators
let num3 = 10;
let num4 = 20;
console.log(num3 + num4);
console.log(num3 - num4);
console.log(num3 * num4);
console.log(num3 / num4);
console.log(num3 % num4);

//TypeOf
console.log(typeof num3);
console.log(typeof isAdmin);