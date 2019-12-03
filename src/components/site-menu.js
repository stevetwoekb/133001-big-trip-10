const createMenurMarkup = (menu, isChecked) => {
  const {title} = menu;

  return (
    `
    <a class="trip-tabs__btn  ${isChecked ? `trip-tabs__btn--active` : ``}" href="#">${title}</a>
    `
  );
};

export const createSiteMenuTemplate = (menuItems) => {
  const menuMarkup = menuItems.map((it, i) => createMenurMarkup(it, i === 0)).join(`\n`);
  return (
    `
    <nav class="trip-controls__trip-tabs  trip-tabs">
    ${menuMarkup}
    </nav>
    `
  );
};
