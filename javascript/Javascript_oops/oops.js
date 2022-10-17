let names = ['Aman','Aniket','Akash'];
console.log(names);
console.log(names.sort());

//not all things in the javascript are objects like primitive datatypes are not objects but javascript can wrap that in the object

//Like the following line of codes

let name1 = 'Aman';
console.log(name1); //this is not an object

let name2 = new String('Aniket');
console.log(name2); //this is an object
console.log(name2.length);

//object literals

/* let user = {
    name : 'Aman Raj',
    email : 'aman02437@gmail.com',
    login:function(){
        console.log(this.name,'has just logged in');
    },
    logout(){
        console.log(this.email,'has just logged out');
    }
} 

console.log(user.name);
console.log(user.email);
console.log(user);
user.login();*/

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    login(){
        console.log(this.email,'has just logged in');
        return this;
    }
    logout(){
        console.log(this.email,'has just logged out');
        return this;
    }
}

// 'new' keyword creates an empyt object
//sets the value of 'this'
//calls the constructor method

let userone = new User('Aman','aman02437@gmail.com');

let usertwo = new User('Aniket','aniket123@gmail.com');

console.log(userone.name);
userone.login().logout();// this is method chaining to do that just add return this in the object function

class admin extends User{
    deleteUser(user){
        users = users.filter(u =>{
            return u.name != user.name;
        })
    }
}

let users = [userone,usertwo];
let Admin = new admin('Prakash','prksh123@gmail.com');
console.log(Admin);
Admin.deleteUser(usertwo);
console.log(users);






