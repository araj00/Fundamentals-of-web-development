const addforms = document.forms['add-book'];
addforms.addEventListener('submit',function(e){
    e.preventDefault();
    const value = addforms.querySelector('input[type = "text"]').value;
    console.log(value);

    const ul = document.querySelector('#book-list ul');

    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    ul.appendChild(li);

    bookName.textContent = value;
    deleteBtn.textContent = 'delete';

    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
})

const hidebox = addforms.querySelector('#hide');

hide.addEventListener('change',function(e){

    if(e.target.checked){
        ul.style.display = "none";
    }
    else{
        ul.style.display = "initial";
    }
})

//search filter

const searchBooks = document.forms['search-books'].querySelector('input');
searchBooks.addEventListener('keyup',function(e){
    const term = e.target.value.toLowerCase();
    const books = ul.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
            book.style.display = 'initial';
        }
        else{
            book.style.display = 'none';
        }
    })
})


const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click',function(e){
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
               panel.classList.add('active');
            }
            else{
                panel.classList.remove('active');
            }
        })
    }
})


