import {getRandomIntegerNumber} from '../utils.js';
const descriptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const types = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `Check`,
  `Sightseeing`,
  `Restaurant`,
];

const citys = [
  `Ganeva`,
  `Moscow`,
  `Yekaterinburg`,
  `Amsterdam`,
  `Polevskoy`,
];

const offerTitles = [
  `Add luggage`,
  ` Switch to comfort class`,
  `Add meal`,
  `Choose seats`
];

const offerPrice = [
  `10`,
  `150`,
  `2`,
  `9`
];

const dates = [];

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length - 1);
  return array[randomIndex];
};

const generatePrices = () => {
  const prices = [];
  for (let i = 0; i < getRandomIntegerNumber(2, 10); i++) {
    prices.push(getRandomIntegerNumber(100, 399));
  }

  return prices;
};

const generateOffers = () => {
  const offers = [];
  const offersCount = getRandomIntegerNumber(0, 2);
  for (let i = 0; i < offersCount; i++) {
    const offer = {
      title: getRandomArrayItem(offerTitles),
      price: getRandomArrayItem(offerPrice)
    };
    offers.push(offer);
  }
  return offers;
};

const generateIcon = (type) => {
  return `img/icons/${type.toLowerCase()}.png`;
};

const generateType = () => {
  return getRandomArrayItem(types);
};

const generateDescription = () => {
  const makeRandomArray = () => {
    return Math.random() - 0.5;
  };
  const sentences = descriptionText.split(`. `);
  const randomIndex = getRandomIntegerNumber(0, 3);
  return sentences.sort(makeRandomArray)[randomIndex];
};

const generatePhotos = () => {
  const count = getRandomIntegerNumber(0, 5);
  const photosArray = [];
  for (let i = 0; i < count; i++) {
    photosArray.push(`http://picsum.photos/300/150?r=${Math.random()}`);
  }
  return photosArray;
};

const generateDate = (date) => {
  for (let i = 0; i < 2; i++) {
    date.setHours(getRandomIntegerNumber(0, 24));
    const minutes = getRandomIntegerNumber(0, 60);
    const generatedMinutes = ((Math.floor((minutes - 1) / 5) + 1) * 5) % 60;
    const total = date.setMinutes(generatedMinutes);
    dates.push(total);
  }
};


const generateEvent = (fullDate) => {
  const getType = generateType();
  generateDate(fullDate);
  dates.sort((a, b) => a - b);
  const startDate = new Date(dates[0]);
  const endDate = new Date(dates[1]);
  return {
    type: getType,
    icon: generateIcon(getType),
    city: getRandomArrayItem(citys),
    photos: generatePhotos(),
    description: generateDescription(),
    price: getRandomArrayItem(generatePrices()),
    offers: generateOffers(),
    dateStart: startDate,
    dateEnd: endDate
  };
};


const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {generateEvent, generateEvents};
