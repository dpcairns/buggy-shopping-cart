// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCocktail } from '../products/render-cocktails.js';

const test = QUnit.test;

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
    const expected = `<li class="cocktail-card"><h3 class="cocktail-name">Old Fashioned</h3><img class="cocktail-image" src="/assets/oldFashioned.jpg"><description class="cocktail-description">A strong bourbon drink</description><category class="cocktail-category">strong</category><price class="cocktail-price">8</price><ingredients class="cocktail-ingredients">Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry</ingredients><button>Add to Cart</button></li>`
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCocktail(oldFashioned);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

