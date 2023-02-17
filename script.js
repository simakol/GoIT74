// var, let, const

// TDZ - es6
// console.log(b)
// console.log(a)
// let a = 5;
// const b = 1;

// if (true) {
//   console.log(a);
//   let c = 5;
// }

// console.log(c)

//=====
// var c = undefined;

// console.log(c);
// var c = 2;
// console.log(c);

//hoisting - підняття змінної

// if (true) {
//   var c = 5;
// }

// console.log(c);

// for (let i = 1; i <= 10; i += 1) {
//   console.log(i);
// }

// console.log(i);

// function foo() {
//   var a = 5;
// }

// foo();
// console.log(a);

// const/let - блочна область видимості
// var - фунціональна

//! =================================

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// //? Отримати масив об'єктів користувачів за кольором очей (eyeColor).

// function getUsersByColor(users, eyesColor) {
//   /*
//         1. створити масив, куди ми будемо складати юзерів
//         2. перебрати масив
//         3. перевірка(if) чи співпадає поле eyeColor у обʼєкта з параметром eyesColor
//         4. додати цей обʼєкт до масиву
//         5. повернути масив
//     */
//   const result = [];
//   for (const userObj of users) {
//     if (userObj.eyeColor === eyesColor) {
//         result.push(userObj);
//     }
//   }
//   return result;
// }

// console.log(getUsersByColor(users, "brown"));
// console.log(getUsersByColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Car

//! =================================

// const arr = ["Hello", "world!", "I", "love", "JS"];

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(typeof i);
//   console.log("Index: ", i);
//   console.log("Elem: ", arr[i]);
// }
// console.log("==========");

// for (const i in arr) {
//   //перебирає індекси
//   console.log(typeof i);
//   console.log("Index: ", i);
//   console.log("Elem: ", arr[i]);
// }

// console.log("==========");

// for (const text of arr) {
//   // перебирає значення
//   console.log("Elem: ", text);
// }

//! =================================

// const user = {
//   id: "e1bf46ab-7168-491e-925e-f01e21394812",
//   name: "Sheree Anthony",
//   email: "shereeanthony@kog.com",
//   eyeColor: "brown",
//   friends: ["Goldie Gentry", "Briana Decker"],
//   isActive: true,
//   balance: 2764,
//   skills: ["lorem", "veniam", "culpa"],
//   gender: "female",
//   age: 39,
// };

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// for (const key in user) {
//   console.log(key);
//   console.log(user[key]);
// }

//! =================================

// function sayHI({ name, msg }) {
//   console.log(`Hi, ${name}. ${msg}`);
// }

// sayHI({
//   msg: "I love JS",
//   name: "Alex",
// });

//! =================================

// Чи можна переробити цей код, але з циклом for of?

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

//   updatePotionName(oldName, newName) {
//     for (const potionObj of this.potions) {
//       if (potionObj.name === oldName) {
//         potionObj.name = newName;
//         return `Success! ${oldName} has been renamed!`;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// console.log(atTheOldToad);
// console.log(atTheOldToad.updatePotionName("dsfgfdfgdf", "111"));
// console.log(atTheOldToad);

//! =================================

// function count(countFrom = 0, countTo = 10, step = 1) {
//   console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

//   for (let i = countFrom; i <= countTo; i += step) {
//     console.log(i);
//   }
// }

// count();

// count(1, 5); // countFrom = 1, countTo = 5, step = 1
// count(2); // countFrom = 2, countTo = 10, step = 1
// count(); // countFrom = 0, countTo = 10, step = 1

//! =================================

// const age = Number(prompt("Enter your age: "));

// if (age <= 0) {
//   alert("Некоректно введений вік!");
// } else if (age <= 18) {
//   alert("Вам заборонено користуватись нашим сайтом!");
// } else if (age > 18 && age <= 80) {
//   alert("Раді вас бачити!");
// } else if (age > 80) {
//   alert("Діду йди спати!");
// } else {
//   alert("Щось пішло не так");
// }

//! =================================

//this - невідомий на момент написання функції(методу). своє значення this отримує під час виклику фукції. значення this - обʼєкт який викликає функцію

// const user = {
//   name: "Alex",
//   favouritePL: "JS",
//   sayHi() {
//     const { name, favouritePL } = this;
//     // const name = this.name
//     console.log(
//       `Hello! My name is ${name}. My favourite programming language is ${favouritePL}`
//     );
//   },
// };

// user.sayHi();
