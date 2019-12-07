const menuNames = [`Table`, `Stats`];

const generateMenu = () => {
  return menuNames.map((it) => {

    return {
      title: it,
    };
  });
};

export {generateMenu};
