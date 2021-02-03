import { cocktails } from './cocktails.js';
import { renderCocktail } from './render-cocktails.js';

const list = document.getElementById('List');

for (let cocktail in cocktails) {
    const cocktailElement = renderCocktail(cocktails);

    list.append(cocktail);
}