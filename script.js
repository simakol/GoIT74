//* Example 1 - Блогер
// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

//? email - пошта, рядок
//? age - вік, число
//? numberOfPosts - кількість постів, число
//? topics - масив тем на яких спеціалізується блогер

//? Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

//? Додай метод getInfo(), який, повертає рядок: Blogger ${пошта} is ${вік} years old and has ${кількість постів} posts.

//? Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// функція конструктор
// class Blogger {
//   constructor({ name, age, numberOfPosts, topics }) {
//     this.name = name;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `Blogger ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const mango = new Blogger({
//   name: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// /*
// 1. new -> {}
// 2. {} -> this у класу Blogger
// */

// console.log(mango);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(7);
// console.log(mango.getInfo()); // Blogger mango@mail.com is 24 years old and has 25 posts

// const poly = new Blogger({
//   name: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // Blogger poly@mail.com is 19 years old and has 21 posts

//! =======================================

// class User {
//   static STATUS = {
//     admin: "ADMIN",
//     user: "USER",
//   };

//   static sayHello() {
//     console.log("Hey, I'm static method");
//   }

//   #private;

//   constructor({ name, status }) {
//     this.name = name;
//     this.status = status;
//     this.#private = "This is a private field";
//     this._protected = "I'm protected";
//   }

//   // getPrivate() {
//   //   return this.#private;
//   // }

//   // setPrivate(newValue) {
//   //   if (newValue === "foo") return;
//   //   this.#private = newValue;
//   // }

//   get pr() {
//     return this.#private;
//   }

//   set pr(newValue) {
//     if (newValue === "foo") return;
//     this.#private = newValue;
//   }
// }

// // console.dir(User.#STATUS)

// const admin = new User({ name: "Alex", status: User.STATUS.admin });
// console.log(admin);
// // const user = new User({ name: "Oleg", status: User.STATUS.user });
// // console.log("🚀 ~ admin:", admin);
// // console.log("🚀 ~ user:", user);

// // console.log(admin.getPrivate());
// // admin.setPrivate("boo");
// // console.log(admin.getPrivate());
// // console.log(admin);
// // console.log(admin.pr);
// // admin.pr = "foo"
// // console.log(admin.pr);

//! =======================================

// class Rectangle {
//   constructor({ height, width }) {
//     this.name = "Rectangle";
//     this.height = height;
//     this.width = width;
//   }

//   calculateArea() {
//     return this.height * this.width;
//   }

//   sayHello() {
//     console.log(`Hello, I'm ${this.name}. My Area is ${this.calculateArea()}`);
//   }
// }

// class Square extends Rectangle {
//   constructor(length) {
//     super({ height: length, width: length });
//     this.name = "Square";
//   }
// }

// const rectangle = new Rectangle({ height: 5, width: 10 });
// const square = new Square(5);
// rectangle.sayHello();
// square.sayHello();

//! =======================================

// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// class ContentEditor extends User {
//   // Тело класса ContentEditor
// }

// const editor = new ContentEditor("mango@mail.com");
// console.log(editor); // { email: "mango@mail.com" }
// console.log(editor.email); // "mango@mail.com"


// 18 - 13
// console.log(018 - 015); //Почему будет 5?
// console.log("This is a string." instanceof String); //Почему будет false?

const str = "This is a string.";
const str2 = new String("This is a string.");
console.log(str instanceof String);
console.log(str2 instanceof String);

console.log(str);
console.log(str2);

console.log(8 instanceof Number);
console.log(new Number(8) instanceof Number);
