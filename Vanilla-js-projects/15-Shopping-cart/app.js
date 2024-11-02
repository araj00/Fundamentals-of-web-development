const cartBtn = document.querySelector(".cart-btn");
const closeCartBtn = document.querySelector(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

let cart = [];
let buttonsDOM = [];

class Products {
    async getProducts() {
        try {
            let result = await fetch("products.json");
            let data = await result.json();
            let products = data.items;
            products = products.map(item => {
                const { title, price } = item.fields;
                const { id } = item.sys;
                const image = item.fields.image.fields.file.url;
                return { title, price, id, image }
            })
            return products;
        }
        catch (error) {
            console.log(error);
        }
    }

}

class UI {
    displayProducts(products) {
        let result = '';
        products.forEach(product => {
            result += `
        <article class="product">
            <div class="img-container">
                <img src=${product.image} alt="product" class="product-img">
                <button class="bag-btn" data-id=${product.id}>
                    <i class="fas fa-shopping-cart"></i>
                    <span>add to cart</span>
                </button>
            </div>
            <h3>${product.title}</h3>
            <h4>$${product.price}</h4>
        </article>
        `
        });
        productsDOM.innerHTML = result;
    }
    async getBagButtons() {
        const buttons = [...document.querySelectorAll('.bag-btn')];
        buttonsDOM = buttons;
        buttons.forEach(button => {
            let id = button.dataset.id;
            console.log(id);
            let inCart = cart.find(item => { return item.id === id });
            if (inCart) {
                button.disabled = true;
                button.innerText = 'In cart';
                console.log('from if statement');
            }

            button.addEventListener('click', event => {
                event.currentTarget.innerText = 'In Cart';
                event.currentTarget.disabled = true;
                let cartItem = { ...Storage.getProduct(id), amount: 1 };
                cart = [...cart, cartItem];
                console.log(cart)
                Storage.saveCart(cart);
                this.setCartValue(cart);
                this.addCartItem(cartItem);
                this.showCart();
            })

        })
    }

    setCartValue(cart) {
        let tempTotal = 0;
        let itemsTotal = 0;
        cart.map(item => {
            tempTotal += item.price * item.amount;
            itemsTotal += item.amount;
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotal;
    }

    addCartItem(item) {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `<img src=${item.image} alt="product">
        <div>
        <h4>${item.title}</h4>
        <h5>$${item.price}</h5>
        <span class="remove-item" data-id = ${item.id}>remove</span>
        </div>
    <div>
        <i class="fas fa-chevron-up" data-id=${item.id}></i>
        <p class="item-amount">${item.amount}</p>
        <i class="fas fa-chevron-down" data-id = ${item.id}></i>
    </div>`
        cartContent.appendChild(div);
        console.log(cartContent);
    }

    showCart() {
        cartOverlay.classList.toggle('transparentBcg');
        cartDOM.classList.toggle('showCart');

    }

    setupApp() {
        cart = Storage.getCart();
        this.setCartValue(cart);
        this.populateCart(cart);
        cartBtn.addEventListener('click', this.showCart);
        closeCartBtn.addEventListener('click', this.showCart);
    }

    populateCart(cart) {
        cart.forEach(item => {
            this.addCartItem(item);
        })
    }

    cartLogic(){
        let itemId;
        clearCartBtn.addEventListener('click',() => this.clearCart());
        cartContent.addEventListener('click',(event) => {
            if(event.target.classList.contains('remove-item')){
                itemId = event.target.dataset.id;
                this.removeTheID(itemId);
                cartContent.removeChild(event.target.parentElement.parentElement);
            }

            else if(event.target.classList.contains('fa-chevron-up')){
                let amountItem = event.target;
                itemId = event.target.dataset.id;
                let tempItem = cart.find(item => item.id === itemId);
                tempItem.amount = tempItem.amount + 1;
                Storage.saveCart(cart);
                this.setCartValue(cart);
                amountItem.nextElementSibling.innerText = tempItem.amount;
            }
            else if(event.target.classList.contains('fa-chevron-down')){
                let amountItem = event.target;
                itemId = event.target.dataset.id;
                let tempItem = cart.find(item => item.id === itemId);
                if(tempItem.amount > 1){
                tempItem.amount = tempItem.amount - 1;
                Storage.saveCart(cart);
                this.setCartValue(cart);
                amountItem.nextElementSibling.innerText = tempItem.amount;
            }
            else{
                this.removeTheID(itemId);
                cartContent.removeChild(event.target.parentElement.parentElement);
            }
        }
        })
    }

    clearCart(){
        let cartItems = cart.map(item => item.id);
        cartItems.forEach((id) => this.removeTheID(id));
        while(cartContent.children.length>0){
            cartContent.removeChild(cartContent.children[0]);
        }
        this.showCart;
    }

    removeTheID(id) {
        console.log(id);
        cart = cart.filter(item => item.id !== id);
        this.setCartValue(cart);
        Storage.saveCart(cart);
        let button = this.getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `<i class = "fas fa-shopping-cart"></i><span>add to cart</span>`;
    }

    getSingleButton(id){
        return buttonsDOM.find(button => button.dataset.id === id)
    }

}

class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products));
    }
    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(product => product.id === id)
    }
    static saveCart(cart) {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('saved in cart');
    }

    static getCart() {
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    ui.setupApp();
    products.getProducts().then(data => {
        ui.displayProducts(data);
        Storage.saveProducts(data);
    }).then(function () {
        ui.getBagButtons();
        ui.cartLogic();
    })
})