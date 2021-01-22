const CART = 'CART';
const defaultEmptyCart = [];

export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcItemTotal(cartItem, cocktail) {
    return cartItem.quantity * cocktail.price;
} 

export function renderCart(cartItem, cocktail) {   
    const tr = document.createElement('tr');
    
    const nameTd = document.createElement('td');
    nameTd.textContent = cocktail.name;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = `$${calcItemTotal(cartItem, cocktail)}`;

    tr.append(nameTd, quantityTd, priceTd);

    return tr;
}

export function calcCartTotal(cart, cocktails) {
    let cartTotal = 0;

    for (let item of cart) {

        const cocktail = findById(item.id, cocktails);
        const cocktailTotal = calcItemTotal(item, cocktail);
    
        cartTotal = cartTotal + cocktailTotal;
    }
    return cartTotal;
}

export function getCart() {
    const stringCart = localStorage.getItem(CART);
    if (stringCart) {
        const parsedCart = JSON.parse(stringCart);
        return parsedCart;
    } else {
        const stringDefaultCart = JSON.stringify(defaultEmptyCart);
        localStorage.setItem(CART, stringDefaultCart);

        return defaultEmptyCart;
    }
}

export function clearCart() {
    const stringyDefaultCart = JSON.stringify(defaultEmptyCart);

    localStorage.setItem(CART, stringyDefaultCart);
}


export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);

    localStorage.setItem(CART, stringyCart);
}


// addToCart
// 1. Make it so you can click on products and add them to the cart in localStorage

    // a) We need a button to click
    // b) Add an event listener to the button
    // c) On click, we should
    //      -Look at the id of the thing we clicked on.
    //      -We should add/increment that item in the cart. 0) Get the cart from localStorage
//              - Check if an item with this ID is already in the cart.
                // -If so, increment the quantity
                // -If it's not in the cart, put one in there with a quantity of 1.
// 2. Load the cart page from localStorage
    // a) Grab the cart from localStorage, and store it in a variable.
    // b) Replace our hard-coded cart with that variable.