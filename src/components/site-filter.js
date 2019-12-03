const createFilterMarkup = (filter, isChecked) => {
  const {title} = filter;

  return (
    `<div class="trip-filters__filter">
    <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" ${isChecked ? `checked` : ``} name="trip-filter" value="${title.toLowerCase()}" checked>
    <label class="trip-filters__filter-label" for="filter-everything">${title}</label>
    </div>`
  );
};

export const createSiteFilterTemplate = (menuItems) => {
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