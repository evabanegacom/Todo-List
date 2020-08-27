import { divide } from 'lodash';
import render from '../interface';
// import form from "./forms";
import './style.css';

render();
// form();
const form = document.querySelector('#addTask');
const projectForm = document.querySelector('#projectForm');
const addTaskBtn = document.querySelector('#addtaskbtn');
const submitTaskBtn = document.querySelector('#submittaskbtn');
const addProjectBtn = document.querySelector('#addProjectBtn');
const projectEntry = document.querySelector('.addButton');
const generatedProjectItems = document.querySelector('.Generateditem');
const taskForm = document.querySelector('.tables');
const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const input3 = document.querySelector('.input3');
const tableButton = document.querySelector('.delete');
const options = document.querySelector('.options');
const deletetable = document.querySelector('.removeButton')




deletetable.addEventListener('click', (e) => {
  const removing = document.querySelector('.tables')
  const projectName = document.querySelector('.item-input');
  deletetable.remove();
  projectName.remove();
  addTaskBtn.remove();
  removing.remove();
});

const hideForm = () => {
  form.classList.add('hidden');
};

const showForm = () => {
  form.classList.remove('hidden');
};

addTaskBtn.addEventListener('click', (e) => {
  showForm();
});

options.addEventListener('click', (e) => {
  const target = e.target.id;
  // formpriority.appendChild(target)
});

function getpriority() {
  if (document.querySelector('#high').checked) {
    return 'high';
  }
  if (document.querySelector('#medium').checked) {
    return 'medium';
  }
  if (document.querySelector('#low').checked) {
    return 'low';
  }
  return 'no priority';
}

submitTaskBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newcheckbox = document.createElement('input');
  newcheckbox.setAttribute('type', 'checkbox');
  const newrow = document.createElement('tr');
  newrow.id = 'newproject';
  const formTitle = document.createElement('td');
  const formDescription = document.createElement('td');
  const formDate = document.createElement('td');
  const formcompletion = document.createElement('td');
  const formpriority = document.createElement('td');
  const removebutton = document.createElement('td');
  const tableButton = document.createElement('button');
  tableButton.innerHTML = 'X';
  tableButton.className = 'delete';
  formpriority.id = 'newpriority';
  formpriority.innerHTML = getpriority();
  formTitle.innerHTML = input1.value;
  formDescription.innerHTML = input2.value;
  formDate.innerHTML = input3.value;
  formcompletion.appendChild(newcheckbox);
  removebutton.appendChild(tableButton);
  newrow.appendChild(formTitle);
  newrow.appendChild(formDescription);
  newrow.appendChild(formDate);
  newrow.appendChild(formcompletion);
  newrow.appendChild(formpriority);
  newrow.appendChild(removebutton);
  taskForm.appendChild(newrow);
  if (formpriority.innerHTML === 'high') {
    formpriority.classList.add('high');
  } else if (formpriority.innerHTML === 'medium') {
    formpriority.classList.add('medium');
  } else if (formpriority.innerHTML === 'low') {
    formpriority.classList.add('low');
  } else {
    formpriority.classList.add('no-priority');
  }

  tableButton.addEventListener('click', (e) => {
    const tableRow = e.target.parentElement.parentElement;
    tableRow.remove();
  });
  form.reset();
  hideForm();
});

addProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const generatedName = document.createElement('h4');
  const newaddition = document.createElement('button')
  newaddition.innerHTML = 'Add'
  const newdeletion = document.createElement('button')
  newdeletion.innerHTML = 'remove'
  newdeletion.className = 'removeButton'
  generatedName.className = 'item-input';
  const newform = document.createElement('form')
  const titlelabel = document.createElement('label')
  const titleinput = document.createElement('input')

  const desclabel = document.createElement('label')
  const descinput = document.createElement('input')

  const datelabel = document.createElement('label')
  const dateinput = document.createElement('input')

  newform.appendChild(titlelabel)
  newform.appendChild(titleinput)

  newform.appendChild(desclabel)
  newform.appendChild(descinput)

  newform.appendChild(datelabel)
  newform.appendChild(dateinput)

  generatedName.innerHTML = projectForm.value;
  generatedProjectItems.appendChild(generatedName);
  generatedProjectItems.appendChild(newaddition);
  generatedProjectItems.appendChild(newdeletion);


});

tableButton.addEventListener('click', (e) => {
  const tableRow = e.target.parentElement.parentElement;
  tableRow.remove();
});

options.addEventListener('click', (e) => {
  e.target.id;
});

const item = (title, description, dueDate, complete, priority) => ({
  title,
  description,
  dueDate,
  complete,
  priority,
});
