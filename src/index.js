import { divide } from "lodash";
import render from "../interface";
// import form from "./forms";
import "./style.css";

render();
// form();
const form = document.querySelector("#addTask");
const projectForm = document.querySelector("#projectForm");
const addTaskBtn = document.querySelector(".addtaskbtn");
const submitTaskBtn = document.querySelector(".submittaskbtn");
const addProjectBtn = document.querySelector("#addProjectBtn");
const projectEntry = document.querySelector(".addButton");
const generatedProjectItems = document.querySelector(".Generateditem");
const taskForm = document.querySelector(".tables");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const tableButton = document.querySelector(".delete");
const options = document.querySelector(".options");
const deletetable = document.querySelector(".removeButton");

//   tableButton.addEventListener('click', (e) => {
//     const tableRow = e.target.parentElement.parentElement;
//     tableRow.remove();
//   });
//   form.reset();
//   hideForm();
// });

deletetable.addEventListener("click", (e) => {
  // const removing = document.querySelector('.tables')
  // const projectName = document.querySelector('.item-input');
  const deleteProject = e.target.parentElement;
  deleteProject.remove();
  // const removeProject
  // console.log(e.target.parentElement)
  // // console.log(removing)
  // console.log(projectName)
  // deletetable.remove();
  // projectName.remove();
  // addTaskBtn.remove();
  // removing.remove();
});

const hideForm = () => {
  form.classList.add("hidden");
};

const showForm = () => {
  form.classList.remove("hidden");
};

addTaskBtn.addEventListener("click", (e) => {
  showForm();
});

options.addEventListener("click", (e) => {
  const target = e.target.id;
  // formpriority.appendChild(target)
});

function getpriority() {
  if (document.querySelector("#high").checked) {
    return "high";
  }
  if (document.querySelector("#medium").checked) {
    return "medium";
  }
  if (document.querySelector("#low").checked) {
    return "low";
  }
  return "no priority";
}

function getpriority1() {
  if (document.querySelector("#high").checked) {
    return "high";
  }
  if (document.querySelector("#medium").checked) {
    return "medium";
  }
  if (document.querySelector("#low").checked) {
    return "low";
  }
  return "no priority";
}

submitTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newcheckbox = document.createElement("input");
  newcheckbox.setAttribute("type", "checkbox");
  const newrow = document.createElement("tr");
  newrow.id = "newproject";
  const formTitle = document.createElement("td");
  const formDescription = document.createElement("td");
  const formDate = document.createElement("td");
  const formcompletion = document.createElement("td");
  const formpriority = document.createElement("td");
  const removebutton = document.createElement("td");
  const tableButton = document.createElement("button");
  tableButton.innerHTML = "X";
  tableButton.className = "delete";
  formpriority.id = "newpriority";
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
  if (formpriority.innerHTML === "high") {
    formpriority.classList.add("high");
  } else if (formpriority.innerHTML === "medium") {
    formpriority.classList.add("medium");
  } else if (formpriority.innerHTML === "low") {
    formpriority.classList.add("low");
  } else {
    formpriority.classList.add("no-priority");
  }

  tableButton.addEventListener("click", (e) => {
    const tableRow = e.target.parentElement.parentElement;
    tableRow.remove();
  });
  form.reset();
  hideForm();
});


addProjectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const generatedDiv = document.createElement("div");
  generatedDiv.className = "item";
  const generatedName = document.createElement("h4");
  const newaddition = document.createElement("button");
  newaddition.innerHTML = "Add";
  newaddition.className = "editButton addtaskbtn";
  const newdeletion = document.createElement("button");
  newdeletion.innerHTML = "Remove";
  newdeletion.className = "removeButton";
  generatedName.className = "item-input";

  newaddition.addEventListener('click', (e) => {
    e.preventDefault()
    newform.classList.remove('hidden')
  });

  newdeletion.addEventListener("click", (e) => {
    const deleteProject = e.target.parentElement;
    deleteProject.remove();
  });

  const newform = document.createElement("form");
  newform.className ='hidden'

  const titlediv = document.createElement("div");
  const titlelabel = document.createElement("label");
  const titleinput = document.createElement("input");
  titlelabel.innerHTML = "Title";

  const descdiv = document.createElement("div");
  const desclabel = document.createElement("label");
  const descinput = document.createElement("input");
  desclabel.innerHTML = "Description";

  const datediv = document.createElement("div");
  const datelabel = document.createElement("label");
  const dateinput = document.createElement("input");
  datelabel.innerHTML = "Due date";

  generatedName.innerHTML = projectForm.value;

  const newoptions = document.createElement("div");
  newoptions.className = "options";


    const newAddDiv = document.createElement("div");
    const newAddButton = document.createElement("button");
    // newAddButton.setAttribute("id", "submittaskbtn");
     newAddButton.className = "add submittaskbtn";
     newAddButton.innerHTML = "Add to Project";

  const highdiv = document.createElement("div");
  const highlabel = document.createElement("label");
  highlabel.setAttribute("for", "high");
  highlabel.innerHTML = "High";
  const highinput = document.createElement("input");
  highinput.setAttribute("type", "radio");
  highinput.setAttribute("id", "high");
  highinput.className = "higher";
  highinput.setAttribute("value", "impact");
  highinput.setAttribute("name", "priority");

  const mediumdiv = document.createElement("div");
  const mediumlabel = document.createElement("label");
  mediumlabel.setAttribute("for", "medium");
  mediumlabel.innerHTML = "medium";
  const mediuminput = document.createElement("input");
  mediuminput.setAttribute("type", "radio");
  mediuminput.setAttribute("id", "medium");
  mediuminput.setAttribute("value", "impact2");
  mediuminput.setAttribute("name", "priority");

  const lowdiv = document.createElement("div");
  lowdiv.className = "lowdiv";
  const lowlabel = document.createElement("label");
  lowlabel.setAttribute("for", "low");
  lowlabel.innerHTML = "low";
  const lowinput = document.createElement("input");
  lowinput.setAttribute("type", "radio");
  lowinput.setAttribute("id", "low");
  lowinput.id = "low";
  lowinput.setAttribute("value", "impact1");
  lowinput.setAttribute("name", "priority");

  const table = document.createElement("table");
  table.className = "tables";
  const tableHead = document.createElement("thead");
  const tableRow = document.createElement("tr");
  const tableTitle = document.createElement("th");
  tableTitle.innerHTML = "Title";
  const tableDesc = document.createElement("th");
  tableDesc.innerHTML = "Description";
  const tableDate = document.createElement("th");
  tableDate.innerHTML = "Due date";
  const tableCompleted = document.createElement("th");
  tableCompleted.innerHTML = "completed?";
  const tablePriority = document.createElement("th");
  tablePriority.innerHTML = "priority";
  const tableRemove = document.createElement("th");
  tableRemove.innerHTML = "remove";

  newAddButton.addEventListener('click', (e) => {
    e.preventDefault();

    const tableBody = document.createElement("tbody");
    const bodyRow = document.createElement("tr");
    const titleData = document.createElement("td");
    titleData.innerHTML = titleinput.value;
    const descData = document.createElement("td");
    descData.innerHTML = descinput.value;
    const timeData = document.createElement("td");
    timeData.innerHTML = "Due Date";
    const completedData = document.createElement("td");
    completedData.innerHTML = getpriority1();
    completedData.className = "high";
    const priorityData = document.createElement("td");
    const tableInput = document.createElement("input");
    const deleteTable = document.createElement("td");
    tableInput.setAttribute("type", "checkbox");
    const tableButton = document.createElement("button");
    tableButton.className = "delete";
    tableButton.innerHTML = "X";
    const newcheckbox = document.createElement("input");
    newcheckbox.setAttribute("type", "checkbox");
    priorityData.appendChild(newcheckbox)
    deleteTable.appendChild(tableButton)

    deleteTable.addEventListener("click", (e) => {
      const tableRow = e.target.parentElement.parentElement;
      tableRow.remove();
      newform.reset();
    });

    tableRow.appendChild(tableTitle);
    tableRow.appendChild(tableDesc);
    tableRow.appendChild(tableDate);
    tableRow.appendChild(tableCompleted);
    tableRow.appendChild(tablePriority);
    tableRow.appendChild(tableRemove);
    tableHead.appendChild(tableRow);
    bodyRow.appendChild(titleData);
    bodyRow.appendChild(descData);
    bodyRow.appendChild(timeData);
    bodyRow.appendChild(priorityData);
    bodyRow.appendChild(completedData);
    bodyRow.appendChild(deleteTable);
    tableBody.appendChild(bodyRow);
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    generatedDiv.appendChild(table);


  })

  //TABLES

  

  //TABLE BODY AND DATA

  highdiv.appendChild(highlabel);
  highdiv.appendChild(highinput);

  mediumdiv.appendChild(mediumlabel);
  mediumdiv.appendChild(mediuminput);

  lowdiv.appendChild(lowlabel);
  lowdiv.appendChild(lowinput);

  newoptions.appendChild(highdiv);
  newoptions.appendChild(mediumdiv);
  newoptions.appendChild(lowdiv);

  generatedName.innerHTML = projectForm.value;

  titlediv.appendChild(titlelabel);
  titlediv.appendChild(titleinput);

  descdiv.appendChild(desclabel);
  descdiv.appendChild(descinput);

  datediv.appendChild(datelabel);
  datediv.appendChild(dateinput);

  newform.appendChild(titlediv);
  newform.appendChild(descdiv);
  newform.appendChild(datediv);
  newform.appendChild(newoptions);
  newform.appendChild(newAddDiv);
  newAddDiv.appendChild(newAddButton);


  generatedProjectItems.appendChild(generatedDiv);
  generatedDiv.appendChild(generatedName);
  generatedDiv.appendChild(newdeletion);
  generatedDiv.appendChild(newaddition);
  generatedDiv.appendChild(newform);
});


tableButton.addEventListener("click", (e) => {
  const tableRow = e.target.parentElement.parentElement;
  tableRow.remove();
});

options.addEventListener("click", (e) => {
  e.target.id;
});

const item = (title, description, dueDate, complete, priority) => ({
  title,
  description,
  dueDate,
  complete,
  priority,
});