export function renderCocktail(cocktail) {
    const li = document.createElement('li');
    li.classList.add('cocktail-card');

    const h3 = document.createElement('h3');
    h3.classList.add('cocktail-name');
    h3.textContent = cocktail.name;
    li.append(h3);

    const img = document.createElement('img');
    img.classList.add('cocktail-image');
    img.src = `/assets/${cocktail.image}`;
    li.append(img);

    const description = document.createElement('description');
    description.classList.add('cocktail-description');
    description.textContent = cocktail.description;
    li.append(description);

    const category = document.createElement('category');
    category.classList.add('cocktail-category');
    category.textContent = cocktail.category;
    li.append(category);

    const price = document.createElement('price');
    price.classList.add('cocktail-price');
    price.textContent = cocktail.price;
    li.append(price);

    const ingredients = document.createElement('ingredients');
    ingredients.classList.add('cocktail-ingredients');
    ingredients.textContent = cocktail.ingredients;
    li.append(ingredients);

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    li.append(button);

    console.log(li);

    return li;
}

{/* 

<button id= 1>Add</button>
</div> */}