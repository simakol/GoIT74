// const elem = document.querySelector("div");

// elem.addEventListener("click", (event) => {
//   // console.log(event);
//   // console.log(event.currentTarget);
//   console.log(event.target);
// });

/*
<div style="background-color: red;"><button><span>this is button</span></button></div>
*/

// const allElems = document.querySelectorAll("*");

// for (const elem of allElems) {
//   elem.addEventListener(
//     "click",
//     (event) => {
//       alert(`Занурення: ${elem.tagName}`);
//       // console.log(event.currentTarget);
//     },
//     true
//   );

//   elem.addEventListener("click", (event) => {
//     alert(`Всплиття: ${elem.tagName}`);
//     // console.log(event.currentTarget);
//   });
// }

/*
* event.target - цільовий елемент, на якому відбулася подія

* event.currentTarget - це елемент, на якому висить обробник подій
*/

//! =============================================

// Створити калькулятор вартості продукту в залежності від ціни. При роботі з подіями використовувати делагування.

// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.

// Кольорова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.

// обʼєкт, у якому будемо зберігати значення полів з форми та рахувати фінальну вартість
const data = {
  price: 0,
  quantity: 0,
  calcTotalPrice() {
    return (this.price * this.quantity).toFixed(2);
  },
};

//dom links
const form = document.getElementById("form");
const total = document.getElementById("total");
const amount = document.getElementById("amount");

dataFill();
update();

//events
form.addEventListener("input", handleFormChange);

//functions
function handleFormChange({ target }) {
  const { value } = target;

  // if (target === form.elements.quantity) {
  //   amount.textContent = value;
  // }

  target.setAttribute("value", value);
  dataFill();
  update();
}

//* наповнює обʼєкт data значеннями з атрибутів value у елементів форм
function dataFill() {
  data.price = form.elements.price.getAttribute("value");
  data.quantity = form.elements.quantity.getAttribute("value");
}

//* оновлює інтерфейс калькулятора (показує вартість та оновлює amount)
function update() {
  total.textContent = data.calcTotalPrice() + " грн";
  amount.textContent = data.quantity;
}
