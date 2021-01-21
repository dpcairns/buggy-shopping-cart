export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

export function calcItemTotal(cartItem, cocktail) {
    return cartItem.quantity * cocktail.price;
} 

export function renderCart(cartItem, cocktail) {   
    const tr = document.createElement('tr');
    
    const nameTd = document.createElement('td');
    nameTd.textContent = cocktail.name;

    const quantityTd = document.createElement('td');
    quantityTd.textContent = cartItem.quantity;

    const priceTd = document.createElement('td');
    priceTd.textContent = `$${calcItemTotal(cartItem, cocktail)}`;

    tr.append(nameTd, quantityTd, priceTd);

    return tr;
}
