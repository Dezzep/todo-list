export {createHtmlListUsingArray, navBarList};
import { tryThis, selectNavBar } from ".";
const navBarList = ['salad','balad','swalad'];
const _parent = document.body;


const _pushToArray = (array, content) => {
  array.push(content);
} 

const createHtmlListUsingArray = (newContent) =>{
  const arrayName = navBarList;
  const className = 'nav';

  
  
  _pushToArray(arrayName, newContent);
  
  
  
  const removeElements = document.getElementsByClassName(className); //remove old elements to avoid duplication
  for (let i = 0; i < removeElements.length; i++){
    removeElements[i].remove();
  }
  
  
  const _div = document.createElement('div');
  const _button = document.createElement('button');
  _button.innerText = "New Project";
  _button.id = "new-project";
  const _pushListToDom = () => {
    const ul = document.createElement('ul');
    _div.appendChild(ul);
    _div.className = `${className}`
    for(let i = 0; i<arrayName.length; i++){
      let li = document.createElement('li');
      li.innerText = `${arrayName[i]}`;
      li.id = 'project' + i;
      li.className = 'nav-options';
      
      ul.appendChild(li);
      _div.appendChild(_button);
    };
     _parent.appendChild(_div);
  };
    _pushListToDom();

};




