import { addToCart } from '../cart/cart.utils.js';


export function renderCocktail(cocktail) {
    const li = document.createElement('li');
    li.classList.add('cocktail-card');
    
    const h3 = document.createElement('h3');
    h3.classList.add('cocktail-name');
    h3.textContent = cocktail.name;
    li.append(h3);
    
    const img = document.createElement('img');
    img.classList.add('cocktail-image');
    img.src = `../assets/${cocktail.image}`;
    li.append(img);

    const pDescription = document.createElement('p');
    pDescription.classList.add('cocktail-description');
    pDescription.textContent = cocktail.description;
    li.append(pDescription);
    
    const pIngredients = document.createElement('p');
    pIngredients.classList.add('cocktail-pIngredients');
    pIngredients.textContent = `Ingredients: ${cocktail.ingredients}`;
    li.append(pIngredients);
    
    const pPrice = document.createElement('p');
    pPrice.classList.add('cocktail-pPrice');
    pPrice.textContent = `$ ${cocktail.price}`;
    li.append(pPrice);
    
    const pCategory = document.createElement('p');
    pCategory.classList.add('cocktail-pCategory');
    pCategory.textContent = `Category: ${cocktail.category}`;
    li.append(pCategory);


    // Add quantity selector dropdown
    const quantitySelect = document.createElement('select');
    quantitySelect.name = 'quantity';
    quantitySelect.classList.add('quantity-select');
    
    function quantitySelector() {
        
        const option1 = document.createElement('option');
        quantitySelect.add(option1);
        option1.textContent = '1';
        option1.value = '1';
        
        const option2 = document.createElement('option');
        quantitySelect.add(option2);
        option2.textContent = '2';
        option2.value = '2';
        
        const option3 = document.createElement('option');
        quantitySelect.add(option3);
        option3.textContent = '3';
        option3.value = '3';
        
        li.append(quantitySelect);
    }
    
    const button = document.createElement('button');
    button.addEventListener('click', () => {
        const quantity = quantitySelect.value;
        addToCart(cocktail.id, quantity);
        alert('Added to Cart');
        // ADD A MESSAGE TO PAGE INSTEAD!!!!
    });

    quantitySelector();

    button.textContent = 'Add to Cart';
    li.append(button);

    return li;
}
