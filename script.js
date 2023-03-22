// const otuputScrollStandart = document.getElementById("otuputScrollStandart");
// const otuputScrollThrottled = document.getElementById("otuputScrollThrottled");

// const scrollCounter = {
//   standart: 0,
//   throttle: 0,
// };

// document.addEventListener("scroll", handleStandartScroll);

// document.addEventListener(
//   "scroll",
//   _.throttle(() => {
//     scrollCounter.throttle += 1;
//     otuputScrollThrottled.textContent = scrollCounter.throttle;
//   }, 500)
// );

// function handleStandartScroll() {
//   scrollCounter.standart += 1;
//   otuputScrollStandart.textContent = scrollCounter.standart;
// }

// const otuputResizeStandart = document.getElementById("otuputResizeStandart");
// const otuputResizeThrottled = document.getElementById("otuputResizeThrottled");

// const resizeCounter = {
//   standart: 0,
//   throttle: 0,
// };

// window.addEventListener("resize", handleStandartResize);

// window.addEventListener(
//   "resize",
//   _.throttle(() => {
//     resizeCounter.throttle += 1;
//     otuputResizeThrottled.textContent = resizeCounter.throttle;
//   }, 500)
// );

// function handleStandartResize() {
//   resizeCounter.standart += 1;
//   otuputResizeStandart.textContent = resizeCounter.standart;
// }

//! ==============================

// const nameInput = document.getElementById("nameInput");

// nameInput.addEventListener(
//   "input",
//   _.debounce(() => console.log(nameInput.value), 1000, {
//     leading: true, // на початку
//     trailing: false, // у кінці
//   })
// );

//! ==============================

// const signInForm = document.getElementById("signInForm");
// const loginInput = document.getElementById("loginInput");
// const passwordInput = document.getElementById("passwordInput");

// const classes = {
//   correct: "correct",
//   wrong: "wrong",
// };

// signInForm.addEventListener(
//   "input",
//   _.debounce(({ target }) => {
//     const inputLength = target.value.trim().length;

//     if (inputLength === 0) {
//       target.classList.remove(classes.correct);
//       target.classList.remove(classes.wrong);
//     } else if (inputLength >= 5 && inputLength <= 10) {
//       target.classList.add(classes.correct);
//       target.classList.remove(classes.wrong);
//     } else {
//       target.classList.add(classes.wrong);
//       target.classList.remove(classes.correct);
//     }

//     // inputLength >= 5 && inputLength <= 10
//     //   ? (target.className = classes.correct)
//     //   : (target.className = classes.wrong);
//   }, 1000)
// );

//! ==============================
