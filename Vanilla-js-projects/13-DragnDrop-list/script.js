const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
    'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page'
]

const listItems = [];



function creatList(){
    [...richestPeople].map(a => {
      return  {value : a , sort : Math.random()}
    })
        .sort((a,b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((people,index) =>{
        console.log(people);
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index',index);
        listItem.innerHTML = `<span class="number">${index+1}</span>
        <div class="draggable" draggable = "true">
        <p class="person-name">${people}</p>
        <i class="fas fa-grip-lines"></i>
        </div>`
        
        listItems.push(listItem);
        draggable_list.appendChild(listItem);
    })
}

creatList();

const draggables = document.querySelectorAll('.draggable');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart',dragStart);
    draggable.addEventListener('dragend',dragEnd);
});

listItems.forEach((listItem) =>{
    listItem.addEventListener('dragover',dragOver);
    listItem.addEventListener('dragenter',dragEnter);
    listItem.addEventListener('dragleave',dragLeave);
    listItem.addEventListener('drop',dragDrop);
})

let startIndex = null;
let endIndex = null;

function swap(fromIndex,toIndex){
    const itemOne = listItems[fromIndex].querySelector('.draggable');
    const itemTwo = listItems[toIndex].querySelector('.draggable');

    listItems[fromIndex].appendChild(itemTwo);
    listItems[toIndex].appendChild(itemOne);
    console.log(listItems);
}

function dragStart(){
    console.log('start');
    startIndex = +this.closest('li').getAttribute('data-index');
    console.log(startIndex);
}

function dragEnd(){
  this.classList.remove('over');
}

function dragOver(e){
    e.preventDefault();
}
function dragEnter(){
    this.classList.add('over');
    console.log('Enter');
}
function dragLeave(){
    this.classList.remove('over');
    console.log('leave');
}
function dragDrop(){
    console.log('drop');
    this.classList.remove('over');
    endIndex = +this.closest('li').getAttribute('data-index');
    console.log(endIndex);
    swap(startIndex,endIndex);
}

console.log(listItems);

check.addEventListener('click',function(){
    listItems.forEach((item,index) =>{
      if(item.lastElementChild.firstElementChild.textContent == richestPeople[index]){
        item.classList = 'right';
      }

      else{
        item.classList = 'wrong'
      }
       
    })
})
