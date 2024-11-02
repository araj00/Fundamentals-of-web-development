const btn = document.querySelector('.switch-btn');

const vid = document.querySelector('.video-container');
const preloader = document.querySelector('.preloader');
btn.addEventListener('click',function(e){
    if(!btn.classList.contains('slide')){
        console.log(e.target);
        btn.classList.add('slide');
        vid.play()
    }
    else{
        console.log(e.target);
        btn.classList.remove('slide');
        vid.pause();
    }
})

window.addEventListener('load',function(){
  preloader.classList.add('hide-preloader');
})