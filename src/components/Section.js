export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._renderedItems = items;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._renderedItems.forEach((element) => {
      this._renderer(element);
    });
  }

  addItem(elementDom) {
    this._container.prepend(elementDom);
  }
}
