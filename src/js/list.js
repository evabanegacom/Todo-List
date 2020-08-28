/* eslint-disable */
import task from './todos';
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
    allListItems.forEach(list => list.addEventListener('click', (e) => {
      const key = e.target.textContent;
      currentKey.key = key;
      listTitle.textContent = key;
      task.renderTasks();
    }));
    return currentKey;
  };

  allListItems.forEach(list => list.addEventListener('click', () => {
    switchList();
  }));

  const localStorageList = () => {
    const object = Object.keys(localStorage).reduce((obj, str) => {
      if (str !== 'loglevel:webpack-dev-server') {
        obj[str] = JSON.parse([localStorage.getItem(str)]) || [];
      }
      return obj;
    }, {});
    return object;
  };

  const clearList = () => {
    const listItems = document.querySelectorAll('.list-name');
    listItems.forEach(item => item.remove());
  };

  const render = () => {
    clearList();
    Object.keys(localStorageList()).forEach(key => {
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
    switchList,
    updateLocalStorage,
    localStorageTask,
  };
})();

export default lists;
