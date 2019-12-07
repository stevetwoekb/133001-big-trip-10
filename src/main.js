
import {createSiteInfoTemplate} from './components/site-info.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSiteFilterTemplate} from './components/site-filter.js';
import {createSiteSortTemplate} from './components/site-sort.js';
import {createSiteAddFormTemplate} from './components/site-add-form.js';
import {createDayListTemplate} from './components/day-list.js';
import {createDayListItemTemplate} from './components/day-list-item.js';
import {createEventListItemTemplate} from './components/event-list-item.js';
import {generateDaysList} from './mock/day-list.js';
import {generateFilters} from './mock/filter.js';
import {generateMenu} from './mock/menu.js';
import {getTotalCoast} from './mock/total-price.js';

// console.log(generateDaysList(3));
const DAY_COUNT = 4;
const filters = generateFilters();
const menu = generateMenu();
const eventDaysList = generateDaysList(DAY_COUNT);

const siteHeaderElement = document.querySelector(`.trip-main`);
const siteInfoElement = siteHeaderElement.querySelector(`.trip-info`);
const siteControlElement = siteHeaderElement.querySelector(`.trip-controls`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(siteControlElement, createSiteMenuTemplate(menu));
render(siteControlElement, createSiteFilterTemplate(filters));

const siteEventElement = document.querySelector(`.trip-events`);
render(siteEventElement, createSiteSortTemplate());
render(siteEventElement, createSiteAddFormTemplate());
render(siteEventElement, createDayListTemplate());
const siteDayListElement = siteEventElement.querySelector(`.trip-days`);
render(siteDayListElement, createDayListItemTemplate(eventDaysList));

const siteDayListItemElement = siteDayListElement.querySelectorAll(`.trip-days__item`);
siteDayListItemElement.forEach((elem, i) => {
  render(elem, createEventListItemTemplate(eventDaysList[i].events));
});
const totalCoast = getTotalCoast(eventDaysList);
render(siteInfoElement, createSiteInfoTemplate(totalCoast), `afterbegin`);
