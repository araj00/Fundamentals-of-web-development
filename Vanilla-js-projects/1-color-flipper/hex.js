const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

let color;

const btn = document.querySelector('.btn-hero');
const colorText = document.querySelector('.color');

btn.addEventListener('click',function(){
color = '#';
    for(i = 0;i<6;i++){
        let randomval = Math.floor(Math.random()*hex.length);
        color += hex[randomval];
    }
    document.body.style.background = color;
    colorText.textContent = color;
})