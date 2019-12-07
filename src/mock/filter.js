const filterNames = [`Everything`, `Future`, `Past`];

const generateFilters = () => {
  return filterNames.map((it) => {

    return {
      title: it,
    };
  });
};

export {generateFilters};
