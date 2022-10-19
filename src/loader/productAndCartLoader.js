import { getStoredCart } from "../utilities/localstorage";

export const productAndCartLoader = async () => {
    // get products data
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    //get cart
    const savedCart = getStoredCart();
    const initialCart = [];

    for(const id in savedCart){
        console.log(id);
        const addedProduct = products.find(product => product.id === id);
        if(addedProduct){
            const quantity = savedCart[id];
            addedProduct.quanitity = quantity;
            initialCart.push(addedProduct);
        }
    }

    return {products,initialCart};
}