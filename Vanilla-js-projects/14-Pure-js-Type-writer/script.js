const typeScript = function(textElement,words,wait = 3000){
    this.textElement = textElement;
    this.words = words;
    this.wait = parseInt(wait,10);
    this.txt = '';
    this.wordIndex = 0;
    this.type();
    this.isDeleting = false;
}

typeScript.prototype.type = function(){

    if(this.wordIndex === this.words.length){
        this.wordIndex = 0;
     }
    
    const currentWord = this.words[this.wordIndex];
    
    let typeSpeed = 300;
    
     
    if(!this.isDeleting && (this.txt) == currentWord){
      this.isDeleting = true;
      this.wordIndex++;
    }

    else if(this.isDeleting && (this.txt).length > 0){
        this.txt = this.txt.substring(0,(this.txt).length-1);
        typeSpeed /= 2;
        }

    else if(this.isDeleting && this.txt === ''){
        typeSpeed = 500;
        this.isDeleting = false
    }
    
    else{
        this.txt = currentWord.substring(0,(this.txt).length + 1);
    }

    this.textElement.innerHTML = `<span class = "txt">${this.txt}</span>`;

    setTimeout(()=>this.type(),typeSpeed);

}

document.addEventListener('DOMContentLoaded',init);

function init(){
    const textElement = document.querySelector('.txt-type');
    const words = JSON.parse(textElement.getAttribute('data-words'));
    const wait = textElement.getAttribute('data-wait');
    new typeScript(textElement,words,wait);
}