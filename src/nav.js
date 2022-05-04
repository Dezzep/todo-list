export {createHtmlListUsingArray};

const _parent = document.body;


const _pushToArray = (array, content) => {
  array.push(content);
} 

const createHtmlListUsingArray = (arrayName, className, newContent) =>{


  if(typeof arrayName != 'object' || typeof className != 'string' || typeof newContent != 'string'){
    throw 'Arguments must be strings!';
  }
  
  _pushToArray(arrayName, newContent);
  
  const newProjectCreate = () => {
    const form = document.createElement("form");
    const div = document.createElement("div");
    const label = document.createElement("label");
    const input = document.createElement("input");
    
    form.id = "project-creation";
    label.htmlFor = "project-create";
    label.innerText = "New Project Name:";
    label.id = "project-create";
    input.type = "text";
    div.className = "project-create-forum"

    div.append(label, input);
    form.appendChild(div);
    _parent.appendChild(form);
    
    form.addEventListener("submit", function(e){
    
   
      e.preventDefault();
      projectFormSubmit(input,form);

    });
  }
  const projectFormSubmit = (input, form) => {
    console.log(input.value);
    form.remove();
  }

  const newProjectButtonPressed = () => {
    const button = document.getElementById("new-project");
    button.addEventListener('click', function() {
      const addForm = document.forms["todo-form"];
      const formsContainer = document.getElementById('forms-container');

      addForm.style.display ='none';
      formsContainer.style.display = 'none';
      newProjectCreate();
    });
  }
  
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
    return _parent.appendChild(_div);
  };
    _pushListToDom();
    newProjectButtonPressed();

};




