import "./styles/styles.scss"
import {createHtmlListUsingArray} from './nav';
import { createCheckboxAndLabelUsingArrayToDom } from "./main";


const testArray = ['DOGS', 'CATS', 'DOGS3'];


const duck = createHtmlListUsingArray( testArray,'nav', 'DUCKS');
const luck = createHtmlListUsingArray( testArray,'nav',  'SHUCKS!')


const x = [];
createCheckboxAndLabelUsingArrayToDom(x, 'checkbox-container', 'bilbo');
createCheckboxAndLabelUsingArrayToDom(x, 'checkbox-container', 'bilbo');
createCheckboxAndLabelUsingArrayToDom(x, 'checkbox-container', 'bilo');


