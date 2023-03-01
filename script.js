//* Example 1 - Майстерня коштовностей
// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.
/*
const chopShop = {
  stones: [
    { name: "Emerald", price: 1300, quantity: 4 },
    { name: "Diamond", price: 2700, quantity: 3 },
    { name: "Sapphire", price: 1400, quantity: 7 },
    { name: "Ruby", price: 800, quantity: 2 },
  ],
  calcTotalPrice(stoneName) {
    const currentStone = this.stones.find(({ name }) => stoneName === name);

    return currentStone.price * currentStone.quantity;
  },
};

console.log(chopShop.calcTotalPrice("Emerald")); // 5200
console.log(chopShop.calcTotalPrice("Diamond")); // 8100
console.log(chopShop.calcTotalPrice("Sapphire")); // 9800
console.log(chopShop.calcTotalPrice("Ruby")); // 1600


//! 1. Контекст(this) у фунції визначається на момент її виклику, а не на момент створення
//! 2. Контекстом функції буде обʼєкт, який її викликав
*/

//! ==============================

//* Example 2 - Телефонна книга
// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//   contacts: [],
//   add(contact) {
//     //this всередині методу add буде phonebook
//     const newContact = {
//       list: "default",
//       ...contact,
//       id: this.generateId(),
//       createdAt: this.getDate(),
//     };
//     this.contacts.push(newContact);

//     return this.contacts;
//   },
//   generateId() {
//     return "_" + Math.random().toString(36).substr(2, 9);
//   },
//   getDate() {
//     return Date.now();
//   },
// };

// console.log(
//   phonebook.add({
//     name: "Mango",
//     email: "mango@mail.com",
//     list: "friends",
//   })
// );
// console.log(
//   phonebook.add({
//     name: "Poly",
//     email: "poly@hotmail.com",
//   })
// );

//! ==============================

//* Example 3 - Калькулятор
// Створіть об'єкт calculator з трьома методами:

//? read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.

//? add() - повертає суму збережених значень.

//? mult() - перемножує збережені значення та повертає результат.

/*

const calculator = {
  a: 0,
  b: 0,
  read(a = 0, b = 0) {
    this.a = a;
    this.b = b;

    return this;
  },
  add() {
    return this.a + this.b;
  },
  mult() {
    return this.a * this.b;
  },
};

// calculator.read(5, 10);
// console.log(calculator);

// console.log(calculator.add()); // 15
// console.log(calculator.mult()); // 50

console.log(calculator.read(-5, -2).mult());
console.log(calculator.add());
*/

/*
1. calculator.read(7, 4) -> return calculator = {
  a: 7,
  b: 4,
  read()...
}
2. calculator.mult() -> 28


*/

// console.log(calculator.add()); // 15
// console.log(calculator.mult()); // 50

// [4, 1, 5, 2].filter(...).sort(...)
// [4, 2].sort(...)
// [2, 4]

//! ==============================

/*
const customer = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeMessage(callback) {
  console.log(`Обробляємо заявку від ${callback.call(customer)}.`);
}

makeMessage(customer.getFullName);

//! при передачі ф-ції в якості колбеку, її контекст не зберігається
//! для привʼязки контексту використувуються методи call, apply і bind
//! сall/apply - викликають ф-цію на місці і вказують їй контекст (1 аргумент)
//! bind - звʼязує, робить копію ф-ції і вказує контекст (використовуйте при передачі ф-ції в якості колбеку)

// makeMessage(customer.getFullName.bind(customer));
// const user = {
//   firstName: "Oleg",
//   lastName: "Bond",
// };
// makeMessage(customer.getFullName.bind(user));

// call, apply - викликають ф-цію на місці
// bind - робить копію ф-ції

*/

// "use strict";

// function globalFunc() {
//   console.log(this);
// }

// const globalArrowFunc = () => {
//   console.log(this);
// };

// //! стрілочна ф-ція бере контекст з батьківської області видимості і запамʼятовує цей контекст до кінця роботи скрипта
// console.log(this); // ?
// globalFunc(); // ?
// globalArrowFunc(); // ?

// "use strict";

// console.log(this);

// function foo() {
//   console.log(this);
// }

// foo();

/*
const obj = {
  name: "Alex",
  sayHello: () => {
    console.log(this);
    console.log(this.name);
  },
};

const obj2 = {
  obj,
};

console.log(obj2);
console.log(obj2.obj.sayHello());
*/