/*
Стани кнопки:
1. Стан коли її немає на екрані
2. Стан неактивна (Loading...) - коли відбувається запит(відповідь ще не отримана)
3. Стан активна - коли можна зробити наступний запит
*/

export default class LoadMoreBtn {
  constructor({ selector, isHidden = false }) {
    this.button = this.getButton(selector);
    // if (isHidden) this.hide();
    isHidden && this.hide();
  }

  getButton(selector) {
    return document.querySelector(selector);
  }

  disable() {
    this.button.disabled = true;
    this.button.textContent = "Loading...";
  }

  enable() {
    this.button.disabled = false;
    this.button.textContent = "Load More";
  }

  hide() {
    this.button.classList.add("hidden");
  }

  show() {
    this.button.classList.remove("hidden");
  }
}
