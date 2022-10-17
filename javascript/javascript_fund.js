console.log(1);
console.log(2);

let $name= "Aman raj";
let _age = 21;
console.log($name,_age);

let first_name='Aman';
let last_name='Raj';
let full_name=first_name + ' ' + last_name;
console.log(full_name);
console.log(full_name[2]);
console.log(full_name.toUpperCase()); //whenever you see dots propertyname and paranthesis then it is a method. some methods can alter the variable or objects and some can not.

let result=full_name.toLowerCase();
console.log(result,full_name);

let email = 'aman02437@gmail.com';
result = email.lastIndexOf('a');
console.log(result);

console.log(email.includes('$'));

result = email.slice(2,5) // slice and substr are somewhat similar with slight difference in slice has arguments of (starting index,ending index(excluding)) whereas substr has (starting index,no.of characters to be included from that point).
console.log(result);
result= email.substr(2,5);
console.log(result);
result = email.replace('a','A'); // replace method only replace the first occurence of the character with the replaced character.
console.log(result);

//template string or template literals

let myName = 'Aman Raj';

result  = `my name is ${myName}.
And my age is ${_age}`;

console.log(result);

let numbers = [2,3,4,5];
console.log(numbers);

numbers[2] = 1;
console.log(numbers);

console.log(numbers.length);

//array methods


let names = ['aman','aniket','anmol'];
console.log(names.join(','));

console.log(names.concat(['Bob','Rohit']));

result = names.push('Bob'); // this will throw length and not the array of name in names variable with pushed value
console.log(names);
// console.log(result);

//push method alter the variable value

//null ,nan and undefined

let marks;

console.log(marks,marks+3,`my marks is ${marks}`); // since marks is undefined so any arithmetic operation on it will result into Nan otherwise undefined

marks = null;
console.log(marks,marks+3,`my marks is ${marks}`); //any arithmetic operation on null values cause the null value to be treated as 0 value. Therefore "marks + 3" = 3 in the output

let score = '100';
console.log(1 + score);

score = Number(score);
console.log(1+score, typeof score);
score = String(score);
console.log(score , typeof score);

result = Boolean(0);
console.log(result);

result = Boolean('0');
console.log(result);

result = Boolean("");
console.log(result);
