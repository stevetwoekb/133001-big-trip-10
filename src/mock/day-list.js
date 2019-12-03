import {generateEvent} from './event.js';
import {getRandomIntegerNumber} from '../utils.js';

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 7);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

/** создаем объект списока */

const generateDayList = () => {
  const currentDate = getRandomDate();
  const randomEventCount = getRandomIntegerNumber(2, 5);
  const events = [];
  for (let i = 0; i < randomEventCount; i++) {
    events.push(generateEvent(currentDate));
  }
  return {
    date: currentDate,
    event: events
  };
};

const generateDaysList = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateDayList);
};


export {generateDayList, generateDaysList};
