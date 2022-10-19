import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDatabase, deleteShoppingCart, getStoredCart } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData();
    const [cart,setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(()=>{
        const storedCart = getStoredCart();
        const saveCart = [];
        for(const id in storedCart){
            const addedProducts = products.find(product => product.id === id);
            if(addedProducts){
                const quantity = storedCart[id];               
                addedProducts.quantity = quantity;
                saveCart.push(addedProducts);
            }
        }
        setCart(saveCart);
    },[products]);

    const addHandlerToCart = (selectedProduct)=> {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart,selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest,exists];
        }
        setCart(newCart);

        addToDatabase(selectedProduct.id);
    }
    return (
        <div className='shopContainer'>
            <div className="product-container">
                <h2>Product Information {products.length}</h2>
                <div className="product-content">
                    {
                        products.map(product => <Product key={product.id} product = {product} addHandlerToCart={addHandlerToCart}></Product>)    
                            
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to="/orders">
                        <button>Review Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;