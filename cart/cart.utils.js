export function findById(id, array) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}



// 1) get cocktail from cart item 
// 2) loop through cocktails array
// 3) check id
//     a) if match = get price
//     b) else, move on 
// 4) store price 
// 5) get quantity from cart and store it 
// 6) make var to store quantity * stored price