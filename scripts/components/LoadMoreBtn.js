export default class LoadMoreBtn {
  constructor({ selector, isHidden = false }) {
    this.button = this.getButton(selector);
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
