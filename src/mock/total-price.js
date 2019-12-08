const getTotalCoast = (array) => {
  let totalCoast = 0;
  for (const elem of array) {
    totalCoast += elem;
  }
  return totalCoast;
};


export {getTotalCoast};
