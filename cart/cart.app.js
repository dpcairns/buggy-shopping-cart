import { findById, calcItemTotal, renderCart, calcCartTotal, clearCart, getCart } from './cart.utils.js';
// import { shoppingCart } from './data.cart.js';
import { cocktails } from '../products/cocktails.js';

const table = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');

let cartTotal = 0;

// const CART = 'CART';
const shoppingCart = getCart();


for (let item of shoppingCart) {
    const cocktail = findById(item.id, cocktails);
    const cocktailTotal = calcItemTotal(item, cocktail);

    cartTotal = cartTotal + cocktailTotal;

    const newCartRow = renderCart(item, cocktail);

    table.append(newCartRow);
}

//Total row
const tr = document.createElement('tr');

const totalTd1 = document.createElement('td');
totalTd1.textContent = `Order total`;

const totalTd2 = document.createElement('td');

cartTotal = calcCartTotal(shoppingCart, cocktails);
const totalTd3 = document.createElement('td');
totalTd3.textContent = ` $${cartTotal}`;

tr.append(totalTd1, totalTd2, totalTd3);
tfoot.append(tr);

// Click handler for Place Order
const button = document.querySelector('button');
if (shoppingCart.length === 0) {
    button.disabled = 'true';
} else {
    button.addEventListener('click', () => {
        clearCart();
        alert(JSON.stringify(shoppingCart, true, 2));
        location.reload();
        location.href = '../index.html';
    });
}

// // Dropdown for quantity
// fontList.addEventListener('change', () => {
//     nameField.style.fontFamily = "roboto";
// })