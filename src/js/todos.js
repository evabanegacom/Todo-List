/* eslint-disable */
import lists from './list';
/* eslint-enable */

const task = (() => {
  class Task {
    constructor(title, description, date, priority) {
      this.title = title;
      this.description = description;
      this.date = date;
      this.priority = priority;
    }
  }

  const createButton = document.querySelector('.add-new-task-button');
  const form = document.querySelector('#task-form');
  const popupAlert = document.querySelector('.pop-up-alert');
  const radioButton = document.querySelectorAll('.radio-button');

  const clearAllTasks = () => {
    const tasks = document.querySelectorAll('.task');
    tasks.forEach(task => {
      task.remove();
    });
  };

  const renderTasks = (tasks = '') => {
    clearAllTasks();
    if (tasks !== '') {
      const value = Object.values(tasks);
      for (let i = 0; i < value.length; i += 1) {
        if (value !== undefined) {
          const todoBody = document.querySelector('.todo-body');
          const divTasks = document.createElement('div');
          divTasks.setAttribute('class', 'tasks');
          const divTask = document.createElement('div');
          divTask.setAttribute('class', 'task');
          const checkboxTask = document.createElement('input');
          checkboxTask.setAttribute('type', 'checkbox');
          checkboxTask.setAttribute('id', `task-${i}`);
          const labelTask = document.createElement('label');
          labelTask.setAttribute('for', `task-${i}`);
          const spanTask = document.createElement('span');
          spanTask.setAttribute('class', 'custom-checkbox');
          const descriptionTask = document.createElement('p');
          const titleTask = document.createElement('p');
          titleTask.setAttribute('class', 'title-task');
          titleTask.textContent = value[i].title;
          descriptionTask.setAttribute('class', 'description-task');
          descriptionTask.textContent = value[i].description;
          const dateTask = document.createElement('p');
          dateTask.textContent = value[i].date;
          dateTask.setAttribute('class', 'date');

          const priorityTask = document.createElement('p');
          priorityTask.textContent = value[i].priority;
          priorityTask.setAttribute('class', 'priority');
          const trashTask = document.createElement('p');
          trashTask.setAttribute('class', 'delete-tast');
          trashTask.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

          labelTask.appendChild(spanTask);
          labelTask.appendChild(titleTask);
          labelTask.appendChild(descriptionTask);
          labelTask.appendChild(dateTask);
          labelTask.appendChild(priorityTask);
          divTask.appendChild(checkboxTask);
          divTask.appendChild(labelTask);
          divTask.appendChild(trashTask);
          divTasks.appendChild(divTask);
          todoBody.appendChild(divTasks);

          const form = document.querySelector('.pop-up-form');
          form.style.display = 'none';
        }
      }
    }
  };

  const deleteTask = () => {
    const removeTask = document.querySelectorAll('.delete-tast');

    removeTask.forEach(button => button.addEventListener('click', (e) => {
      const task = e.target.parentElement.parentElement.parentElement;
      const taskBody = task.parentElement.parentElement.parentElement;
      const taskListkey = taskBody.children[0].children[0].textContent;
      const title = task.children[1].children[1].textContent;
      const description = task.children[1].children[2].textContent;
      const date = task.children[1].children[3].textContent;
      const storageGetTasks = JSON.parse(localStorage.getItem(taskListkey));

      const deletedTask = storageGetTasks.find(task => task.title === title
        && task.description === description && task.date === date);

      const updatedStorageTasks = storageGetTasks.filter(obj => obj !== deletedTask);
      const deleteTaskAlert = document.querySelector('.task-deletion-alert');
      deleteTaskAlert.style.display = 'block';
      deleteTaskAlert.textContent = `${title} task successfully deleted`;

      setTimeout(() => {
        deleteTaskAlert.textContent = '';
        deleteTaskAlert.style.display = 'none';
      }, 3000);

      task.parentElement.remove();
      localStorage.setItem(taskListkey, JSON.stringify(updatedStorageTasks));
    }));
  };

  const deleteList = () => {
    const deleteItem = document.querySelector('.removeList');
    deleteItem.addEventListener('click', () => {
      const currentList = lists.switchListKey();
      const listElement = document.querySelectorAll('.list-name');
      listElement.forEach(list => {
        const alertMessage = document.querySelector('.task-deletion-alert');
        if (list.textContent === currentList.key) {
          const taskTitle = document.querySelector('.list-title');
          alertMessage.style.display = 'block';
          alertMessage.textContent = `${currentList.key} list successfully deleted`;
          taskTitle.textContent = '';

          list.remove();
          localStorage.removeItem(currentList.key);
          document.querySelector('.todo-list').style.display = 'none';
          setTimeout(() => {
            alertMessage.textContent = '';
            alertMessage.style.display = 'none';
          }, 3000);
        }
        if (currentList.key === '') {
          const alertMessage = document.querySelector('.task-deletion-alert');
          alertMessage.style.display = 'block';
          alertMessage.textContent = 'Please select a list to delete';

          setTimeout(() => {
            alertMessage.textContent = '';
            alertMessage.style.display = 'none';
          }, 2500);
        }
      });
    });
  };

  deleteList();

  const alertTimer = (alertMessage) => {
    setTimeout(() => {
      alertMessage.textContent = '';
      alertMessage.style.display = 'none';
    }, 3000);
  };

  const switchListAlert = (list = undefined) => {
    if (list !== undefined) {
      document.querySelector('.todo-list').style.display = 'block';
      const alertMessage = document.querySelector('.switch-list-alert');
      alertMessage.textContent = `Switched to ${list}`;
      alertMessage.style.display = 'block';
      alertTimer(alertMessage);
    } else {
      const alertMessage = document.querySelector('.task-deletion-alert');
      alertMessage.style.display = 'block';
      alertMessage.textContent = 'Please select the list to add a task';
      alertTimer(alertMessage);
    }
  };

  const renderListTasks = () => {
    const newLists = document.querySelectorAll('.list-name');
    const currentList = lists.switchListKey().key;
    newLists.forEach(list => list.addEventListener('click', (e) => {
      const currentKey = e.target.textContent;
      const getLocalStorageTasks = JSON.parse(localStorage.getItem(currentKey));
      renderTasks(getLocalStorageTasks);
      switchListAlert(currentKey);
      deleteTask();
      deleteList();
    }));
    const getLocalStorageTasks = JSON.parse(localStorage.getItem(currentList));
    renderTasks(getLocalStorageTasks);
    switchListAlert(currentList);
    deleteTask();
    deleteList();
    return currentList;
  };

  createButton.addEventListener('click', () => {
    if (lists.switchListKey().key !== '') {
      const popUpForm = document.querySelector('.pop-up-form');
      const backgroundBlur = document.querySelector('.background-blur');
      popUpForm.style.display = 'block';
      backgroundBlur.style.display = 'block';
    } else {
      switchListAlert();
    }
  });

  const updatedList = document.querySelectorAll('.list-name');
  updatedList.forEach(list => list.addEventListener('click', () => {
    renderListTasks();
  }));

  const updateLocalStorageTask = (newTask) => {
    let storage = lists.updateLocalStorage();
    if (storage === '') {
      storage = [];
    }
    const currentKey = lists.switchListKey().key;
    storage[currentKey].push(newTask);
    localStorage.setItem(currentKey, JSON.stringify(storage[currentKey]));
    const getLocalStorageTasks = JSON.parse(localStorage.getItem(currentKey));
    const backgroundBlur = document.querySelector('.background-blur');
    renderTasks(getLocalStorageTasks);
    backgroundBlur.style.display = 'none';
  };

  const resetForm = (e) => {
    radioButton.forEach(button => { button.checked = false; });
    e.title.value = '';
    e.description.value = '';
    e.date.value = '';
  };

  const newTaskCreatedAlert = () => {
    const newTeskAlert = document.querySelector('.task-created-alert');
    newTeskAlert.textContent = 'New task successfully created';
    newTeskAlert.style.display = 'block';

    setTimeout(() => {
      newTeskAlert.textContent = '';
      newTeskAlert.style.display = 'none';
    }, 3000);
  };

  const checkingValidation = (title, description, date, priority, e) => {
    if (!(title === '' || description === '' || date === '' || priority === '')) {
      const newTask = new Task(title, description, date, priority);
      updateLocalStorageTask(newTask);
      resetForm(e);
      deleteTask();
      newTaskCreatedAlert();
    } else {
      popupAlert.style.display = 'block';
      setTimeout(() => {
        popupAlert.style.display = 'none';
      }, 3000);
    }
  };

  const addTask = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const date = e.target.date.value;
    const priority = e.target.priority.value;
    checkingValidation(title, description, date, priority, e.target);
  };

  form.addEventListener('submit', addTask);
  return { renderTasks };
})();

export default task;
