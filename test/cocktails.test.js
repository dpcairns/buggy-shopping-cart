import { renderCocktail } from '../products/render-cocktails.js';
import { findById, calcItemTotal, renderCart, calcCartTotal, getCart, clearCart, setCart } from '../cart/cart.utils.js';

const test = QUnit.test;

// render cocktail test
test('The function should take a cocktail and return a li', (expect) => {
    const oldFashioned = {
        id: 1,
        name: 'Old Fashioned',
        image: 'oldFashioned.jpg',
        description: 'A strong bourbon drink',
        category: 'strong',
        price: 8,
        ingredients: 'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry',
    };

    const expected = `<li class="cocktail-card"><h3 class="cocktail-name">Old Fashioned</h3><img class="cocktail-image" src="../assets/oldFashioned.jpg"><p class="cocktail-description">A strong bourbon drink</p><p class="cocktail-pIngredients">Ingredients: Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry</p><p class="cocktail-pPrice">$ 8</p><p class="cocktail-pCategory">Category: strong</p><select name="quantity" class="quantity-select"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select><button>Add to Cart</button></li>`;

    const actual = renderCocktail(oldFashioned);

    expect.equal(actual.outerHTML, expected);
});

// cart test
test('The function should take an array and an id and return the first item with a matching id', (expect) => {
    const cocktails = [
        {
            id: 1,
            name: 'Old Fashioned',
            image: 'oldFashioned.jpg',
            description: 'A strong bourbon drink',
            category: 'strong',
            price: 8,
            ingredients: 'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry',
        },
    ];

    const expected = {
        id: 1,
        name: 'Old Fashioned',
        image: 'oldFashioned.jpg',
        description: 'A strong bourbon drink',
        category: 'strong',
        price: 8,
        ingredients: 'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry',
    };
    
    const actual = findById(1, cocktails);

    expect.deepEqual(actual, expected);
});


// Item total test
test('The function should take an two objects (cartItem and cocktail), pull the price(8) from the cocktail object and quantity(2) from the cartItem and return the product of the two(16)', (expect) => {
    const cocktail = 
        {
            id: 1,
            name: 'Old Fashioned',
            image: 'oldFashioned.jpg',
            description: 'A strong bourbon drink',
            category: 'strong',
            price: 8,
            ingredients: 'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry',
        };

    const cartItem = 
        {
            id: 1,
            quantity: 2,
        };

    const expected = 16;

    const actual = calcItemTotal(cartItem, cocktail);

    expect.equal(actual, expected);
});


//cartRender function test
test('The function should take an two objects (cartItem and cocktail) and return a table row with: the item name from the cocktail, quantity from the cartItem, and run the calcItemTotal to find the total for that line item', (expect) => {
    const cocktail =
        {
            id: 1,
            name: 'Old Fashioned',
            image: 'oldFashioned.jpg',
            description: 'A strong bourbon drink',
            category: 'strong',
            price: 8,
            ingredients: 'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry',
        };

    const cartItem = 
        {
            id: 1,
            quantity: 2,
        };

    const expected = `<tr><td>Old Fashioned</td><td>2</td><td>$16</td></tr>`;

    const actual = renderCart(cartItem, cocktail);

    expect.equal(actual.outerHTML, expected);
});


//calcCartTotal function test
test('The function should take the cart array and the cocktails array and returns the total of all items in the cart', (expect) => {
    const cocktails = [
        {
            id: 1,
            name: 'Old Fashioned',
            image: 'oldFashioned.jpg',
            description: 'A strong bourbon drink',
            category: 'strong',
            price: 8,
            ingredients: 'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry',
        }, 
        {
            id: 4,
            name: 'Mojito',
            image: 'mojito.jpg',
            description: 'A refreshing rum drink',
            category: 'bubbles',
            price: 10,
            ingredients: 'White rum, mint, lime, simple syrup, club soda. Garnish: lime wedge, mint',
        }];

    const cart = [
        {
            id: 1,
            quantity: 2,
        },
        {
            id: 4,
            quantity: 3,
        }];

    const expected = 46;
    
    const actual = calcCartTotal(cart, cocktails);

    expect.equal(actual, expected);
});


//getCart test
test('check if there"s a cart in in local storage and if so, grab it from local storage', (expect) => {
    const cart = [
        {
            id: 1,
            quantity: 2,
        }];

    const expected = cart;
    
    const stringyCart = JSON.stringify(cart);

    localStorage.setItem('CART', stringyCart);

    const actual = getCart();

    expect.deepEqual(actual, expected);
});


// //clearCart test
test('stringify the empty cart and set in local storage and return empty cart', (expect) => {

    const expected = [];

    clearCart();
    
    const actual = getCart();

    expect.deepEqual(actual, expected);
});

// //setCart test
test('When given a cart array, this function should stringify it and save it in local storage', (expect) => {
    const testCart = [
        {
            id: 1,
            quantity: 2,
        }];
    const stringCart = JSON.stringify(testCart);

    const expected = localStorage.setItem('CART', stringCart);    

    const actual = setCart(testCart);

    expect.deepEqual(actual, expected);
});
