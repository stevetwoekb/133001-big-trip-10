
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
const createEventListItemMarkup = (item) => {

  const offser = item.offers.map((i) => {
    return createOffersMarkup(i);
  });
  return (
    `
    <li class="trip-events__item">
    <div class="event">
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="${item.icon}" alt="Event type icon">
      </div>
      <h3 class="event__title">${item.type} to ${item.city}</h3>

      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-19T10:00">10:00</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-19T11:00">11:00</time>
        </p>
        <p class="event__duration">1H</p>
      </div>

      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${item.price}</span>
      </p>
      ${offser}

      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>
    `
  );
};


export const createEventListItemTemplate = (events) => {
  const eventListItem = events;
  const eventListItemMarkup = eventListItem.map((it) => createEventListItemMarkup(it)).join(`\n`);
  return (
    `
      ${eventListItemMarkup}
    `
  );
};
