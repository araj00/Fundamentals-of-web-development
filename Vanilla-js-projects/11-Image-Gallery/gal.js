const first = document.querySelector('.first');
const imgs = document.querySelector('.imgs')

imgs.addEventListener('click',function(e){
    const imgItems = imgs.children;
    if(e.target.tagName === 'IMG'){
       first.innerHTML = `<img src = "${e.target.src}">`;
       first.classList.add('fadein');
       Array.from(imgItems).forEach(item =>{
        if(e.target === item){
            item.classList.add('highlight');
        }
        else{
            item.classList.remove('highlight');
        }
       })
    }
    setTimeout(()=> first.classList.remove('fadein'),500)
})