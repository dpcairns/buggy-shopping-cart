export function renderCocktail(cocktail) {
    const li = document.createElement('li');
    li.classList.add('cocktail-card');

    h3.classList.add('cocktail-name');
    Headers.textContent = cocktail.name;
    li.append(h3);
}

{/* 
<div id= 'name'>Old Fashioned</div>
<img src= '/assets/old-fashioned.jpg' height="50px">
<div id= 'description'>'A strong bourbon drink'</div>
<div id= 'category'>strong</div>
<div id= 'price'>8</div>
<div id= 'ingredients'>'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry'</div>
<button id= 1>Add</button>
</div> */}