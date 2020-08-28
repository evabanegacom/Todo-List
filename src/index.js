import render from "../interface";
import "./style.css";

render();
const form = document.querySelector("#addTask");
const projectForm = document.querySelector("#projectForm");
const addTaskBtn = document.querySelector(".addtaskbtn");
const submitTaskBtn = document.querySelector(".submittaskbtn");
const addProjectBtn = document.querySelector("#addProjectBtn");
const generatedProjectItems = document.querySelector(".Generateditem");
const taskForm = document.querySelector(".tables");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const tableButton = document.querySelector(".delete");
const options = document.querySelector(".options");
const deletetable = document.querySelector(".removeButton");
const items = JSON.parse(localStorage.getItem("items")) || [];

deletetable.addEventListener("click", (e) => {
  const deleteProject = e.target.parentElement;
  deleteProject.remove();
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

  newdeletion.addEventListener("click", (e) => {
    const deleteProject = e.target.parentElement;
    deleteProject.remove();
  });

  const newform = document.createElement("form");
  newform.className = "hidden";

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
  newAddButton.className = "add submittaskbtn";
  newAddButton.innerHTML = "Add to Project";

  const highdiv = document.createElement("div");
  const highlabel = document.createElement("label");
  highlabel.setAttribute("for", "high");
  highlabel.innerHTML = "High";
  const highinput = document.createElement("input");
  highinput.setAttribute("type", "radio");
  highinput.setAttribute('id', 'high');
  highinput.className = "high";
  highinput.setAttribute("value", "impact");
  highinput.setAttribute("name", "priority");

  const mediumdiv = document.createElement("div");
  const mediumlabel = document.createElement("label");
  mediumlabel.setAttribute("for", "medium");
  mediumlabel.innerHTML = "medium";
  const mediuminput = document.createElement("input");
  mediuminput.setAttribute("type", "radio");
  mediuminput.setAttribute('id', 'medium');
  mediuminput.setAttribute("value", "impact2");
  mediuminput.setAttribute("name", "priority");

  const lowdiv = document.createElement("div");
  lowdiv.className = "lowdiv";
  const lowlabel = document.createElement("label");
  lowlabel.setAttribute("for", "low");
  lowlabel.innerHTML = "low";
  const lowinput = document.createElement("input");
  lowinput.setAttribute("type", "radio");
  lowinput.setAttribute('id', 'low');
  lowinput.className = "low";
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

  newaddition.addEventListener("click", (e) => {
    e.preventDefault();
    newform.classList.remove("hidden");
  });

  newAddButton.addEventListener("click", (e) => {
    e.preventDefault();
    projectForm.value = "";
    newform.classList.add("hidden");

    function getpriority1() {
      if (highinput.checked) {
        return "high";
      }
      if (mediuminput.checked) {
        return "medium";
      }
      if (lowinput.checked) {
        return "low";
      }
      return "no priority";
    }

    const tableBody = document.createElement("tbody");
    const bodyRow = document.createElement("tr");
    const titleData = document.createElement("td");
    titleData.innerHTML = titleinput.value;
    const descData = document.createElement("td");
    descData.innerHTML = descinput.value;
    const timeData = document.createElement("td");
    timeData.innerHTML = dateinput.value;
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
    priorityData.appendChild(newcheckbox);
    deleteTable.appendChild(tableButton);
    newform.reset();

    deleteTable.addEventListener("click", (e) => {
      const tableRow = e.target.parentElement.parentElement;
      tableRow.remove();
    });

    if (completedData.innerHTML === "high") {
      completedData.classList.add("high");
    } else if (completedData.innerHTML === "medium") {
      completedData.classList.add("medium");
    } else if (completedData.innerHTML === "low") {
      completedData.classList.add("low");
    } else {
      completedData.classList.add("no-priority");
    }

    tableRow.appendChild(tableTitle);
    tableRow.appendChild(tableDesc);
    tableRow.appendChild(tableDate);
    tableRow.appendChild(tableCompleted);
    tableRow.appendChild(tablePriority);
    tableRow.appendChild(tableRemove);
    tableHead.appendChild(tableRow);
    // bodyRow.appendChild(titleData);
    // bodyRow.appendChild(descData);
    // bodyRow.appendChild(timeData);
    // bodyRow.appendChild(priorityData);
    // bodyRow.appendChild(completedData);
    // bodyRow.appendChild(deleteTable);
    // tableBody.appendChild(bodyRow);
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    generatedDiv.appendChild(table);


    const result = new item(
      titleData.innerHTML,
      descData.innerHTML,
      timeData.innerHTML,
      completedData.innerHTML,
      
    );



    items.push(result);
    localStorage.setItem("items", JSON.stringify(items));
// while (parent.firstChild) {
//   parent.firstChild.remove();
// }
    console.log(tableBody.children)
    // console.log(tableBody.children[0])
    // for (let i = 0; i < tableBody.length; i += 1) {
    //   tableBody.removeChild(tableBody.childNodes[i]);
    // }
  
      // tableBody.children.forEach(item => item.remove()) 
  

    
  

    items.forEach((item) => {
       
      const storageRow = document.createElement("tr");
      const storageTitle = document.createElement("td");
      storageTitle.innerHTML = item.title;
      const storageDesc = document.createElement("td");
      storageDesc.innerHTML = item.description;
      const storageDate = document.createElement("td");
      storageDate.innerHTML = item.dueDate;

      const storagePriority = document.createElement("td");
      storagePriority.innerHTML = item.complete;
      const storageCheckbox = document.createElement("td");
      const storageCheckInput = document.createElement("input");
      storageCheckInput.setAttribute("type", "checkbox");
      const storageDeleteTable = document.createElement("td");
      const storageTableButton = document.createElement("button");
      storageTableButton.className = "delete";
      storageTableButton.innerHTML = "X";


       if (storagePriority.innerHTML === "high") {
         storagePriority.classList.add("high");
       } else if (storagePriority.innerHTML === "medium") {
         storagePriority.classList.add("medium");
       } else if (storagePriority.innerHTML === "low") {
         storagePriority.classList.add("low");
       } else {
         storagePriority.classList.add("no-priority");
       }
    

      storageRow.appendChild(storageTitle);
      storageRow.appendChild(storageDesc);
      storageRow.appendChild(storageDate);
      storageCheckbox.appendChild(storageCheckInput);
      storageRow.appendChild(storageCheckbox);
      storageRow.appendChild(storagePriority);
      storageDeleteTable.appendChild(storageTableButton);
      storageRow.appendChild(storageTableButton);
      tableBody.appendChild(storageRow);
    });
  });

  // TABLE BODY AND DATA

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

function item(title, description, dueDate, complete = "", priority) {
  (this.title = title),
    (this.description = description),
    (this.dueDate = dueDate),
    (this.complete = complete),
    (this.priority = priority);
}
// function project(title) {
//   (this.title = title)
// }


