import {generateEvent} from './event.js';
import {getRandomIntegerNumber, getRandomDate} from '../utils.js';


/** создаем объект списка */

const generateDayList = () => {
  const randomEventCount = getRandomIntegerNumber(2, 5);
  const listItem = [];
  for (let i = 0; i < randomEventCount; i++) {
    listItem.push(generateEvent());
  }
  return {
    date: getRandomDate(),
    events: listItem
  };
};

const generateDaysList = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateDayList).sort((a, b) => a.date - b.date);
};


export {generateDaysList};
