import {generateEvent} from './event.js';
import {getRandomIntegerNumber} from '../utils.js';

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 7);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

/** создаем объект списка */

const generateDayList = () => {
  const currentDate = getRandomDate();
  currentDate.setHours(0, 0, 0, 0);
  const randomEventCount = getRandomIntegerNumber(2, 5);
  const listItem = [];
  for (let i = 0; i < randomEventCount; i++) {
    listItem.push(generateEvent(currentDate));
  }
  return {
    date: currentDate,
    events: listItem
  };
};

const generateDaysList = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateDayList).sort((a, b) => a.date - b.date);
};


export {generateDaysList};
