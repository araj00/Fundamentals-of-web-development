let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');
let position = null;

btn.addEventListener('click',function(){
    
fetch('./quote_obj.json').then(response =>{
    return response.json()
}).then(data =>{
    
    position = Math.floor(Math.random() * data.length);
    quote.innerText = data[position].quote;
    person.innerText =data[position].person;
}).catch(err => {
    console.log(err.message);
})})
