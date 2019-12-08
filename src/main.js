
import SiteSortComponent from './components/site-sort.js';
import SiteMenuComponent from './components/site-menu.js';
import SiteInfoComponent from './components/site-info';
import SiteFilterComponent from './components/site-filter.js';
import DayListItemComponent from './components/day-list-item.js';
import EventListItemComponent from './components/event-list-item.js';
import EventListItemEditComponent from './components/event-list-item-edit.js';
import {render, RenderPosition} from './utils.js';
import {generateDaysList} from './mock/day-list.js';
import {generateFilters} from './mock/filter.js';
import {generateMenu} from './mock/menu.js';
import {getTotalCoast} from './mock/total-price.js';
const totalCoasts = [];
const DAY_COUNT = 4;
const filters = generateFilters();
const menu = generateMenu();
const days = generateDaysList(DAY_COUNT);
const siteHeaderElement = document.querySelector(`.trip-main`);
const siteControlElement = siteHeaderElement.querySelector(`.trip-controls`);
const siteNavigationElement = siteControlElement.querySelector(`.trip-controls__trip-tabs`);
const siteEventsElement = document.querySelector(`.trip-events`);
render(siteEventsElement, new SiteSortComponent().getElement(), RenderPosition.AFTERBEGIN);
menu.forEach((item) => {
  render(siteNavigationElement, new SiteMenuComponent(item).getElement(), RenderPosition.BEFOREEND);
});
render(siteControlElement, new SiteFilterComponent(filters).getElement(), RenderPosition.BEFOREEND);
const siteEventElement = siteEventsElement.querySelector(`.trip-days`);
days.forEach((day) => {
  const dayListItem = new DayListItemComponent(day);
  render(siteEventElement, dayListItem.getElement(), RenderPosition.BEFOREEND);
  const eventsList = dayListItem.getElement().querySelector(`.trip-events__list`);
  day.events.forEach((event) => {
    const eventListItemComponent = new EventListItemComponent(event);
    const eventListItemEditComponent = new EventListItemEditComponent(event);
    const editButton = eventListItemComponent.getElement().querySelector(`.event__rollup-btn`);
    const openEdit = () => {
      eventsList.replaceChild(eventListItemEditComponent.getElement(), eventListItemComponent.getElement());
    };
    editButton.addEventListener(`click`, openEdit);
    render(eventsList, eventListItemComponent.getElement(), RenderPosition.BEFOREEND);
    totalCoasts.push(event.price);
  });
});
const siteInfoElement = document.querySelector(`.trip-info`);
render(siteInfoElement, new SiteInfoComponent(getTotalCoast(totalCoasts)).getElement(), RenderPosition.BEFOREEND);
