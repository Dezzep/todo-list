import { formatRelative, subDays } from 'date-fns';

export class CheckBoxCreate {
  constructor(data) {
    this.listElement = document.getElementById('main');
    this.textList = [];
    this.colorList = [];
    this.isChecked = [];
    this.dateAdded = [];
    this.textDetails = [];
    this.date = [];
    Object.assign(this, data);
    // add a color in the constructor. That matches textList in indexes.
  }

  static createBox(id) {
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.id = `cb${id}`;
    return checkBox;
  }

  static createLabel(text, id) {
    const label = document.createElement('label');
    label.setAttribute('for', `cb${id}`);
    label.innerText = text;
    return label;
  }

  static createInfoSection() {
    const para = document.createElement('p');
    para.className = 'more-details';
    para.innerText = 'More Details';
    return para;
  }

  static createDueDate() {
    const para = document.createElement('p');
    para.innerText = 'Due Date Here';
    return para;
  }

  static createButton() {
    const button = document.createElement('button');
    button.innerText = 'Add New To Do';
    button.id = 'add-to-do';
    return button;
  }

  static hideNewProject() {
    const projectForm = document.getElementById('project-create-form');
    if (projectForm != null) {
      projectForm.remove();
    }
  }

  static hideExtraTaskInfo() {
    const divId = document.getElementById('task-info');
    const details = document.getElementById('details');
    const dateCreated = document.getElementById('date-created');
    divId.style.display = 'none';
    details.textContent = '';
    dateCreated.textContent = '';
  }

  displayFormButton() {
    const addForm = document.forms['todo-form'];
    const formsContainer = document.getElementById('forms-container');
    const addButton = document.getElementById('add-to-do');

    addButton.addEventListener('click', () => {
      CheckBoxCreate.hideNewProject();
      CheckBoxCreate.hideExtraTaskInfo();
      addForm.style.display = '';
      formsContainer.style.display = '';
    });
  }

  update() {
    const x = document.getElementById('main');
    while (x.firstChild) {
      x.removeChild(x.firstChild);
    }
    for (let i = 0; i < this.textList.length; i++) {
      const div = document.createElement('div');
      div.className = 'checkbox-container';
      div.id = `checkdiv${i}`;
      div.append(
        CheckBoxCreate.createBox(i),
        CheckBoxCreate.createLabel(this.textList[i], i),
        CheckBoxCreate.createInfoSection(),
      );
      div.style.background = this.colorList[i];
      x.appendChild(div);
    }

    x.appendChild(CheckBoxCreate.createButton());
    this.displayFormButton();
    this.wasTheCheckBoxChecked();
  }

  pushToArray(newElement, color, date) {
    this.textList.push(newElement);
    this.isChecked.push(false);
    const currentTime = formatRelative(subDays(new Date(), 0), new Date());
    this.dateAdded.push(currentTime);
    this.textDetails.push('');
    this.date.push(date.value);

    if (color === undefined) {
      color = '#96AFB8';
    }
    this.colorList.push(color);

    this.update();
  }

  removeElement(element) {
    this.textList.splice(element, 1);
    this.colorList.splice(element, 1);
    this.isChecked.splice(element, 1);
    this.date.splice(element, 1);
    this.dateAdded.splice(element, 1);
    this.textDetails.splice(element, 1);
    this.update();

    // if removing multiple elements at a time I need to order them from greatest to least
    // so that when the array gets manipulated, they won't delete in an incorrect order.
    // similar to my library project.. -- store del array --
  }

  wasTheCheckBoxChecked() {
    for (let i = 0; i < this.isChecked.length; i++) {
      if (this.isChecked[i]) {
        document.getElementById(`cb${i}`).click();
      }
    }
  }
}
