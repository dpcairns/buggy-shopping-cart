const CART = 'CART';
const defaultEmptyCart = [];

function findById(id, array) {
    for (let item of array) {
        if (id === id) {
            return item;
        }
    }
}

export function calcItemTotal(cartItem, cocktail) {
    return cartItem.quantity * cocktail.price;
} 

export function renderCart(cocktail, cartItem) {   
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
    
        cartTotal === cartTotal + cocktailTotal;
    }
    return cartTotal;
}

export function getCart() {
    const stringCart = localStorage.getItem(cart);

    return stringCart;

}

export function clearCart() {
    const stringyDefaultCart = JSON.stringify(defaultEmptyCart);

    localStorage.setItem(CART, stringyDefaultCart);
}

export function setCart(cart) {
    const stringyCart = JSON.stringify(cart);

    localStorage.setItem(CART, stringyCart);
}

export function addToCart(id, addQuantity) {
    const cart = getCart();
    const cartItem = findById(id, cart);

    if (cartItem) {
        cartItem.quantity += addQuantity;
    } else {
        const newItemInCart = {
            id: id,
            quantity: addQuantity,
        };
        cart.push(newItemInCart);
    }

    return cart;
    
}

export function toastFunction = (quantity) {
    const x = document.getElementById('toast');
    x.className = 'show';
    x.textContent = `${quantity} added to cart`;
    setTimeout(function(){ x.className = x.className.replace('show', 'toast'); }, 3000);
}