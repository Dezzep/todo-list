
  export class CheckBoxCreate {

   constructor (mainDiv) {
    this.listElement = mainDiv;
    this.textList = [];
    this.colorList = []
    //add a color in the constructor. That matches textList in indexes.
  }

    static createBox (id) {
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
      return para;
    }
    static createButton(){
      let button = document.createElement("button");
      button.innerText = "Add New To Do";
      button.id = "add-to-do";
      return button;
    }
    
  
  
  update () {

    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }
    for (let i = 0; i < this.textList.length; i++){

      let div = document.createElement("div");
      div.className = 'checkbox-container';
      div.append(CheckBoxCreate.createBox(i), CheckBoxCreate.createLabel(this.textList[i], i),CheckBoxCreate.createInfoSection() );
      div.style.background = this.colorList[i];
      this.listElement.appendChild(div);

  
      
  } this.listElement.appendChild(CheckBoxCreate.createButton())}
  
  pushToArray(newElement, color){
    this.textList.push(newElement);
    
    if (color === undefined){
      color = '#96AFB8'
    }
    this.colorList.push(color);
    this.update();
  } 
  removeElement(element){
    this.textList.splice(element, 1);
    this.colorList.splice(element, 1);
    this.update()
    // if removing multiple elements at a time I need to order them from greatest to least
    //so that when the array gets manipulated, they won't delete in an incorrect order.
    //similar to my library project.. -- store del array --
  }
};









