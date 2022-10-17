function User(name,email){
    this.name = name;
    this.email = email;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email,'has logged in');
}

User.prototype.logout = function(){
    this.online =false;
    console.log(this.email,'has just logged out');
}

let userone = new User('Aniket','aniket123@gmail.com');
let usertwo = new User('Ansh','ansh021@gmail.com');

userone.login();
console.log(userone.online)
usertwo.logout();



function admin(...args){ // ...args takes the argument in the form of array
 User.apply(this,args); // here this keyword has the reference to admin object
  this.role = 'super admin';
}

// we can use an alternative

// function admin(name,email){
//     User.call(this,name,email);
// }

admin.prototype = Object.create(User.prototype); // used to inherit the User method

admin.prototype.deleteUser = function(u){
   users = users.filter(user =>{
    return user.name != u.name;
   })
}

let Admin = new admin('Aman','aman02437@gmail.com');
Admin.login();

let users = [userone,usertwo,Admin];

Admin.deleteUser(users[2]);

console.log(Admin);
console.log(users);

