const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);

const firstListItem = document.querySelector('.list-items');

// differences to be observed https://www.w3schools.com/jsref/prop_node_innertext.asp#:~:text=and%20%3Cstyle%3E%20elements.-,The%20Differences%20Between%0AinnerHTML%2C%20innerText%20and%20textContent,-The%20innerHTML%20property

li.innerText ='X-men'

console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);
console.log(firstListItem.innerText);

const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));
console.log(title.hasAttribute('id'));
console.log(firstListItem.classList.contains('list-items'));


//remove the elements

// li.remove();

//node traversal

console.log(li.parentElement);
console.log(li.parentNode);

//difference between parentelement and parentnode

const html = document.querySelector('html');
console.log(html.parentElement);
console.log(html.parentNode);

// 👉🏽👉🏽 parentelement returns the element prior to it and parent node returns the node. To clarify ,see the outputs of above two statements.

console.log(ul.childNodes);
console.log(ul.children[4]);
ul.lastElementChild.remove()

// childnodes and children is same as above mentioned point