import "./styles/styles.scss"
import {createHtmlListUsingArray} from './nav';
import {CheckBoxCreate} from './main';
// import {checkBoxCreate} from "./main";


const testArray = ['salad','balad','swalad'];


const duck = createHtmlListUsingArray( testArray,'nav', 'DUCKS');



const checkboxes = document.getElementById("main");



window.xx = new CheckBoxCreate(checkboxes);