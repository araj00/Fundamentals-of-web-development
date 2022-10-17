// object literals

let user = {
    name : 'Aman Raj',
    Age: 21,
    Email:'aman02437@gmail.com',
    Blogs : ['Atomic Habits','Think like a monk'],
    likes:['milk','ghee','chicken'],
    login :function(){
        console.log('user has logged in successfully');
    },
    logout:function(){
        console.log('user has logged out successfully');
    },
    logblogs : function(){  // here normal function is used intentionally and not arrow function because this keyword work differently on arrow function
        console.log("the user has posted these blogs:");
        this.Blogs.forEach(blog =>{
            console.log(blog);
        })},

    // for example lets use array function and see the difference
    loglikes: () => {
        //console.log(this.loglikes); // this will be undefined
        console.log(this); // so the difference is when this function is used in arrow function then it refers the this keyword to the point of value from where it has been invoked.here it is referred to window global object.
    },
    
    //objects within objects
    
    travelled_places : [
        {destination: 'Patna',Times : 'always'},
        {destination:'Hubli',Times:'occasionally'}
    ],

    logtravel(){
       console.log('this is the place ' + this.name + ' has travelled:'),
       this.travelled_places.forEach(place=>{
        console.log(place.destination,place.Times);
       })
    }


};

console.log(user.name);

user.Age = 20;  
console.log(user.Age);

//second method to access properties of objects.

console.log(user['Email']);

const key = 'name';

// console.log(user.key)     👉🏽👉🏽 this will throw error because user.key will find the property with 'key' name and not its value.

console.log(user[key]);

// Therefore it is second method which is needed sometimes.But first is more preferrable.

//object methods

user.login();


// this is used to use the properties of the objects.By default the this keyword refers to windows global object.
console.log(this);
user.logblogs();
user.loglikes();

user.logtravel();


// Math objects

let num = 8.5;
console.log(Math.PI);
console.log(Math.E); //outputs euler number
console.log(Math.round(num));
console.log(Math.trunc(num)); // removes any decimal part from the number
console.log(Math.ceil(num));// outputs greatest part of the number
console.log(Math.floor(num));// opp. of  ceil

