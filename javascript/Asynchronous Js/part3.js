// parts covered

//promise 

//here we have used same gettodojson with same request variable requesttojson but with different respective names


// promise has two outcomes i.e 1.success and 2.Failure

//on success we resolve and on failure we reject it due to some error

//resolve and reject is a builtin function in javascript used in promise
const getToDosPromise = (resource) => {
    
    return new Promise((resolve,reject) =>{
    const requestToJsonForPromise = new XMLHttpRequest();  

requestToJsonForPromise.addEventListener('readystatechange',()=>{


    if(requestToJsonForPromise.readyState === 4 && requestToJsonForPromise.status === 200){

        const data = JSON.parse(requestToJsonForPromise.responseText);
        // callback(undefined,data); now callback is not needed
        resolve(data);
    }

    else if(requestToJsonForPromise.readyState === 4){
        // callback(requestToJsonForPromise.status,undefined);
        reject('some error is found');
    }
})
requestToJsonForPromise.open('GET',resource); 

requestToJsonForPromise.send();
}
)
}

//first syntax to use promise

//.then method needs two arguments first is for resolve function and second is for reject function

// getToDosPromise('todos/contacts.json').then(data=>{
//     console.log('promise fired');
//     console.log(data);
// },err => {
//     console.log(err);
// })

// Another method to write promise

// instead of using two arguments in one then method we can use catch method

/*
getToDosPromise('todos/contacts.json').then(data=>{
        console.log('promise fired');
        console.log(data,'data from using promise resolved');
    }).catch(err=>{
        console.log(err,'error from using promise rejected');
    }) */


// promise chaining which is a better alternative for callback hell

getToDosPromise('todoss/contacts.json').then(data=>{
    console.log('promise fired');
    console.log(data,'data from using promise 1 resolved');
    return getToDosPromise('todos/books.json');
}).then(data=>{
    console.log(data,'data using promise 2 resolved');
}).catch(err=>{
    console.log(err,'from using promise rejected');
})

// The good thing about catch is that it does not have to be repeated with then nested methods it can catch any error rising from any place inside the nested code.
