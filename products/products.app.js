import { cocktails } from './cocktails.js';
import { renderCocktail } from './render-cocktails.js';

const list = document.getElementById('list');

for (let cocktail of cocktails) {
    const cocktailElement = renderCocktail(cocktail);

    list.append(cocktailElement);
}