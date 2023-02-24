const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

//? Example 1 - Метод map
// Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів.

// const getModels = (cars) => cars.map((car) => car.model);

// console.table(getModels(cars));

//? Example 2 - Метод map
// Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним значенням властивості price залежно від переданої знижки.

// const makeCarsWithDiscount = (cars, discount) =>
//   cars.map((car) => ({ ...car, price: car.price * (1 - discount) }));

// console.table(makeCarsWithDiscount(cars, 0.2));
// console.table(makeCarsWithDiscount(cars, 0.4));

//? Example 5 - Метод filter
// Нехай функція getCarsWithType повертає масив автомобілів тип яких збігається зі значенням параметра type.

// const getCarsWithType = (cars, type) => cars.filter((car) => car.type === type);

// console.table(getCarsWithType(cars, "suv"));
// console.table(getCarsWithType(cars, "sedan"));

//? Example 6 - Метод find

// const getCarByModel = (cars, model) => cars.find((car) => car.model === model);

// console.table(getCarByModel(cars, "F-150"));
// console.table(getCarByModel(cars, "CX-9"));

//? Example 7 - Метод sort
// Нехай функція sortByAscendingAmount повертає новий масив автомобілів відсортований за зростанням значення властивості amount.

// const sortByAscendingAmount = cars => [...cars].sort((a, b) => a.amount - b.amount);

// console.table(sortByAscendingAmount(cars));

//! ====
// const arr = [1, 5, 2, 22, 11, 38, 65, 34];

// arr.sort((a, b) => a - b); // зростання
// console.log(arr);

// arr.sort((a, b) => b - a); // спадання
// console.log(arr);
//! ====

//? Example 8 - Метод sort
// Нехай функція sortByDescendingPrice повертає новий масив автомобілів відсортований за зменшенням значення властивості price.

// const sortByDescendingPrice = cars => [...cars].sort((a, b) => b.price - a.price);

// console.table(sortByDescendingPrice(cars));

//? Example 9 - Метод sort
// Нехай функція sortByModel повертає новий масив автомобілів відсортований за назвою моделі в алфавітному та зворотному алфавітному порядку, в залежності від значення параметра order.

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) => {
//     switch (order) {
//       case "asc":
//         return a.model.localeCompare(b.model);
//       case "desc":
//         return b.model.localeCompare(a.model);
//     }
//   });

// const sortByModel = (cars, order) =>
//   [...cars].sort((a, b) =>
//     order === "asc"
//       ? a.model.localeCompare(b.model)
//       : b.model.localeCompare(a.model)
//   );

// console.table(sortByModel(cars, "asc"));
// console.table(sortByModel(cars, "desc"));

//? Example 10 - Метод reduce
// Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount).

// const getTotalAmount = (cars) =>
//   cars.reduce((total, { amount }) => total + amount, 0);

// console.log(getTotalAmount(cars));

//!======
// const arr = [1, 5, 3, 7, 3, 4, 7, 4, 2, 235, 84, 3];

// const sum = arr.reduce((acc, number) => acc + number, 0);

// console.log(sum);

/*

with inital acc
*1.
arr.reduce((acc = 0, number = 1) => 0 + 1 = 1, 0);

*2. 
arr.reduce((acc = 1, number = 5) => 1 + 5 = 6, 0);

*3.
arr.reduce((acc = 6, number = 3) => 6 + 3 = 9, 0);

*4.
arr.reduce((acc = 9, number = 7) => 9 + 7 = 16, 0);


*/

/*
without inital acc

*1. -----------

*2. arr.reduce((acc = 1, number = 5) => 1 + 5);

*3. arr.reduce((acc = 6, number = 3) => 6 + 3 = 9);

*4. arr.reduce((acc = 9, number = 7) => 9 + 7 = 16);
*/

//!======

//? Example 11 - Ланцюжки методів
// Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, які зараз на розпродажі.

// const getModelsOnSale = (cars) =>
//   cars.filter(({ onSale }) => onSale).map(({ model }) => model);

//cars.filter((car) => car.onSale === true);

// console.table(getModelsOnSale(cars));

//? Example 12 - Ланцюжки методів
// Нехай функція getSortedCarsOnSale повертає масив автомобілів на розпродажі (Властивість onSale), відсортованих за зростанням ціни.

// const getSortedCarsOnSale = (cars) =>
// cars.filter(({ onSale }) => onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

//!========================

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: [
      "Jacklyn Lucas",
      "Linda Chapman",
      "Adrian Cross",
      "Solomon Fokes",
    ],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

const getSortedFriends = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort();
};

console.log(getSortedFriends(users));

//['Sharron Pace', 'Briana Decker', 'Sharron Pace', 'Goldie Gentry', 'Aisha Tran', 'Goldie Gentry', 'Briana Decker', 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner', 'Jordan Sampson', 'Eddie Strong', 'Adrian Cross', 'Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes']

/*

*1.
.filter((friend = 'Sharron Pace', index = 0, array) => array.indexOf('Sharron Pace') === index)
`
0 === 0 -> true -> попадає в новий масив

*2.
.filter((friend = 'Briana Decker', index = 1, array) => array.indexOf('Briana Decker') === index)

1 === 1 -> true -> попадає в новий масив

*3.
.filter((friend = 'Sharron Pace', index = 2, array) => array.indexOf('Sharron Pace') === index)

0 === 2 -> false -> не попадає в новий масив


*/
