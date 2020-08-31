/* eslint-disable */
import task from "./todos";
import localStorageList from "../logic/localStorage";
import objectValues from "../logic/objectValues";

/* eslint-enable */

const lists = (() => {
  const lists = document.querySelector('.task-list');
  const form = document.querySelector('#form');
  const popupForm = document.querySelector('.list-alert');
  const allListItems = document.querySelectorAll('.list-name');
  const localStorageTask = {};
  const currentKey = { key: '' };

  const switchList = () => {
    const listTitle = document.querySelector('.list-title');
    const allListItems = document.querySelectorAll('.list-name');
    allListItems.forEach((list) => list.addEventListener('click', (e) => {
      const key = e.target.textContent;
      currentKey.key = key;
      listTitle.textContent = key;
      task.renderTasks();
    }));
    return currentKey;
  };

  allListItems.forEach((list) => list.addEventListener('click', () => {
    switchList();
  }));


 localStorageList();


  const clearList = () => {
    const listItems = document.querySelectorAll('.list-name');
    listItems.forEach((item) => item.remove());
  };

  objectValues();

  const render = () => {
    const defaultList = document.createElement('li');

    defaultList.setAttribute('class', 'default-list');
    defaultList.textContent = 'All Tasks';
    lists.appendChild(defaultList);

    clearList();
    Object.keys(localStorageList()).forEach((key) => {
      const listItems = document.createElement('li');
      listItems.setAttribute('class', 'list-name');
      listItems.textContent = key;
      lists.appendChild(listItems);
    });
    switchList();
  };

  const updateLocalStorage = () => localStorageList();

  render();

  const successAlert = (list) => {
    const listCreatedAlert = document.querySelector('.task-created-alert');
    listCreatedAlert.style.display = 'block';
    listCreatedAlert.textContent = `${list} list successfully created`;

    setTimeout(() => {
      listCreatedAlert.textContent = '';
      listCreatedAlert.style.display = 'none';
    }, 5000);
  };

  const newListItems = (e) => {
    e.preventDefault();
    const listItem = e.target.lists.value;
    if (!(listItem === '')) {
      localStorageTask[listItem] = [];
      localStorage.setItem(listItem, JSON.stringify([]));
      const listItems = document.createElement('li');
      listItems.setAttribute('class', 'list-name');
      listItems.textContent = listItem;
      lists.appendChild(listItems);
      localStorageList();
      switchList();
      successAlert(listItem);
    } else {
      popupForm.style.display = 'block';
      setTimeout(() => {
        popupForm.style.display = 'none';
      }, 3000);
    }
    e.target.lists.value = '';
  };

  form.addEventListener('submit', newListItems);

  return {
    objectValues,
    switchList,
    updateLocalStorage,
    localStorageTask,
  };
})();

export default lists;
