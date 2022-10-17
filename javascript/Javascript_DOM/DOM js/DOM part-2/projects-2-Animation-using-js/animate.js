const btn = document.querySelector('#open-btn');
const modal_Container = document.querySelector('#modal-container');
const close_Btn = document.querySelector('#close-btn');

btn.addEventListener('click',function(){
    modal_Container.style.display = 'block';
})
close_Btn.addEventListener('click',function(){
    modal_Container.style.display = 'none';
})
window.addEventListener('click',function(e){
    if(e.target === modal_Container){
    modal_Container.style.display = 'none';
    }
})