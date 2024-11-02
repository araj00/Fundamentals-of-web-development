const btn = document.querySelector('.fa-bars');
const links = document.querySelector('.links');

btn.addEventListener('click',function(){
    links.classList.toggle('show-links');
})
