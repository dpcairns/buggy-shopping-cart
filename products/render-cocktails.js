export function renderCocktail(cocktail) {
    const li = document.createElement('li');
    li.classList.add('cocktail-card');

    const h3 = document.createElement('h3');
    h3.classList.add('cocktail-name');
    h3.textContent = cocktail.name;
    li.append(h3);

    const img = document.createElement('img');
    img.classList.add('cocktail.image');
    img.src = `../assets/${cocktail.image}`;
    li.append(img);


    console.log(li);

    return li;
}

{/* 
<img src= '/assets/old-fashioned.jpg' height="50px">
<div id= 'description'>'A strong bourbon drink'</div>
<div id= 'category'>strong</div>
<div id= 'price'>8</div>
<div id= 'ingredients'>'Bourbon, simple syrup, bitters. Garnish: orange peel, maraschino cherry'</div>
<button id= 1>Add</button>
</div> */}