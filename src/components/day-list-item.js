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


const createDayListItemMarkup = (item) => {
  const year = item.date.getFullYear().toString().slice(2);
  const shortMonth = month[item.date.getMonth()].slice(0, 3);
  return (
    `
    <li class="trip-days__item  day">
    <div class="day__info">
      <span class="day__counter">${item.date.getDate()}<span>
      <time class="day__date" datetime="2019-03-18">${shortMonth} ${year}</time>
    </div>
    </li>
    `
  );
};


export const createDayListItemTemplate = (item) => {
  const listItem = item.map((it) => createDayListItemMarkup(it)).join(`\n`);
  return (
    `
    ${listItem}
    `
  );
};
