/* const btns = document.querySelectorAll('#book-list .delete');

btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);

    })
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click',function(e){
    e.preventDefault();
    console.log('navigation to site ',link.textContent,' is prevented');
})   */

// the above method has some demerits because addeventlistener is added to each of these buttons at the loading time only so in time if you add another element li into the source code then it won't work on that element.

//Hence , Event bubbling is used

// so if you add any other li in source code after resource loading the below snippet of code will help in deleting the clicked li element.

const ul = document.querySelector('#book-list ul');

ul.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
    }
})



