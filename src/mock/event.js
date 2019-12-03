import {getRandomIntegerNumber} from '../utils.js';
const discrioptionText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

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

const prices = [
  100,
  200,
  300,
  60,
  80,
  40,
  140,
  550,
  230,
  99,
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

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length - 1);
  return array[randomIndex];
};


const generateOffers = () => {
  const offers = [];
  const offersCount = getRandomIntegerNumber(0, 2);
  for (let i = 0; i < offersCount; i++) {
    let Offer = {
      title: getRandomArrayItem(offerTitles),
      price: getRandomArrayItem(offerPrice)
    };
    offers.push(Offer);
  }
  return offers;
};

const generateIcon = (type) => {
  return `img/icons/${type.toLowerCase()}.png`;
};

const generateType = () => {
  const type = getRandomArrayItem(types);
  return type;
};

const generateDiscription = () => {
  const makeRandomArray = () => {
    return Math.random() - 0.5;
  };
  const sentences = discrioptionText.split(`. `);
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

const generateEvent = (currentDay) => {
  const getType = generateType();
  const day = currentDay;
  return {
    type: getType,
    icon: generateIcon(getType),
    city: getRandomArrayItem(citys),
    photos: generatePhotos(),
    discrioption: generateDiscription(),
    price: getRandomArrayItem(prices),
    offers: generateOffers(),
    date: day
  };
};


const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

export {generateEvent, generateEvents};
