// document.addEventListener("keydown", (event) :> {
//   console.log("KeyCode", event.keyCode);
//   console.log("key", event.key);
//   console.log("code", event.code);
//   console.log(event);
// });

//! ====================================================

/*
* === TASK ===
1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body. Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
2. Додати в модалку логіку закриття при натисканні на кнопку Escape
*/

// const refs = {
//   overlay: document.getElementById("overlay"),
//   modalWindow: document.getElementById("modalWindow"),
//   closeBtn: document.getElementById("closeBtn"),
//   openBtn: document.getElementById("openBtn"),
// };

// const classes = {
//   openModal: "open-modal",
// };

// refs.openBtn.addEventListener("click", handleModal);
// refs.closeBtn.addEventListener("click", handleModal);
// refs.overlay.addEventListener("click", handleModal);
// document.addEventListener("keydown", handleModalClose);

// function handleModal() {
//   document.body.classList.toggle(classes.openModal);
// }

// function handleModalClose({ code }) {
//   if (code === "Escape") document.body.classList.remove(classes.openModal);

//   //   if (code === "Escape" && document.body.classList.contains(classes.openModal))
//   //     handleModal();
// }

//! ====================================================

/*

const link = document.getElementById("link");

link.addEventListener("click", handleClick, {
  once: true, // true - якщо подія одноразова
  passive: false, // true - забороняє використання event.preventDefault();
});

function handleClick(event) {
  event.preventDefault();
  console.log("Hey");
//   link.removeEventListener("click", handleClick);
}

// link.onclick = (event) => {
//   event.preventDefault();
//   console.log("hello");
//   link.onclick = null;
// };


*/

//! ====================================================

// const select = document.getElementById("select");

// select.addEventListener("change", function (event) {
//   console.log(event.target.value);
//   console.log(this.value)
// });

//! ====================================================
