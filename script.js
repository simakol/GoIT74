// function foo() {
//   return 5; // явне повернення
// }

// const foo = () => 5; // неявне повернення

//! ===============

//? Example 1 - Коллбек функції
// Напишіть наступні функції:

//* createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id та викликає коллбек передаючи йому створений об'єкт.

//* logProduct(product) - колббек приймаючий об'єкт продукту і логуючий його в консоль

//* logTotalPrice(product) - колббек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль

const products = [
  {
    name: "apple",
    price: 15,
    quantity: 30,
  },
  {
    name: "cherry",
    price: 40,
    quantity: 50,
  },
];

// function createProduct(obj, callback) {
//   const product = { ...obj, id: Date.now() };
//   callback(product);
//   //   callback({ ...obj, id: Date.now() });
// }

// // function declaration
// function logProduct({ name, price, quantity }) {
//   console.log(
//     `Назва продукту: ${name}. Ціна за кілограм: ${price} грн. Кількість на складі: ${quantity} кг.`
//   );
// }

// function logTotalPrice({ name, price, quantity }) {
//   console.log(
//     `Загальна вартість всіх товарів ${name} на складі становить ${
//       price * quantity
//     } грн`
//   );
// }

// createProduct(products[0], logTotalPrice);
// createProduct(products[0], logProduct);

//! ===============

//? Example 2 - Коллбек функції

//* Додайте об'єкт account методи withdraw(amount, onSuccess, onError) та deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий та третій - коллбеки.

//* Метод withdraw викликає onError якщо amount більше TRANSACTION_LIMIT або this.balance, і onSuccess в іншому випадку.

//* Метод deposit викликає onError якщо amount більше TRANSACTION_LIMIT або менше або дорівнює нулю, і onSuccess в іншому випадку.

// const TRANSACTION_LIMIT = 1000;

// const account = {
//   username: "Alex",
//   balance: 1500,
//   withdraw(amount, onSuccess, onError) {
//     /*
//     Знаття коштів:
//         1. чи не перевищує amount наш ліміт
//         2. чи не перевищує amount наш баланс
//     */

//     if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `Ви перевищили ліміт. Поточний ліміт складає ${TRANSACTION_LIMIT} грн`
//       );
//     } else if (amount > this.balance) {
//       onError(
//         `Недостатньо коштів. Поточний баланс складає ${this.balance} грн`
//       );
//     } else {
//       this.balance -= amount;
//       onSuccess(`Успішно знято! Поточний баланс складає ${this.balance} грн`);
//     }
//   },
//   deposit(amount, onSuccess, onError) {
//     if (amount > TRANSACTION_LIMIT) {
//       onError(
//         `Ви перевищили ліміт. Поточний ліміт складає ${TRANSACTION_LIMIT} грн`
//       );
//     } else if (amount <= 0) {
//       onError(
//         `Некоректна кількість. Спробуйте ще раз. Поточний баланс складає ${this.balance} грн`
//       );
//     } else {
//       this.balance += amount;
//       onSuccess(
//         `Успішно зараховано! Поточний баланс складає ${this.balance} грн`
//       );
//     }
//   },
// };

// const onSuccess = (msg) => console.log(`Успішна операція! ${msg}`);
// const onError = (msg) => console.error(`Невдала операція! ${msg}`);

// function onSuccess(msg) {
//   console.log(`Успішна операція! ${msg}`);
// }

// function onError(msg) {
//   console.error(`Невдала операція! ${msg}`);
// }

// account.withdraw(700, onSuccess, onError);
// account.deposit(900, onSuccess, onError);
// account.deposit(1000, onSuccess, onError);
// account.deposit(-10, onSuccess, onError);

//! ===============

//? Example 3 - Коллбек функції + стрілки

//* Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву. Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.

// [1,2,3] -> [2,3,4]
// f (n) => n+1

/*
    1. створити новий масив, куди ми будемо додавати змінені елементи старого
    2. перебір масиву
        2.1. викликати колбек ф-цію на поточному елементі масиву
        2.2. результат колбек ф-ції запушити у новий масив
    3. повернути новий масив
*/

// function each(array, callback) {
//   const newArray = [];
//   //   for (const element of array) {
//   //     newArray.push(callback(element));
//   //     // const newElement = callback(element);
//   //     // newArray.push(newElement);
//   //   }

//   //   array.forEach((element, i, arr) => {
//   //     // console.log(element);
//   //     console.log(arr);
//   //   });
//   array.forEach((element) => newArray.push(callback(element)));

//   return newArray;
// }

// const addOne = (n) => n + 1;
// const pow = (n) => n * n;

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(each(arr, (n) => n + 1));
// console.log(each(arr, pow));

//! ===============

const user1 = {
  name: "Oleg",
  age: 25,
};
const user2 = {
  name: "Alex",
  age: 55,
};
const user3 = {
  name: "Nastya",
  age: 35,
};

function calculateDateOfBirth({ age }) {
  return 2023 - age;
}

const dateOfBirthUser1 = calculateDateOfBirth(user1);
console.log("🚀 ~ dateOfBirthUser1:", dateOfBirthUser1);
const dateOfBirthUser2 = calculateDateOfBirth(user2);
console.log("🚀 ~ dateOfBirthUser2:", dateOfBirthUser2);
const dateOfBirthUser3 = calculateDateOfBirth(user3);
console.log("🚀 ~ dateOfBirthUser3:", dateOfBirthUser3);

const newArray = new Array(10).fill(1);
console.log(newArray);
