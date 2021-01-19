// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderCocktail } from './products/render-cocktails.js';

const test = QUnit.test;

test('The function should take an animal and return a li', (expect) => {
    //Arrange
    const oldFashioned = {
        id: 1,
        name: 'Old Fashioned',
        image: 'old-fashioned.jpg',
        description: 'A strong bourbon drink',
        category: 'strong',
        price: 8,
        ingredients: 'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry',
    };

    // Set up your arguments and expectations
    const expected = `<li class="cocktail-card"><div class="name">Old Fashioned</div><img src="/assets/old-fashioned.jpg" height="50px"><div class="description">'A strong bourbon drink'</div><div class="category">strong</div><div class="price">8</div><div class="ingredients">'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry'</div><button class="1">Add</button></li>`
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCocktail(oldFashioned);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

