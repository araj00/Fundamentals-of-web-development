window.addEventListener('click',function(){
    console.log('window');
},true);

document.addEventListener('click',function(){
    console.log('document');
},false);

document.querySelector('.div2').addEventListener('click',function(e){
    e.stopPropagation();
    console.log('div2');
},{once:true})

document.querySelector('.div1').addEventListener('click',function(){
    console.log('div1');
},true)

document.querySelector(".btn").addEventListener('click',function(e){
    e.preventDefault();
    console.log(e.target.innerText = 'clicked!');
},false)


// true value means event capturing which is executed from upper statement to lower
// false value means event bubbling which is executed from lower to upper

// if there is the combination of true or false value then first event capturing is done then event bubbling
// once is used as an one of the parameter to execute only once in the multiple times of executing

//Event delegation :- It allows users to append a SINGLE event listener to a parent that adds it to all of its present AND future descendants that match a selector.