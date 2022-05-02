import "./styles/styles.scss"
import {createHtmlListUsingArray} from './nav';
import {CheckBoxCreate, addToDo} from './main';
// import {checkBoxCreate} from "./main";


const navBarList = ['salad','balad','swalad'];


createHtmlListUsingArray( navBarList,'nav', 'DUCKS');


const checkboxes = document.getElementById("main");



window.xx = new CheckBoxCreate(checkboxes);

addToDo(xx);