let modal = document.getElementsByClassName('content-container');
let previousQuestion = null;

Array.from(modal).forEach(function(item){
    item.addEventListener('click',function(e){
        if(!e.target.classList.contains('active') && previousQuestion === null){
        previousQuestion = item;
        item.classList.toggle('active');
        }
        else if(previousQuestion !== null && !item.classList.contains('active')){
            previousQuestion.classList.remove('active');
            previousQuestion = item;
            console.log('bsdk');
        item.classList.toggle('active');
        }
        else{
            previousQuestion = null;
            item.classList.toggle('active');
        }
    })
})