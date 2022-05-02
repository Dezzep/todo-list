import "./styles/styles.scss"
import {createHtmlListUsingArray} from './nav';
import {CheckBoxCreate, addToDo} from './main';
// import {checkBoxCreate} from "./main";


const navBarList = ['salad','balad','swalad'];


createHtmlListUsingArray( navBarList,'nav', 'DUCKS');


const checkboxes = document.getElementById("main");

const trackProjectNumber = []
const trackProjectNumber2 = ['soup'];



for (let i = 0; i < navBarList.length; i++){
  trackProjectNumber.push('project' + i);
  window[trackProjectNumber[i]] = new CheckBoxCreate(checkboxes);
}

 addToDo(project0);