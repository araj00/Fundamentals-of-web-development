const counter = document.getElementById('value');
const controller = document.querySelectorAll('.btn');
let num = 0;

controller.forEach(function(item){
   item.addEventListener('click',function(e){
   if(e.currentTarget.classList.contains('increase')){
    num++;
    console.log(num);
    counter.textContent = num;
   }
   else if(e.currentTarget.classList.contains( 'decrease')){
    num--;
    if(num < 0){
        counter.style.color = 'red';
    }
    else if(num === 0){
    counter.style.color = 'black';
    }
    console.log(num);
    counter.textContent = num;
   }
   else{
    num = 0;
    console.log(num);
    counter.textContent = num;
   }

   if(num>0){
    counter.style.color = 'green';
}
else if(num < 0){
counter.style.color = 'red';
}

else{
    counter.style.color = 'black';
}
})})