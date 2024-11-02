const btn = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-times');

const sideBar = document.querySelector('.sidebar');

btn.addEventListener('click',function(){
    sideBar.classList.toggle('show-sidebar');
})

close.addEventListener('click',function(){
    sideBar.classList.remove('show-sidebar');
})