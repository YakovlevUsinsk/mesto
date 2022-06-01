export default class Section {
  constructor ({items, renderer}, containerSelector) {
    this._inicialArray = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems () {
    this._inicialArray.forEach(element => {
      this._renderer(element);
    });
  }
  addItem (element) {
this._container.prepend(element);
  }
}
