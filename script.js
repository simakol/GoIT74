// console.dir(Array);

// const arr = [1, 2, 3];
// const arr2 = [4, 5, 6];

// console.log(arr.map((el) => el * el));
// console.log(arr2.map((el) => el * el));

//! ========================================

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(ancestor.isPrototypeOf(parent));
// console.log(ancestor.hasOwnProperty("surname"));

//! ========================================

// const students = [
//   "Alex Simak",
//   "Olga Tarasenko",
//   "Sergii Colodub",
//   "Danya Vasylchenko",
//   "Inna Zay",
// ];

/* [{
    firstName: "Alex",
    lastName: "Simak",
    group: "GoIT-74"
}]
*/

// const studentsUpd = students.reduce((acc, student) => {
//   const [firstName, lastName] = student.split(" ");
//   const studentObj = {
//     firstName,
//     lastName,
//     group: "GoIT-74",
//   };

//   acc.push(studentObj);
//   return acc;
// }, []);

// console.log(studentsUpd);

// const studentsUpd = students.map((student) => {
//   const [firstName, lastName] = student.split(" ");
//   return {
//     firstName,
//     lastName,
//     group: "GoIT-74",
//   };
// });

// const studentsUpd = students.map((student) => ({
//   firstName: student.split(" ")[0],
//   lastName: student.split(" ")[1],
//   group: "GoIT-74",
// }));

// {
//     const [firstName, lastName] = student.split(" ");
//     return {
//       firstName,
//       lastName,
//       group: "GoIT-74",
//     };
//   });

// console.log(studentsUpd);

//! ========================================

// const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];

// console.log(arr.includes(1));

// function customIncludes(arr, value) {
//   return arr.reduce((status, el) => {
//     if (el === value) status = true;
//     return status;
//   }, false);
// }

// console.log(customIncludes(arr, 5));

//! ========================================

// const arr = [];
// for (let i = 0; i < 5; i += 1) {
//   arr.push(i);
//   debugger;
// }

//! ========================================

// const fruits = [
//   "Banana",
//   "Orange",
//   "Apple",
//   "Orange",
//   "Pear",
//   "Banana",
//   "Apple",
//   "Banana",
// ];

/* 
{ 
Apple: 1, 
Banana: 2, 
Orange: 2, 
Pear: 1 
} 
*/

// const occ = fruits.reduce((acc, fruit) => {
//   //   if (acc.hasOwnProperty(fruit)) {
//   //     acc[fruit] += 1;
//   //   } else {
//   //     acc[fruit] = 1;
//   //   }
//   acc[fruit] = acc.hasOwnProperty(fruit) ? acc[fruit] + 1 : 1;
//   return acc;
// }, {});

// console.log(occ);

//! ========================================

// console.log(Array.prototype);

// Array.prototype.mySuperMethod = function () {
//   console.log(this);
// };

// const arr = [1, 2, 3, 4, 5];
// const arr2 = [5, 5, 5];

// arr.mySuperMethod();
// arr2.mySuperMethod();

//! ========================================

// На минулому занятті, був приклад консоль.лог(this), і ще різні варіанти виводу консолі

// console.log(this);

// function foo() {
//   console.log(this);
// }

// foo();

// foo.call({ msg: "Hello" });

// const doo = () => console.log(this);

// doo();

// doo.call({ msg: "Hello" });

/*
1. контекст визначається на момент виклику ф-ції, а не на момент її створення (крім стрілочних)
2. у стрілочних ф-цій не має свого контексту, тому вона позичає контекст у батьківської області видимості
3. стрілочна ф-ція запамʼятовує контекст на все життя, тобто її неможливо викликати в контексті іншого обʼєкту
4. контекст - це обʼєкт, який викликає ф-цію
*/

//! ========================================

// a - boolean true,  приведить приклад використання функциії у виразі a && function()

// const a = null;

// const isNumberPositive = (n) => n > 0;

// console.log(a && isNumberPositive(5))

//! ========================================

// function convertHasToArray(hash) {
//   return Object.entries(hash).sort();
// }

// function convertHasToArray(hash) {
//   const arr = [];
//   for (const key in hash) {
//     arr.push([key, hash[key]]);
//   }
//   return arr.sort();
// }

// const user = {
//   name: "Jeremy",
//   age: 24,
//   role: "Software Engineer",
//   status: "free",
// };

// console.log(convertHasToArray(user));
// Преобразование хэша в массив.
// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// должны быть преобразованы в
// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Примечание: Выходной массив должен быть отсортирован в алфавитном порядке по имени ключа.
