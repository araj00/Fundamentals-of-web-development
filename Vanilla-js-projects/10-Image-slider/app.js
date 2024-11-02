const next = document.querySelector('.nextBtn');
const prev = document.querySelector('.prevBtn');
const slides = document.querySelectorAll('.slide');


console.log(slides);

slides.forEach(function(slide,index){
   slide.style.left = `${index * 100}%`;
})

let position = 0;

function carousel(slide){
    if(position < slides.length - 1){
        next.style.display = 'inline-block';
    }
    else{
        next.style.display = 'none';
    }

    if(position === 0){
        prev.style.display = 'none';
    }
    else{
        prev.style.display = 'inline-block';
    }
    slide.style.transform = `translateX(${-position * 100}%)`;
}

next.addEventListener('click',function(){
    position++;
    console.log(position);
    slides.forEach(function(slide){
        carousel(slide);
    })})

prev.addEventListener('click',function(){
    position--;
    console.log(position);
    slides.forEach(function(slide){
        carousel(slide);
    })
})

prev.style.display = 'none';