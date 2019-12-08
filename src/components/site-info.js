import {createElement} from '../utils.js';
const createSiteInfoTemplate = (price) => {
  return (
    `
    <section class="trip-main__trip-info  trip-info">
          <div class="trip-info__main">
      <h1 class="trip-info__title">Amsterdam &mdash; ... &mdash; Amsterdam</h1>

      <p class="trip-info__dates">Mar 18&nbsp;&mdash;&nbsp;21</p>
    </div>
    <p class="trip-info__cost">
      Total: &euro;&nbsp;<span class="trip-info__cost-value">${price}</span>
    </p>
  </section>
    `
  );
};


export default class SiteInfoComponent {

  constructor(price) {
    this._price = price;
    this._element = null;
  }

  getTemplate() {
    return createSiteInfoTemplate(this._price);
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
