import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDB } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const {products,initialCart} = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDB(id);
    }
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div>
            <div className="shopContainer">
                <div className="order-content">
                    {
                        cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></ReviewItem>)
                    }
                    {
                        cart.length === 0 && <h2>No item for review</h2>
                    }
                </div>
                <div className="cart-container">
                    <Cart clearCart={clearCart} cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;