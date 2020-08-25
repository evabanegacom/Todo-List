import render from "../interface";
// import form from "./forms";
import "./style.css";

render();
// form();
const form = document.querySelector("#addTask");
const projectForm = document.querySelector("#projectForm");
const addTaskBtn = document.querySelector("#addtaskbtn");
const submitTaskBtn = document.querySelector("#submittaskbtn");
const addProjectBtn = document.querySelector("#addProjectBtn");


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
  hideForm();
  form.reset();
});

addProjectBtn.addEventListener("click", (e) => {
  projectForm.value = " ";
});


