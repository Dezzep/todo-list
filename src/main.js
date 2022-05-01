
  export class CheckBoxCreate {

   constructor (mainDiv) {
    this.listElement = mainDiv;
    this.textList = ['test','420','555'];
  }

    static createBox (text) {
      let checkBox = document.createElement("input");
      checkBox.setAttribute("type", "checkbox");
      checkBox.id = text;
      return checkBox;
    }

    static createLabel (text) {
      
      let label = document.createElement("label");
      label.setAttribute("for", text);
      label.innerText = text;
      return label;
    }
  update () {

    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }
    for (const text of this.textList){
      let div = document.createElement("div");
      div.className = 'checkbox-container';
      div.appendChild(CheckBoxCreate.createBox(text));
      div.appendChild(CheckBoxCreate.createLabel(text));
      this.listElement.appendChild(div);

  
      
  }}
  pushToArray(newElement){
    this.textList.push(newElement);
    this.update()
  } 
  removeElement(element){
    let indexOfEl = this.textList.indexOf(element)
    this.textList.splice(indexOfEl, 2);
    this.update()
  }
};










