// Element.getboundingClientRect() method returns the size of an element and its position relative to the viewport

// pageYOffset is a read- only window property that returns the number of pixels the document has been scrolled vertically.

// slice extracts a section of a string without modifying original string

// offsetTop - A Number ,representing the top position of the element , in pixels.


const date = document.querySelector('#date');
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links-container');
navToggle.addEventListener('click', function () {
    //   links.classList.toggle('show-links');
    const containerHeight = links.getBoundingClientRect().height;
    const linksheight = document.querySelector('.links').getBoundingClientRect().height;
    console.log(containerHeight);

    if (containerHeight === 0) {
        links.style.height = `${linksheight}px`;  // this  is  an inline style therefore we have to overwrite in css
    }

    else {
        links.style.height = 0;
    }
})

const navBar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');



window.addEventListener('scroll',function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navBar.getBoundingClientRect().height;
   
    // console.log(scrollHeight);
    if (scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav');
    }
    else {
        navBar.classList.remove('fixed-nav');
    }

    if (scrollHeight > 500) {
        topLink.classList.add('show-link');
    }
    else {
        topLink.classList.remove('show-link');
    }

})


const scrollBtns = document.querySelectorAll('.scroll-link');

scrollBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').slice(1);
        console.log(id);
        const section = document.getElementById(id);
        // console.log(section);
        const navHeight = navBar.getBoundingClientRect().height;
        console.log('navheight:' ,navHeight);
        const containerHeight = links.getBoundingClientRect().height;
        const fixedNav = navBar.classList.contains('fixed-nav');

        let position = section.offsetTop;
        console.log(position);
         
        position -= navHeight;
        console.log(position);

        if(!fixedNav){
            position = position-navHeight;
            console.log('if fixed',position);
        }

        if(navHeight>82){
            position = position + containerHeight;
        }
        window.scrollTo({
            top: position,
            left: 0
        })
        links.style.height = 0;
    })
})