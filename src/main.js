const _pushToArray = (array, content) => {
  array.push(content);
} 
const createCheckbox = (idName, appendTo) => {
  
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.id = idName;
  return appendTo.appendChild(checkBox);
};

const createLabel = (idName, displayText, appendTo) => {
  
  let label = document.createElement("label");
  label.setAttribute("for", idName);
  label.innerText = displayText;
  
  return appendTo.appendChild(label);
};

const createCheckboxAndLabelUsingArrayToDom = (arrayName, className, newContent) => {
  
  _pushToArray(arrayName, newContent);
  
  for (let i = 0; i < arrayName.length; i++){
    console.log('meep');
  }
  
  const _parent = document.body;
  const _div = document.createElement('div');
  const _divparent = document.getElementById('main');
  const _pushCheckboxAndLabelToDom = () => {

    _div.className = className;

    _div.appendChild(createCheckbox(newContent, _div ));
    _div.appendChild(createLabel(newContent, newContent, _div));

    _divparent.appendChild(_div);
  };
  _parent.append(_divparent);
  _pushCheckboxAndLabelToDom();
};

// next step, deal with duplicate Id's!



export{createCheckboxAndLabelUsingArrayToDom};