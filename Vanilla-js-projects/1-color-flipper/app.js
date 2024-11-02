const colors =["green","red", "rgba(133,122,200)","#f15025"];

const btn = document.querySelector('.btn-hero');
const color = document.querySelector('.color');

btn.addEventListener('click',function(){
    let randomcolor = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randomcolor];
    console.log(colors[randomcolor]);
    color.textContent = colors[randomcolor];
})