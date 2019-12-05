const prices = [];
const totalPrice = (value) => {
  prices.push(value);
};

const getTotalPrice = () => {
  let sum = 0;
  prices.forEach((it) => {
    sum += it;
  });
  return sum;
};

export {totalPrice, getTotalPrice};
