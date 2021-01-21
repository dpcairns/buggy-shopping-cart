// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCocktail } from '../products/render-cocktails.js';
import { findById, calcItemTotal } from '../cart/cart.utils.js';

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
test('The function should take an item and an array, pull the price(8) from the cocktails array and quantity(2) from the cartItem and return the product of the two(16)', (expect) => {
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
    const expected = 
        16;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcItemTotal(cartItem, cocktail);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
