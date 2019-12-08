import {createElement} from '../utils.js';
const createFilterMarkup = (filter, isChecked) => {
  const {title} = filter;
  return (
    `<div class="trip-filters__filter">
    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" ${isChecked ? `checked` : ``} name="trip-filter" value="${title.toLowerCase()}" checked>
    <label class="trip-filters__filter-label" for="filter-everything">${title}</label>
    </div>`
  );
};
const createSiteInfoTemplate = (menuItems) => {
  const filtersMarkup = menuItems.map((it, i) => createFilterMarkup(it, i === 0)).join(`\n`);

  return (
    `
    <form class="trip-filters" action="#" method="get">
      ${filtersMarkup}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>
    `
  );
};

export default class SiteFilterComponent {
  constructor(menuItems) {
    this._menuItems = menuItems;
    this._element = null;
  }

  getTemplate() {
    return createSiteInfoTemplate(this._menuItems);
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
