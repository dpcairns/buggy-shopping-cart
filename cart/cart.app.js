import { findById, calcItemTotal, renderCart, calcCartTotal, clearCart } from './cart.utils.js';
// import { shoppingCart } from './data.cart.js';
import { cocktails } from '../products/cocktails.js';

const CART = 'CART';
// GETTING ERROR HERE. FIX!!!!
const shoppingCart = JSON.parse(localStorage.getItem(CART));
const table = document.querySelector('tbody');
const tfoot = document.querySelector('tfoot');

let cartTotal = 0;

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
    // if cart empty, hide button !!!TO DO!!!
button.addEventListener('click', () => {
    alert(JSON.stringify('We have placed your order'));
    // NOT WORKING. SPEND SOME TIME ON THIS!!!!
    clearCart();
});

