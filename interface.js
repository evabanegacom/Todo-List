function first(div) {
  const h1 = document.createElement('h1');
  const span = document.createElement('span');
  span.innerHTML = 'TODO';
  span.className = 'styling';
  const span2 = document.createElement('span');
  span2.innerHTML = 'List';

  const addProject = document.createElement('div');
  addProject.className = 'input-div';
  const projectInput = document.createElement('input');
  projectInput.className = 'input';
  projectInput.setAttribute('id', 'projectForm');
  projectInput.setAttribute('type', 'text');
  projectInput.setAttribute('placeholder', 'enter a project');

  const projectButton = document.createElement('button');
  projectButton.setAttribute('id', 'addProjectBtn');
  projectButton.className = 'addButton';
  const addIcon = document.createElement('i');
  addIcon.className = 'fas fa-plus';
  const project = document.createElement('div');
  project.className = 'container';
  const projectItems = document.createElement('div');
  projectItems.className = 'item';
  const projectName = document.createElement('h4');
  // projectName.setAttribute('type', 'text')
  // projectName.setAttribute('value', 'sport')
  projectName.className = 'item-input';
  projectName.innerHTML = 'Sport';
  // projectName.setAttribute('disabled')
  // const projectEdit = document.createElement('button');
  // projectEdit.className = 'editButton';
  // projectEdit.innerHTML = 'Edit';
  const projectDelete = document.createElement('button');
  projectDelete.className = 'removeButton';
  projectDelete.innerHTML = 'Remove';
  const AddProjectItem = document.createElement('button');
  AddProjectItem.className = 'editButton';
  AddProjectItem.setAttribute('id', 'addtaskbtn');
  AddProjectItem.innerHTML = 'Add';

  // Add items to project form
  const form = document.createElement('form');
  form.setAttribute('id', 'addTask');
  form.className = 'hidden'

  const formDiv1 = document.createElement('div');
  const label1 = document.createElement('label');
  label1.setAttribute('for', 'title');
  label1.innerHTML = 'Title';
  const input1 = document.createElement('input');
  input1.className = 'input1';
  input1.setAttribute('type', 'text');
  input1.setAttribute('placeholder', 'enter title');

  const formDiv2 = document.createElement('div');
  const label2 = document.createElement('label');
  label2.setAttribute('for', 'title');
  label2.innerHTML = 'describe';
  const input2 = document.createElement('input');
  input2.setAttribute('type', 'text');
  input2.className = 'input2';

  input2.setAttribute('placeholder', 'description');

  const formDiv3 = document.createElement('div');
  const label3 = document.createElement('label');
  label3.setAttribute('for', 'title');
  label3.innerHTML = 'Due Date';
  const input3 = document.createElement('input');
  input3.setAttribute('type', 'text');
  input3.className = 'input3';

  input3.setAttribute('placeholder', 'mm/dd/yyyy');

  const options = document.createElement('div');
  options.className = 'options';

  const highdiv = document.createElement('div');
  const highlabel = document.createElement('label');
  highlabel.setAttribute('for', 'high');
  highlabel.innerHTML = 'High';
  const highinput = document.createElement('input');
  highinput.setAttribute('type', 'radio');
  highinput.setAttribute('id', 'high');
  highinput.className = 'higher';
  highinput.setAttribute('value', 'impact');
  highinput.setAttribute('name', 'priority');

  const mediumdiv = document.createElement('div');
  const mediumlabel = document.createElement('label');
  mediumlabel.setAttribute('for', 'medium');
  mediumlabel.innerHTML = 'medium';
  const mediuminput = document.createElement('input');
  mediuminput.setAttribute('type', 'radio');
  mediuminput.setAttribute('id', 'medium');
  mediuminput.setAttribute('value', 'impact2');
  mediuminput.setAttribute('name', 'priority');

  const lowdiv = document.createElement('div');
  lowdiv.className = 'lowdiv';
  const lowlabel = document.createElement('label');
  lowlabel.setAttribute('for', 'low');
  lowlabel.innerHTML = 'low';
  const lowinput = document.createElement('input');
  lowinput.setAttribute('type', 'radio');
  lowinput.setAttribute('id', 'low');
  lowinput.id = 'low';
  lowinput.setAttribute('value', 'impact1');
  lowinput.setAttribute('name', 'priority');

  const addDiv = document.createElement('div');
  const addButton = document.createElement('button');
  addButton.setAttribute('id', 'submittaskbtn');
  addButton.className = 'add';
  addButton.innerHTML = 'Add to Project';

  // Tables

  const table = document.createElement('table');
  table.className = 'tables';
  const tableHead = document.createElement('thead');
  const tableRow = document.createElement('tr');
  const tableTitle = document.createElement('th');
  tableTitle.innerHTML = 'Title';
  const tableDesc = document.createElement('th');
  tableDesc.innerHTML = 'Description';
  const tableDate = document.createElement('th');
  tableDate.innerHTML = 'Due date';
  const tableCompleted = document.createElement('th');
  tableCompleted.innerHTML = 'completed?';
  const tablePriority = document.createElement('th');
  tablePriority.innerHTML = 'priority';
  const tableRemove = document.createElement('th');
  tableRemove.innerHTML = 'remove';

  const tableBody = document.createElement('tbody');
  const bodyRow = document.createElement('tr');
  const titleData = document.createElement('td');
  titleData.innerHTML = 'Task1';
  const descData = document.createElement('td');
  descData.innerHTML = 'A book about Brittany and preciousssssssss';
  const timeData = document.createElement('td');
  timeData.innerHTML = 'Due Date';
  const completedData = document.createElement('td');
  completedData.innerHTML = 'HIGH';
  completedData.className = 'high';
  const priorityData = document.createElement('td');
  const tableInput = document.createElement('input');
  const deleteTable = document.createElement('td');
  tableInput.setAttribute('type', 'checkbox');
  const tableButton = document.createElement('button');
  tableButton.className = 'delete';
  tableButton.innerHTML = 'X';

  const generatedProjectItems = document.createElement('div');
  generatedProjectItems.className = 'Generateditem';

  projectItems.appendChild(generatedProjectItems);

  priorityData.appendChild(tableInput);
  deleteTable.appendChild(tableButton);

  h1.appendChild(span);
  h1.appendChild(span2);
  projectButton.appendChild(addIcon);
  addProject.appendChild(projectInput);
  addProject.appendChild(projectButton);
  projectItems.appendChild(projectName);
  //projectItems.appendChild(projectEdit);
  projectItems.appendChild(projectDelete);
  projectItems.appendChild(AddProjectItem);
  formDiv1.appendChild(label1);
  formDiv1.appendChild(input1);
  formDiv2.appendChild(label2);
  formDiv2.appendChild(input2);
  formDiv3.appendChild(label3);
  formDiv3.appendChild(input3);
  highdiv.appendChild(highlabel);
  highdiv.appendChild(highinput);
  mediumdiv.appendChild(mediumlabel);
  mediumdiv.appendChild(mediuminput);

  lowdiv.appendChild(lowlabel);
  lowdiv.appendChild(lowinput);
  options.appendChild(highdiv);
  options.appendChild(mediumdiv);
  options.appendChild(lowdiv);
  form.appendChild(formDiv1);
  form.appendChild(formDiv2);
  form.appendChild(formDiv3);
  form.appendChild(options);
  projectItems.appendChild(form);
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
  projectItems.appendChild(table);
  project.appendChild(projectItems);
  div.appendChild(h1);
  div.appendChild(addProject);
  div.appendChild(project);

  addDiv.appendChild(addButton);
  form.appendChild(addDiv);
}

function render() {
  const main = document.querySelector('#main');
  const div = document.createElement('div');
  div.className = 'maindiv';
  first(div);
  main.appendChild(div);
  document.body.appendChild(main);
}

export default render;