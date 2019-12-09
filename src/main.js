
import SiteSort from './components/site-sort.js';
import SiteMenu from './components/site-menu.js';
import SiteInfo from './components/site-info';
import SiteFilter from './components/site-filter.js';
import DayListItem from './components/day-list-item.js';
import EventListItem from './components/event-list-item.js';
import EventListItemEdit from './components/event-list-item-edit.js';
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

render(siteEventsElement, new SiteSort().getElement(), RenderPosition.AFTERBEGIN);
menu.forEach((item) => {
  render(siteNavigationElement, new SiteMenu(item).getElement(), RenderPosition.BEFOREEND);
});
render(siteControlElement, new SiteFilter(filters).getElement(), RenderPosition.BEFOREEND);
const siteEventElement = siteEventsElement.querySelector(`.trip-days`);
days.forEach((day) => {
  const dayListItem = new DayListItem(day);
  render(siteEventElement, dayListItem.getElement(), RenderPosition.BEFOREEND);
  const eventsList = dayListItem.getElement().querySelector(`.trip-events__list`);
  day.events.forEach((event) => {
    const eventListItem = new EventListItem(event);
    const eventListItemEdit = new EventListItemEdit(event);
    const editButton = eventListItem.getElement().querySelector(`.event__rollup-btn`);
    const editForm = eventsList.querySelector(`.event--edit`);
    const onClickButton = () => {
      document.addEventListener(`keydown`, onEscapeKeyDown);
      eventsList.replaceChild(eventListItemEdit.getElement(), eventListItem.getElement());
      editForm.addEventListener(`submit`, () => {
        eventsList.replaceChild(eventListItem.getElement(), eventListItemEdit.getElement());
        removeEventListener(onClickButton);
      });
    };
    editButton.addEventListener(`click`, onClickButton);
    const onEscapeKeyDown = (evt) => {
      const isEscapeKey = evt.key === `Escape` || evt.key === `Esc`;
      if (isEscapeKey) {
        eventsList.replaceChild(eventListItem.getElement(), eventListItemEdit.getElement());
        document.removeEventListener(`keydown`, onEscapeKeyDown);
      }
    };
    render(eventsList, eventListItem.getElement(), RenderPosition.BEFOREEND);
    totalCoasts.push(event.price);
    render(eventsList, eventListItem.getElement(), RenderPosition.BEFOREEND);
    totalCoasts.push(event.price);
  });
});
const siteInfoElement = document.querySelector(`.trip-info`);
render(siteInfoElement, new SiteInfo(getTotalCoast(totalCoasts)).getElement(), RenderPosition.BEFOREEND);
