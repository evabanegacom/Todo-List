const localStorageList = () => {
  const object = Object.keys(localStorage).reduce((obj, str) => {
    if (str !== "loglevel:webpack-dev-server") {
      obj[str] = JSON.parse([localStorage.getItem(str)]) || [];
    }
    return obj;
  }, {});
  return object;
};

export default localStorageList;