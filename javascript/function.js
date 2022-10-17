const grade = null;

switch(grade){
    case 'A':console.log('you got A grade');
             break;
    case 'B':console.log('you got B grade');
             break;
    default:console.log('Invalid Input');
}

//function and function expression

function greet(){
   console.log('Good Morning!');
}

greet();
greet();

// speak(); this will throw an error

const speak = function(){  // this is the function expression
    console.log('hello everybody');
}

speak();

//There is a slight difference , though being same to the extent , in function and function expression and that is hoisting which means if we declare function and invoke from anywhere be it before the function declaration still it gonna excuted properly but this does not happen in function expression it has to be declared first before being invoked. In above example invoke speak function first before its declaration you will get an errror.

//array function

const value = (key) =>{
    return key - 2;
}

const result = value(3); 
console.log(result);

//callback function - passed to a another function as an argument or returns another function as a result

// Functions are first class objects - stored in a variable (expression), passed as an argument to another function, return from the function(closure)

// Higher Order function - accepts another function as an argument or returns another function as a result

const myFunc = callbackfunc =>{
    let value = 50;
    callbackfunc(value);
}

myFunc(value =>{
    console.log(value);
})

let arrayName = ['aman','aniket','anmol','anmol','rohit']; 


 //if you use only person as a parameter then repeated value in array is gonna come with single value with no. of iteration.

const logperson = (person,index) =>{ 
    console.log(index,person);
}

// arrayName.forEach(function (person,index){
//     console.log(index,person);
// });

arrayName.forEach(logperson);

const ol = document.querySelector('.people');

let html = '';

arrayName.forEach(function(person){
    html += `<li style = "color:purple">${person}</li>`;
})

ol.innerHTML = html;


// map

//does return a new array
//does not change the size of original array
//uses value from original array when making new one

const people =[{name:'Aman Raj',occupation:'Student',salary:300},
               {name:'Aniket',occupation:'Student',salary:200},
               {name:'Bob',occupation:'Student',salary:100} ];

const ages = people.map((person)=>{
    console.log(person);
    return `<h1>${person.name}</h1>`;
})

console.log(ages);

document.body.innerHTML += ages.join();

// find

// returns single instance - (in this case object)
// returns first match ,if no match is found then undefined
// great for getting unique value

const occupation = people.find(occ=>{
    return occ.occupation === 'Student';
})

console.log(occupation);

// reduce

//iterates,callback function
//reduces to a single value - number,Array,object
// 1 parameter ('acc') - total of all calculations
// 2 parameter ('curr') - current iteration/value

const total = people.reduce(function(acc,currItem){
    console.log(`total ${acc}`);
    acc += currItem.salary;
    console.log(`total salary ${acc}`);
    return acc;
},200)

//here 200 is the initial value to total.

console.log(total);
