import "./styles/styles.scss"
import {createHtmlListUsingArray} from './nav';
import {CheckBoxCreate, } from './main';
// import {checkBoxCreate} from "./main";

const addForm = document.forms["todo-form"];
const formsContainer = document.getElementById('forms-container');
const navBarList = ['salad','balad','swalad'];
let selectedProject = 'project0'


createHtmlListUsingArray( navBarList,'nav', 'DUCKS');

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
    });
    
  }
  
};
selectNavBar(); 
// >-----------DisplayFormButton-------------
const displayFormButton = () => {

  
  const addButton = document.getElementById('add-to-do');
  addButton.addEventListener('click', function(){
    addForm.style.display = '';
    formsContainer.style.display = '';
    console.log('truu');

  });
}

//--------------DisplayFormButton---------------<
 


const appendFormInputToDom = () => {  
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
    console.log(selectedUrgency.id);      
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
    
    
    addForm.style.display="none";
    formsContainer.style.display ="none";
    addForm.reset();
  });

};
appendFormInputToDom();
displayFormButton();

