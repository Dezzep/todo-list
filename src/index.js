import "./styles/styles.scss"
import {createHtmlListUsingArray} from './nav';
import {CheckBoxCreate, addToDo} from './main';
// import {checkBoxCreate} from "./main";
const addButton = document.querySelector('#add-to-do');


const navBarList = ['salad','balad','swalad'];
let selectedProject;


createHtmlListUsingArray( navBarList,'nav', 'DUCKS');


const checkboxes = document.getElementById("main");

const trackProjectNumber = [] //for every nav item -- add one to array

for (let i = 0; i < navBarList.length; i++){
  trackProjectNumber.push('project' + i);
  window[trackProjectNumber[i]] = new CheckBoxCreate(checkboxes);
}

 


 const selectNavBar = () => {
  const items = document.getElementsByClassName('nav-options');
  for(let i = 0; i < items.length; i++){
    items[i].addEventListener('click', function(){
     
      let currentSelected = window[trackProjectNumber[i]]
      currentSelected.update();
      selectedProject = currentSelected;
      testThis(selectedProject);
      
      

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