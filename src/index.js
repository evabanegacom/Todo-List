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



const hideForm = () => {
  form.classList.add("hidden");
};

const showForm = () => {
  form.classList.remove("hidden");
};

addTaskBtn.addEventListener("click", (e) => {
  showForm();
});


submitTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newrow = document.createElement("tr")
  const formTitle = document.createElement("td");
  const formDescription = document.createElement("td");
  const formDate = document.createElement("td");
  formTitle.innerHTML =  input1.value
  formDescription.innerHTML = input2.value
  formDate.innerHTML = input3.value
  
  newrow.appendChild(formTitle)
  newrow.appendChild(formDescription)
  newrow.appendChild(formDate)
  taskForm.appendChild(newrow)
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
  const remove = document.querySelector('td')
  remove.removeChild('td')
});



const item = (title, description, dueDate, complete, priority) => ({
  title,
  description,
  dueDate,
  complete,
  priority
});
