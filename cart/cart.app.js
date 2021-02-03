import { findById, calcItemTotal, renderCart, calcCartTotal, clearCart } from './cart.utils.js';
import getCart from './cart.utils.js';
import cocktails from '../products/cocktails.js';

const table = document.querySelector('tb');
const tfoot = document.querySelector('tfoot');

let cartTotal = 0;

const shoppingCart = getCart();


for (let item of shoppingCart) {
    const cocktail = findById(item.id, cocktails);
    const cocktailTotal = calcItemTotal(item, cocktail);

    cartTotal = cartTotal + cocktailTotal;
    const newCartRow = renderCart(item, cocktail);
    table.append(shoppingCart);
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
if (shoppingCart.length) {
    button.disabled = 'true';
} else {
    button.addEventListener('submit', () {
        clearCart();
        alert(JSON.stringify('Your order has been completed!'));
        location.reload();
        location.href = '../index.html';
    });
}