export {createHtmlListUsingArray, navBarList};
const navBarList = [];
const _parent = document.body;


const saveData = (key,obj) => {
  localStorage.setItem(`${key}`, JSON.stringify(obj));
  
}

//check local storage for array if its saved
const isThereDataInTheArrayAlready = JSON.parse(localStorage.getItem("navBarArray"));



const _pushToArray = (array, content) => {
  if(isThereDataInTheArrayAlready && array.length < isThereDataInTheArrayAlready.length){
    
    for (let i = 0; i < isThereDataInTheArrayAlready.length; i++){
      array.push(isThereDataInTheArrayAlready[i])
    }
  }
  else{
  
  array.push(content);}
  if (array.length > 1){ //because the navbar always has one main project
  saveData("navBarArray", array);}
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




