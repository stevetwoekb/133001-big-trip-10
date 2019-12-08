import {createElement} from '../utils.js';
const month = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`
];

const createDayListItemTemplate = (item) => {
  const year = item.date.getFullYear().toString().slice(2);
  const shortMonth = month[item.date.getMonth()].slice(0, 3);
  return (
    `
    <li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${item.date.getDate()}<span>
      <time class="day__date" datetime="2019-03-18">${shortMonth} ${year}</time>
    </div>
    <ul class="trip-events__list">
    </ul>
    </li>
    `
  );
};

export default class DayListItemComponent {

  constructor(item) {
    this._item = item;
    this._element = null;
  }

  getTemplate() {
    return createDayListItemTemplate(this._item);
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
