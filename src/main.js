
import {createSiteInfoTemplate} from './components/site-info.js';
import {createSiteMenuTemplate} from './components/site-menu.js';
import {createSiteFilterTemplate} from './components/site-filter.js';
import {createSiteSortTemplate} from './components/site-sort.js';
import {createSiteAddFormTemplate} from './components/site-add-form.js';
import {createDayListTemplate} from './components/day-list.js';
import {createDayListItemTemplate} from './components/day-list-item.js';
import {createEventListTemplate} from './components/event-list.js';
import {createEventListItemTemplate} from './components/event-list-item.js';

const TASK_COUNT = 3;

const siteHeaderElement = document.querySelector(`.trip-main`);
const siteInfoElement = siteHeaderElement.querySelector(`.trip-info`);
const siteControlElement = siteHeaderElement.querySelector(`.trip-controls`);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

render(siteInfoElement, createSiteInfoTemplate(), `afterbegin`);
render(siteControlElement, createSiteMenuTemplate());
render(siteControlElement, createSiteFilterTemplate());

const siteEventElement = document.querySelector(`.trip-events`);
render(siteEventElement, createSiteSortTemplate());
render(siteEventElement, createSiteAddFormTemplate());
render(siteEventElement, createDayListTemplate());

const siteDayListElement = siteEventElement.querySelector(`.trip-days`);
render(siteDayListElement, createDayListItemTemplate());

const siteDayListItemElement = siteDayListElement.querySelector(`.trip-days__item`);
render(siteDayListItemElement, createEventListTemplate());

const siteEventListElement = siteDayListElement.querySelector(`.trip-events__list`);
const repeat = (count, fn) => {
  Array(count).fill(``).forEach(fn);
};

repeat(TASK_COUNT, () => {
  render(siteEventListElement, createEventListItemTemplate());
});
