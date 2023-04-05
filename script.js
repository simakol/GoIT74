/*
1. event loop
2. macro(setTimeout, events - big tasks) & micro(Promises) tasks, queue
3. practice promises
*/

// document
//   .getElementById("btn")
//   .addEventListener("click", () => console.log("Hello!"));

// let k = 0;

// function count() {
//   // for (let i = 0; i < 1e9; i += 1) {
//   //   k+=1;
//   // }

//   // alert("Функція виконалась");

//   do {
//     k += 1;
//   } while (k % 1e3 !== 0);

//   if (k === 1e6) {
//     alert("Функція виконалась");
//   } else {
//     setTimeout(count);
//   }
// }

// count();

// console.log("A");

// function boo() {
//   console.log("B");
//   foo();
// }

// function foo() {
//   console.log("D");
// }

// console.log("C");

// boo();

// console.log("A");

// setTimeout(() => console.log("B"), 3000);

// console.log("C");

//! ====
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// const promise = new Promise((res) => res("C"));

// promise.then((value) => setTimeout(() => console.log(value), 0));

// console.log("D");

//! ====

// setTimeout(function timeout() {
//   console.log("A");
// }, 0);

// let p = new Promise(function (resolve, reject) {
//   console.log("B");
//   resolve();
// });

// p.then(function () {
//   console.log("C");
// });

// console.log("D");

//! =====

// console.log("Request data...");

// setTimeout(() => {
//   console.log("Preparing data...");
//   const user = {
//     id: 0,
//     name: "Oleg",
//     age: 36,
//     status: true,
//   };
//   setTimeout(() => {
//     user.status = false;
//     console.log("Data received: ", user);
//   }, 1000);
// }, 2000);

//!====

// console.log("Request data...");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const user = {
//       // id: 0,
//       name: "Oleg",
//       age: 36,
//       status: true,
//     };
//     if (user.id === undefined) reject(new Error("No id!"));
//     resolve(user);
//   }, 2000);
// });

// promise
//   .then((data) => {
//     setTimeout(() => {
//       data.status = false;
//       console.log("Data received: ", data);
//     }, 1000);
//   })
//   .catch((err) => {
//     console.error(err.message);
//   });

//! =====

// console.log("Request data...");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Preparing data...");
//     const user = {
//       id: 0,
//       name: "Oleg",
//       age: 36,
//       status: true,
//     };
//     if (user.id === undefined) reject(new Error("No id!"));
//     resolve(user);
//   }, 2000);
// });

// promise
//   .then((data) => {
//     return new Promise((resolve) => {
//       data.status = false;
//       resolve(data);
//     });
//   })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.error(err.message);
//   })
//   .finally(() => {
//     console.log("THE END!");
//   });

//! =====

const sleep = (ms) =>
  new Promise((res, rej) =>
    setTimeout(() => {
      if (ms === 3000) rej(new Error(ms));
      res(ms);
    }, ms)
  );

// sleep(2000).then(() => console.log("проміс виконався через 2с"));
// sleep(1000).then(() => console.log("проміс виконався через 1с"));

// Promise.all([sleep(2000), sleep(3000), sleep(1000)])
//   .then((data) => {
//     console.log("all promises");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.race([sleep(2000), sleep(3000), sleep(1000)])
//   .then((data) => {
//     console.log("race promises");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//!====

// console.log("start");
// const promise1 = Promise.resolve().then(() => {
//   console.log("promise1");
//   setTimeout(() => {
//     console.log("timer2");
//   }, 0);
// });
// const timer1 = setTimeout(() => {
//   console.log("timer1");
//   Promise.resolve().then(() => {
//     console.log("promise2");
//   });
// }, 0);
// console.log("end");
