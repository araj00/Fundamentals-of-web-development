// parts covered

//fetch API
//Async and await

//fetch returns a response object which further returns json data using Json() method

/* 

fetch('todos/songs.json').then(response =>{
    console.log('resolved using fetch API',response);
    return response.json();
}).then(data =>{
    console.log(data,'data obtained from fetch API methods');
}).catch(err =>{
    console.log('some error found while using fetch API',err);

})
*/

// Even if you pass API endpoints url wrong promise is not going to be rejected because it is only going to be rejected when you are offline or when you can't reach to API. Therefore ,you will still see the resolved message passed in resolve function.

const waitToDO = async() =>{

    const response = await fetch('todos/books.json');
    if(response.status !== 200){
        throw new Error('cannot fetch the data')
    }
    const data = await response.json();
    // if the response is an invalid json then the error will be due to data variable otherwise from response variable
    return data;
}

console.log(1);
console.log(2);

waitToDO()
    .then((data) => console.log(data,'resolved using async and await'))
    .catch(err => console.log('Rejected using async and await: ',err.message));
console.log(3);
console.log(4);