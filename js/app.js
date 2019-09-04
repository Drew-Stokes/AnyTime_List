const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;


//This function creates the list elements as well as the up, down, and remove buttons
function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1){
    attachListItemButtons(lis[i]);
}

//Below are the the event listenrs for the logic of each button
listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
    }
    if (event.target.className == 'up') {
        let li = event.target.parentNode;
        let prevLi = li.previousElementSibling;
        let ul = li.parentNode;
        ul.insertBefore(li, prevLi);
    }
    if (event.target.className == 'down') {
        let li = event.target.parentNode;
        let priorLi = li.nextElementSibling;
        let ul = li.parentNode;
        if(priorLi) {
        }   ul.insertBefore(priorLi, li);
    }   
  }
});




//hide or showlist logic 
toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'HideList';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
  }
});
//list description input
descriptionButton.addEventListener('click', () => {
   descriptionP.innerHTML = descriptionInput.value + ':';
   descriptionInput.value = '';
});
                              
//logic for adding new list items to the DOM
addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});