// parts covered

//Using json data
//callback hell(nesting callback functions)

// json is a way of transferring the data between server and client
// In JSON ,string key and string value both must be quoted in double quoute otherwise you will get an error.

const getToDosJSON = (resource,callback) => {

    const requestToJson = new XMLHttpRequest();  

requestToJson.addEventListener('readystatechange',()=>{


    if(requestToJson.readyState === 4 && requestToJson.status === 200){

        const data = JSON.parse(requestToJson.responseText);
        callback(undefined,data);
    }

    else if(requestToJson.readyState === 4){
        callback(requestToJson.status,undefined);
    }
})

/* requestToJson.open('GET','todos/songs.json'); 

requestToJson.send();  
}

getToDosJSON((err,data)=>{
    console.log('callback fired');
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
}) */

//callback hell

requestToJson.open('GET',resource); 

requestToJson.send();  
}

getToDosJSON('todos/songs.json',(err,data) => {
    console.log('callback fired');
    if(err){
        console.log(err);
    }
    else{
        console.log(data,'data from using callback hell');
        getToDosJSON('todos/books.json',(err,data)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log(data,'data from using callback hell');
                getToDosJSON('todos/contacts.json',(err,data)=>{
                    if(err){
                        console.log(err);
                    }
                    else{
                        console.log(data,'data from using callback hell');
                }}
                )
        }
    })
    }})
