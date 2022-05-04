import "./styles/styles.scss"
import {createHtmlListUsingArray} from './nav';
import {CheckBoxCreate, } from './main';
// import {checkBoxCreate} from "./main";


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

const testThis = (select) => {

  
  const addButton = document.querySelector('#add-to-do');
  addButton.addEventListener('click', function(){
    return select.pushToArray('taco');

  });
}
 selectNavBar(); 
testThis(selectedProject);

const appendFormInputToDom = () => {
  
  const addForm = document.forms["todo-form"];
  
  //-- urgency buttons start --
  const urgencyButtons = document.getElementsByClassName('urgencies')
  for (let i = 0; i < urgencyButtons.length; i++){
    
    urgencyButtons[i].addEventListener('click', function(){
      console.log('works');
    });
  }
  
  // -- urgency buttons end --
  addForm.addEventListener("submit", function(e){
    
    e.preventDefault();
    let todoValue = document.getElementById("task").value;
    
    selectedProject.pushToArray(todoValue);
    selectedProject.update();
    
    
    addForm.style.display="none";
    addForm.style.display="block"; 
    addForm.reset();
  });

};
appendFormInputToDom();

