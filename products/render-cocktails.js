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

    const pDescription = document.createElement('p');
    pDescription.classList.add('cocktail-description');
    pDescription.textContent = cocktail.description;
    li.append(pDescription);

    const pCategory = document.createElement('p');
    pCategory.classList.add('cocktail-pCategory');
    pCategory.textContent = `Category: ${cocktail.category}`;
    li.append(pCategory);

    const pPrice = document.createElement('p');
    pPrice.classList.add('cocktail-pPrice');
    pPrice.textContent = `$ ${cocktail.price}`;
    li.append(pPrice);

    const pIngredients = document.createElement('p');
    pIngredients.classList.add('cocktail-pIngredients');
    pIngredients.textContent = `Ingredients: ${cocktail.ingredients}`;
    li.append(pIngredients);

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    li.append(button);

    console.log(li);

    return li;
}

{/* 

<button id= 1>Add</button>
</div> */}