import render from "../interface";
// import form from "./forms";
import "./style.css";
import { divide } from "lodash";

render();
// form();
const form = document.querySelector("#addTask");
const projectForm = document.querySelector("#projectForm");
const addTaskBtn = document.querySelector("#addtaskbtn");
const submitTaskBtn = document.querySelector("#submittaskbtn");
const addProjectBtn = document.querySelector("#addProjectBtn");
const projectEntry = document.querySelector('.addButton')
const generatedProjectItems = document.querySelector(".Generateditem");
const taskForm = document.querySelector(".tables");
const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const input3 = document.querySelector('.input3')
const tableButton = document.querySelector('.delete')
const options = document.querySelector('.options')



const hideForm = () => {
  form.classList.add("hidden");
};

const showForm = () => {
  form.classList.remove("hidden");
};

addTaskBtn.addEventListener("click", (e) => {
  showForm();
});



options.addEventListener('click', (e) => {
  const target = e.target.id
  //formpriority.appendChild(target)
});

function getpriority(){
  if (document.getElementById('high').checked){
   return 'high'
  }
  if (document.getElementById('medium').checked){
    return 'medium'
  }
  if (document.getElementById('low').checked){
    return 'low'
  }
};



submitTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newcheckbox = document.createElement('input');
  newcheckbox.setAttribute('type', 'checkbox');
  const newrow = document.createElement("tr");
  newrow.id = 'newproject';
  const formTitle = document.createElement("td");
  const formDescription = document.createElement("td");
  const formDate = document.createElement("td");
  const formcompletion = document.createElement("td");
  const formpriority = document.createElement("td");
  formpriority.id = 'newpriority';
  formpriority.innerHTML = getpriority();
  const removebutton = document.createElement("td");
  formTitle.innerHTML =  input1.value
  formDescription.innerHTML = input2.value
  formDate.innerHTML = input3.value
  formcompletion.appendChild(newcheckbox)
  newrow.appendChild(formTitle)
  newrow.appendChild(formDescription)
  newrow.appendChild(formDate)
  newrow.appendChild(formcompletion)
  newrow.appendChild(formpriority)
  newrow.appendChild(removebutton)
  taskForm.appendChild(newrow)
  if (formpriority.innerHTML == 'high'){
    formpriority.classList.add('high')
  }else if(formpriority.innerHTML == 'medium'){
    formpriority.classList.add('medium')
  }else {
    formpriority.classList.add('low')
  }
  form.reset();
  hideForm();
});




addProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const generatedName = document.createElement("h4");
  generatedName.className = 'item-input'
  generatedName.innerHTML = projectForm.value
  generatedProjectItems.appendChild(generatedName)
});

tableButton.addEventListener('click', (e) => {
  const tableRow = e.target.parentElement.parentElement
  tableRow.remove();
});

options.addEventListener('click', (e) => {
  e.target.id
})

// var radios = document.getElementsByName('priority');
//   for (var i = 0, length = radios.length; i < length; i++) {
//     if (radios[i].checked) {
//       // do whatever you want with the checked radio
//       const alet = alert(radios[i]);
//       console.log(alet)
//       // only one radio can be logically checked, don't check the rest
//       break;
//     }
//   }

const item = (title, description, dueDate, complete, priority) => ({
  title,
  description,
  dueDate,
  complete,
  priority
});
