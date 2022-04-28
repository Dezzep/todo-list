

const navList = [];                
const addToNav = (documentID, navClass, navName) =>{

  if(typeof documentID != 'string' || typeof navClass != 'string' || typeof navName != 'string'){
    throw 'Arguments must be strings!';
  }
  //Nav list is global in this module
  const _addToNavList = () => {
    navList.push(navName);
  } 
  _addToNavList();
  const id = document.getElementById(documentID);
  const pushToNav = () => {
    const ul = document.createElement('ul');
    const element = document.createElement('div');
    element.appendChild(ul);
    element.className = `${navClass}`
    for(let i = 0; i<navList.length; i++){
      let li = document.createElement('li');
      li.innerText = `${navList[i]}`;
      li.id = `nav${i}`
      ul.appendChild(li);
    };
    
    return id.appendChild(element);
  };
    pushToNav();
};

export {addToNav};