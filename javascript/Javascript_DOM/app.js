// get element by Id

var banner = document.getElementById('page-banner');
console.log(banner);

var titles = document.getElementsByClassName('title');
console.log(titles);

var lis = document.getElementsByTagName('li');
console.log(lis);

for(let i = 0;i<lis.length;i++){
    console.log(lis[i]); 
}

// Here the reader might think that since lis,banner or title is an array ,then looping can be done by forEach() method also.But this is not the case.

//using forEach() method to demonstrate the above statement

// lis.forEach(function(person){
//     console.log(person);
// })   
//👉🏽👉🏽  above method throws error

//checking whether above variables are an array or not

console.log(Array.isArray('lis')); // returns False showing that it is not an array but an Html collection

//converting Html collection into an array

console.log(Array.isArray(Array.from('lis'))); //Array.from() method turns the whatever html collection passed into paranthesis.

let wmf = document.querySelector('#book-list li:nth-child(2) .name');
console.log(wmf);

let booklists = document.querySelector('#book-list li'); // since i have passed to select all li elements but it returns only one element
console.log(booklists);

//To select all elements with the same class or tag name use document.querySelectorAll

booklists = document.querySelectorAll('#book-list li');

// to change text of the elements we use textcontent

// booklists.forEach(function(book){
// book.textContent+='(book title)';})


// querySelectorAll returns a node list and not an html collection therefore we can use forEach() method without converting it into array.

booklists = document.querySelector('#book-list');
console.log(Array.isArray('booklists'));// returns false hence implies that querySelector does not return array but an HTML collection


// innerHTML is used to fill the html tag inside the div , id or class.

// booklists.innerHTML+=`<h2>more books to be added</h2>`;

// NODES

console.log('#book-list has node type is :',booklists.nodeType);

/*  If the node is an element node, the nodeType property will return 1.

If the node is an attribute node, the nodeType property will return 2.

If the node is a text node, the nodeType property will return 3.

If the node is a comment node, the nodeType property will return 8.*/

console.log('#book-list has node name is :',booklists.nodeName);
console.log('#book-list has child nodes is :',booklists.hasChildNodes());

// How to clone a node

let clonedbooklists = booklists.cloneNode(true); // passing true as an argument here means to copy the node deeply i.e with all its child node
console.log(clonedbooklists);  

// traversing DOM 

console.log('parent node of the booklists:',booklists.parentNode);
console.log('parent node of the booklists:',booklists.parentElement);

console.log('child nodes of the booklists:',booklists.childNodes);
console.log('child nodes of the booklists:',booklists.children);

console.log('previous node of the booklists',booklists.previousSibling);
console.log('previous node of the booklists',booklists.previousElementSibling);

console.log('next sibling of the booklists',booklists.nextSibling);
console.log('next sibling of the booklists',booklists.nextElementSibling);

booklists.previousElementSibling.querySelector('p').innerHTML += '<h2>This is site awesome and cool</h2>';