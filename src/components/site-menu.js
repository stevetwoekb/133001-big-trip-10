import {createElement} from '../utils.js';

const createSiteMenuTemplate = (menuItem) => {
  return (
    `<a class="trip-tabs__btn href="#">${menuItem.title}</a>`
  );
};

export default class SiteMenu {
  constructor(menuItem) {
    this._menuItem = menuItem;
    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate(this._menuItem);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
