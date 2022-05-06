import "./styles/styles.scss"
import {createHtmlListUsingArray, navBarList} from './nav';
import {CheckBoxCreate, } from './main';
// import {checkBoxCreate} from "./main";

const _parent = document.body;

let selectedProject = 'project0';


createHtmlListUsingArray('DUCKS');

const checkboxes = document.getElementById("main");
const trackProjectNumber = [] //for every nav item -- add one to array


for (let i = 0; i < navBarList.length; i++){
  trackProjectNumber.push('project' + i);
  window[trackProjectNumber[i]] = new CheckBoxCreate(checkboxes);
}


window[trackProjectNumber[0]].update();
selectedProject = window[trackProjectNumber[0]] 

 const selectNavBar = () => {
  const items = document.getElementsByClassName('nav-options');
  for(let i = 0; i < items.length; i++){
    items[i].addEventListener('click', function(){
     
      let currentSelected = window[trackProjectNumber[i]]
      currentSelected.update();
      selectedProject = currentSelected;
      isCheckBoxChecked();
    });
    
  }
  
};
selectNavBar(); 
 // >-----------DisplayFormButton------------- added for redundancy, also in main.js
const displayFormButton = () => {

  
  const addForm = document.forms["todo-form"];
  const formsContainer = document.getElementById('forms-container');
  const addButton = document.getElementById('add-to-do');
  addButton.addEventListener('click', function(){
    addForm.style.display = '';
    formsContainer.style.display = '';
  });
}

//--------------DisplayFormButton---------------<
 
displayFormButton();

const appendFormInputToDom = () => {
  
  const addForm = document.forms["todo-form"];
  const formsContainer = document.getElementById('forms-container');
  
  //-- urgency buttons start --
  const urgencyButtons = document.getElementsByClassName('urgencies')
  let selectedUrgency = urgencyButtons[3]; // <-- sets to selected to default
  selectedUrgency.style.border = "black 3px solid"; //<-- need to change margin to match border below
  selectedUrgency.style.margin = "-3px"; //-3px margin stops elements from moving when clicked.
  for (let i = 0; i < urgencyButtons.length; i++){
    
    urgencyButtons[i].addEventListener('click', function(){
      selectedUrgency.style.border = 'none'
      selectedUrgency.style.margin = "auto";
      selectedUrgency = urgencyButtons[i];
      selectedUrgency.style.border = "black 3px solid"
      selectedUrgency.style.margin = '-3px';
    });
  }
  
  
  // -- urgency buttons end --
  addForm.addEventListener("submit", function(e){
    
    e.preventDefault();
    let todoValue = document.getElementById("task").value;
    let urgencyColor;     
    if(selectedUrgency.id === 'important-urgent'){
      urgencyColor = '#F9F871';
    }
    else if(selectedUrgency.id === 'important'){
      urgencyColor = '#88F9BA';
    }
    else if(selectedUrgency.id === 'urgent'){
      urgencyColor = '#C65F95';
    }
    else{
      urgencyColor = '#96AFB8';
    }
    selectedProject.pushToArray(todoValue, urgencyColor);
    selectedProject.update();
    
    isCheckBoxChecked();
    console.log(selectedProject.isChecked);
    
    
    addForm.style.display="none";
    formsContainer.style.display ="none";
    addForm.reset();
  });

};
appendFormInputToDom();

const newProjectCreate = () => {
  const form = document.createElement("form");
  const div = document.createElement("div");
  const label = document.createElement("label");
  const input = document.createElement("input");
  
  form.id = "project-creation";
  label.htmlFor = "project-create";
  label.innerText = "New Project Name:";
  label.id = "project-create";
  input.type = "text";
  div.className = "project-create-forum"

  div.append(label, input);
  form.appendChild(div);
  _parent.appendChild(form);
  
  form.addEventListener("submit", function(e){
  
 
    e.preventDefault();
    projectFormSubmit(input,form);

  });
}
const projectFormSubmit = (input, form) => {
  createHtmlListUsingArray(input.value);
  
  newProjectButtonPressed();
  form.remove();
  
    selectNavBar();
    for (let i = 0; i < navBarList.length; i++){
      if (i === navBarList.length -1){
        trackProjectNumber.push('project' + i);
        window[trackProjectNumber[i]] = new CheckBoxCreate(checkboxes);
      }
      
  }
}

const newProjectButtonPressed = () => {
  const button = document.getElementById("new-project");
  button.addEventListener('click', function() {
    const addForm = document.forms["todo-form"];
    const formsContainer = document.getElementById('forms-container');

    addForm.style.display ='none';
    formsContainer.style.display = 'none';
    newProjectCreate();
  });
}
newProjectButtonPressed();

const isCheckBoxChecked = () => {
  for (let i = 0; i < selectedProject.textList.length; i++){
    let checkbox = document.getElementById('cb' + i);
    
    checkbox.addEventListener("click", function(){
      let isChecked = checkbox.checked;
      
    if(isChecked){
      selectedProject.isChecked[i] = true;
      console.log(`${selectedProject.textList[i]} = true`)
    }
    else{
      selectedProject.isChecked[i] = false;
      console.log(`${selectedProject.textList[i]} = false`)
    }
    });
    };
  };

 