import {castTimeFormat, createElement} from '../utils.js';
const createOffersMarkup = (offer) => {
  return (
    `
    <h4 class="visually-hidden">Offers:</h4>
    <ul class="event__selected-offers">
      <li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        &plus;
        &euro;&nbsp;<span class="event__offer-price">${offer.price}</span>
        </li>
    </ul>
    `
  );
};
const createEventListItemTemplate = (event) => {
  const differenceDateMs = event.dateEnd - event.dateStart;
  const differenceDate = new Date(differenceDateMs);
  return (
    `
    <li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="${event.icon}" alt="Event type icon">
      </div>
      <h3 class="event__title">${event.type} to ${event.city}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-19T10:00">${castTimeFormat(event.dateStart.getHours())}:${castTimeFormat(event.dateStart.getMinutes())}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-19T11:00">${castTimeFormat(event.dateEnd.getHours())}:${castTimeFormat(event.dateEnd.getMinutes())}</time>
        </p>
        <p class="event__duration">${castTimeFormat(differenceDate.getDay())}D ${castTimeFormat(differenceDate.getHours())}H ${castTimeFormat(differenceDate.getMinutes())}M </p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${event.price}</span>
      </p>
      ${event.offers.map(createOffersMarkup)}

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>
    `
  );
};

export default class EventListItem {

  constructor(event) {
    this._event = event;
    this._element = null;
  }

  getTemplate() {
    return createEventListItemTemplate(this._event);
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

