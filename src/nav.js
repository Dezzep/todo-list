export {createHtmlListUsingArray};

const _pushToArray = (array, content) => {
  array.push(content);
} 

const createHtmlListUsingArray = (arrayName, className, newContent) =>{


  if(typeof arrayName != 'object' || typeof className != 'string' || typeof newContent != 'string'){
    throw 'Arguments must be strings!';
  }
  
  _pushToArray(arrayName, newContent);
  
  const removeElements = document.getElementsByClassName(className); //remove old elements to avoid duplication
  for (let i = 0; i < removeElements.length; i++){
    removeElements[i].remove();
  }
  
  const _parent = document.body;
  const _div = document.createElement('div');
  const _pushListToDom = () => {
    const ul = document.createElement('ul');
    _div.appendChild(ul);
    _div.className = `${className}`
    for(let i = 0; i<arrayName.length; i++){
      let li = document.createElement('li');
      li.innerText = `${arrayName[i]}`;
      ul.appendChild(li);
    };
    return _parent.appendChild(_div);
  };
    _pushListToDom();
};
