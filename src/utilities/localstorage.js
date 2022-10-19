const addToDatabase = id => {

    let shoppingCart = {};

    // get stored cart value
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart =JSON.parse(storedCart);
    }
    else {
        shoppingCart = {};
    }
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
}

const getStoredCart = () => {
    let shoppingCart = {};

    // get stored cart value
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart =JSON.parse(storedCart);
    }
    return shoppingCart;
}

const removeFromDB = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {addToDatabase, getStoredCart, removeFromDB, deleteShoppingCart};