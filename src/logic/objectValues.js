import localStorageList from "./localStorage";

function objectValues() {
  const storageObject = localStorageList();
  const storageObjectMap = Object.keys(storageObject).map((key) => {
    const allTasks = storageObject[key];
    return allTasks;
  });
  return storageObjectMap;
}

export default objectValues;