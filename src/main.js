
  export class CheckBoxCreate {

   constructor (mainDiv) {
    this.listElement = mainDiv;
    this.textList = [];
  }

    static createBox (text, id) {
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.id = id;
      return checkBox;
    }

    static createLabel (text, id) {
      
      let label = document.createElement("label");
      label.setAttribute("for", id);
      label.innerText = text;
      return label;
    }
    static createInfoSection (){
      let para = document.createElement("p");
      para.innerText = "2/4/2022";
      return para
    }
  update () {

    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }
    for (let i = 0; i < this.textList.length; i++){

      let div = document.createElement("div");
      div.className = 'checkbox-container';
      div.append(CheckBoxCreate.createBox(this.textList[i], i), CheckBoxCreate.createLabel(this.textList[i], i),CheckBoxCreate.createInfoSection() );
      this.listElement.appendChild(div);

  
      
  }}
  pushToArray(newElement){
    this.textList.push(newElement);
    this.update()
  } 
  removeElement(element){
    let indexOfEl = this.textList.indexOf(element)
    this.textList.splice(indexOfEl, 1);
    this.update()
  }
};


const addToDo = (classToAddElementTo) => {
  const addButton = document.querySelector('#add-to-do');
  addButton.addEventListener('click', function(){
    
    classToAddElementTo.pushToArray('taco');
  } )
}

export{addToDo};




