import './styles/styles.scss';
import { createHtmlListUsingArray, navBarList } from './nav';
import { CheckBoxCreate } from './main';
// import {checkBoxCreate} from "./main";

const _parent = document.body;

const saveData = (key, obj) => {
  localStorage.setItem(`${key}`, JSON.stringify(obj));
};

let selectedProject = 'project0';
let objectNameSelect = 'getProject0';
createHtmlListUsingArray('Stuff');

const trackProjectNumber = []; // for every nav item -- add one to array

const navBarLen = document.getElementsByClassName('nav-options');
const arrayOfObjectNames = [];
for (let i = 0; i < navBarLen.length; i++) {
  arrayOfObjectNames.push(`getProject${i}`);
}

for (let i = 0; i < navBarList.length; i++) {
  trackProjectNumber.push(`project${i}`);
  // creates dynamic variable names for new objects.
  if (navBarList.length < i) {
    window[trackProjectNumber[i]] = new CheckBoxCreate();

    saveData(`getProject${i}`, window[trackProjectNumber[i]]);
  } else {
    const parsedJSONdata = JSON.parse(localStorage.getItem(`getProject${i}`));

    window[trackProjectNumber[i]] = new CheckBoxCreate(parsedJSONdata);
  }
}

window[trackProjectNumber[0]].update(); // displays first project in main div
selectedProject = window[trackProjectNumber[0]];
objectNameSelect = arrayOfObjectNames[0];
console.log(objectNameSelect);

const selectNavBar = () => {
  const items = document.getElementsByClassName('nav-options');
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
      const currentSelected = window[trackProjectNumber[i]];
      currentSelected.update();
      selectedProject = currentSelected;
      objectNameSelect = arrayOfObjectNames[i];
      isCheckBoxChecked();
      hideExtraTaskInfo();
      clickOnCheckboxDiv();
    });
  }
};
selectNavBar();
// >-----------DisplayFormButton------------- added for redundancy, also in main.js
const displayFormButton = () => {
  const addForm = document.forms['todo-form'];
  const formsContainer = document.getElementById('forms-container');
  const addButton = document.getElementById('add-to-do');
  addButton.addEventListener('click', () => {
    hideNewProjectForm();
    addForm.style.display = '';
    formsContainer.style.display = '';
  });
};

// --------------DisplayFormButton---------------<

displayFormButton();

const appendFormInputToDom = () => {
  const addForm = document.forms['todo-form'];

  // -- urgency buttons start --
  const urgencyButtons = document.getElementsByClassName('urgencies');
  let selectedUrgency = urgencyButtons[3]; // <-- sets to selected to default
  selectedUrgency.style.border = 'black 3px solid'; // <-- need to change margin to match border below
  selectedUrgency.style.margin = '-3px'; // -3px margin stops elements from moving when clicked.
  for (let i = 0; i < urgencyButtons.length; i++) {
    urgencyButtons[i].addEventListener('click', () => {
      selectedUrgency.style.border = 'none';
      selectedUrgency.style.margin = 'auto';
      selectedUrgency = urgencyButtons[i];
      selectedUrgency.style.border = 'black 3px solid';
      selectedUrgency.style.margin = '-3px';
    });
  }

  // -- urgency buttons end --
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoValue = document.getElementById('task').value;

    let urgencyColor;
    if (selectedUrgency.id === 'important-urgent') {
      urgencyColor = '#F9F871';
    } else if (selectedUrgency.id === 'important') {
      urgencyColor = '#88F9BA';
    } else if (selectedUrgency.id === 'urgent') {
      urgencyColor = '#C65F95';
    } else {
      urgencyColor = '#96AFB8';
    }
    selectedProject.pushToArray(todoValue, urgencyColor, date);
    selectedProject.update();
    saveData(objectNameSelect, selectedProject);

    isCheckBoxChecked();

    hideNewTask();
    clickOnCheckboxDiv();
    hideExtraTaskInfo();
  });
};
appendFormInputToDom();

const newProjectCreate = () => {
  hideNewTask();
  hideExtraTaskInfo();
  hideNewProjectForm();

  const form = document.createElement('form');
  const div = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');
  const button = document.createElement('button');

  button.textContent = 'Submit';
  form.id = 'project-creation';
  label.htmlFor = 'project-create';
  label.innerText = 'New Project Name:';
  label.id = 'project-create';
  input.type = 'text';
  div.id = 'project-create-form';

  div.append(label, input, button);
  form.appendChild(div);
  _parent.appendChild(form);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    projectFormSubmit(input, form);
  });
};
const projectFormSubmit = (input, form) => {
  createHtmlListUsingArray(input.value);

  newProjectButtonPressed();
  form.remove();

  selectNavBar();
  for (let i = 0; i < navBarList.length; i++) {
    if (i === navBarList.length - 1) {
      trackProjectNumber.push(`project${i}`);
      window[trackProjectNumber[i]] = new CheckBoxCreate();
    }
  }
};

const newProjectButtonPressed = () => {
  const button = document.getElementById('new-project');
  button.addEventListener('click', () => {
    hideNewTask();
    newProjectCreate();
  });
};
newProjectButtonPressed();

const isCheckBoxChecked = () => {
  for (let i = 0; i < selectedProject.textList.length; i++) {
    const checkbox = document.getElementById(`cb${i}`);

    checkbox.addEventListener('click', () => {
      const isChecked = checkbox.checked;

      if (isChecked) {
        selectedProject.isChecked[i] = true;
      } else {
        selectedProject.isChecked[i] = false;
      }
    });
  }
};

let rememberLastClickedCheckBox;

const clickOnCheckboxDiv = () => {
  const clickedDiv = document.getElementsByClassName('more-details');

  for (let i = 0; i < selectedProject.dateAdded.length; i++) {
    clickedDiv[i].addEventListener('click', () => {
      hideNewTask();
      hideNewProjectForm();
      hideExtraTaskInfo();
      displayExtraTaskInfo(selectedProject.textDetails[i], selectedProject.dateAdded[i], selectedProject.date[i]);
      rememberLastClickedCheckBox = i;
    });
  }
};
clickOnCheckboxDiv();

const displayExtraTaskInfo = (content, date, dueDate) => {
  const divId = document.getElementById('task-info');
  const details = document.getElementById('details');
  const dateCreated = document.getElementById('date-created');
  const dateDue = document.getElementById('date-due');

  divId.style.display = 'none';
  details.value = '';
  dateCreated.textContent = '';
  dateDue.textContent = '';

  divId.style.display = '';
  details.value = content;
  dateCreated.textContent = date;

  if (dueDate.length >= 3) {
    dateDue.innerText = (`Due date: ${dueDate}`);
  }
};

const hideExtraTaskInfo = () => {
  const divId = document.getElementById('task-info');
  const details = document.getElementById('details');
  const dateCreated = document.getElementById('date-created');
  divId.style.display = 'none';
  details.value = '';
  dateCreated.textContent = '';
};
hideExtraTaskInfo();

const formMoreDetailsSubmit = () => {
  const form = document.getElementById('text-details');
  const innerTextValue = document.getElementById('details');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    selectedProject.textDetails[rememberLastClickedCheckBox] = innerTextValue.value;
    hideExtraTaskInfo();
    saveData(objectNameSelect, selectedProject);
  });
};
formMoreDetailsSubmit();

const hideNewTask = () => {
  const addForm = document.forms['todo-form'];
  const formsContainer = document.getElementById('forms-container');
  addForm.style.display = 'none';
  formsContainer.style.display = 'none';
  addForm.reset();
};
const hideNewProjectForm = () => {
  const form = document.getElementById('project-create-form');
  if (form != null) {
    form.remove();
  }
};

const deleteButton = () => {
  const dlt = document.getElementById('delete');

  dlt.addEventListener('click', () => {
    selectedProject.removeElement(rememberLastClickedCheckBox);
    saveData(objectNameSelect, selectedProject);

    clickOnCheckboxDiv();
    hideExtraTaskInfo();
  });
};
deleteButton();
hideNewTask();
