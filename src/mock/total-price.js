// const totalPrice = 0;
const getTotalCoast = (array) => {
  let totalCoast = 0;
  for (let elems of array) {
    for (let elem of elems.events) {
      totalCoast += elem.price;
    }
  }
  return totalCoast;
};


export {getTotalCoast};
