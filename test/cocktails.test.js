// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCocktail } from '../products/render-cocktails.js';
import { findById, calcItemTotal, renderCart, calcCartTotal, getCart } from '../cart/cart.utils.js';

const test = QUnit.test;

// render cocktail test
test('The function should take an animal and return a li', (expect) => {
    //Arrange
    const oldFashioned = {
        id: 1,
        name: 'Old Fashioned',
        image: 'oldFashioned.jpg',
        description: 'A strong bourbon drink',
        category: 'strong',
        price: 8,
        ingredients: 'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry',
    };

    // Set up your arguments and expectations
    const expected = `<li class="cocktail-card"><h3 class="cocktail-name">Old Fashioned</h3><img class="cocktail-image" src="../assets/oldFashioned.jpg"><p class="cocktail-description">A strong bourbon drink</p><p class="cocktail-pIngredients">Ingredients: Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry</p><p class="cocktail-pPrice">$ 8</p><p class="cocktail-pCategory">Category: strong</p><button>Add to Cart</button></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCocktail(oldFashioned);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

// cart test
test('The function should take an array and an id and return the first item with a matching id', (expect) => {
    //Arrange
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

    // Set up your arguments and expectations
    const expected = {
        id: 1,
        name: 'Old Fashioned',
        image: 'oldFashioned.jpg',
        description: 'A strong bourbon drink',
        category: 'strong',
        price: 8,
        ingredients: 'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry',
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(1, cocktails);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


// Item total test
test('The function should take an two objects (cartItem and cocktail), pull the price(8) from the cocktail object and quantity(2) from the cartItem and return the product of the two(16)', (expect) => {
    //Arrange
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

    // Set up your arguments and expectations
    const expected = 16;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(cartItem, cocktail);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//cartRender function test
test('The function should take an two objects (cartItem and cocktail) and return a table row with: the item name from the cocktail, quantity from the cartItem, and run the calcItemTotal to find the total for that line item', (expect) => {
    //Arrange
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

    // Set up your arguments and expectations
    const expected = `<tr><td>Old Fashioned</td><td>2</td><td>$16</td></tr>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCart(cartItem, cocktail);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


//calcCartTotal function test
test('The function should take the cart array and the cocktails array and returns the total of all items in the cart', (expect) => {
    //Arrange
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

    // Set up your arguments and expectations
    const expected = 46;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcCartTotal(cart, cocktails);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//getCart test
test('check if there"s a cart in in local storage and if so, grab it from local storage', (expect) => {
    //Arrange
    const cart = [
        {
            id: 1,
            quantity: 2,
        }];

    // Set up your arguments and expectations
    const expected = cart;
    
    const stringyCart = JSON.stringify(cart);

    localStorage.setItem('CART', stringyCart);
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getCart();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});


// //clearCart test !!!NEED TO FIX!!!
// test('Clear the cart in local storage', (expect) => {
//     //Arrange
//     const defaultEmptyCart = [];
//     const stringyCart = JSON.stringify(defaultEmptyCart);

//     // Set up your arguments and expectations
//     const expected = stringyCart;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = clearCart();

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.deepEqual(actual, expected);
// });

// //setCart test !!!NEED TO FIX!!!
// test('When given a cart, this function should save it in local storage', (expect) => {
//     //Arrange
//     const cart = [
//         {
//             id: 1,
//             quantity: 2,
//         }];
//     const stringyCart = JSON.stringify(cart);

//     // Set up your arguments and expectations
//     const expected = stringyCart;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = setCart(cart);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual, expected);
// });
