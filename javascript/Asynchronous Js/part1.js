//parts covered

//1.introduction
//2.HTTP requests
//3.Status code
//4.Callback function

/* What is the need of Asynchronous Js? 

👉🏽  This is because synchronous is a sequence of statements in ordered which are executed one 
by one at a time. This makes the process tedious so to make process fast we use asynchronous js . Asynchronous means something which starts now but ends at the last. Suppose we have a sequence of statements where some of statements need to request for data from external server but this will stop other statements from being executed untill the request is completed and data returns back so here we use Asynchronous in which we give the specified statement a parameter 'callback function' which runs and completes in respond to send the data back to the statement and allowing others statement to execute further without interruption. Callback function gives back the data after all the statements have been completed in the block.*/

console.log(1);
console.log(2);

setTimeout(function(){
    console.log('Request fired');
},2000);

console.log(3);
console.log(4);

// HTTP request + status code + callback function + Using JSON data

//JSON data is the data that we get when we request the data to some API endpoints.API is just like urls .



const getToDos = (callback) => {
    
    const request = new XMLHttpRequest();  // XML is an older form of data which we used before JSON arrived.But now this is available in any data format.
    
    //readystatechange is the state which is undergone while completing the request process.

request.addEventListener('readystatechange',()=>{

    // console.log(request,request.readyState);

    if(request.readyState === 4 && request.status === 200){

        // if I change the given url in open method below then it will give some other status code like 404 and then this condition will not be executed.Try it by yourself.

        // console.log(request,request.responseText);
        
        // callback(undefined,request.responseText); 

        //Trying to change the JSON string into array of objects.Therefore I have commented out the above statement

        const data = JSON.parse(request.responseText);
        callback(undefined,data);
    }

    else if(request.readyState === 4){

        // console.log('could not fetch the data');

        callback(request.status,undefined);
    }
})

request.open('GET','https://jsonplaceholder.typicode.com/todos/'); 
// open method takes two arguments .First is what type of request we want to make and second to what endpoints we want to make requests. Here , we are setting up the requests

request.send();  // Here we send the requests
}

getToDos((err,data)=>{
    console.log('callback fired');
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})




