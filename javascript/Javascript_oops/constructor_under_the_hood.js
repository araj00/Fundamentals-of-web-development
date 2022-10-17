function calculation(num1,num2){
   this.num1 = num1;
   this.num2 = num2;
   // this.calculate = function(){
   //  console.log(num1+num2);
   // }
}

let result = new calculation(2,3);
console.log(result);

//here we have emulated the version of class to show it was like before new and this keyword

// this is how it was done before new and this keyword but in reality we don't keep methods inside the constructor ; we use prototype for that

//prototype

calculation.prototype.calculate = function(){
   console.log(this.num1 + this.num2);
}

result.calculate();

//prototype inheritance