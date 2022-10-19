import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart, clearCart,children} = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total+product.price * product.quantity;
        shipping = shipping+product.shipping;
    }
    let tax = parseFloat((total * 0.1).toFixed(2));
    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2>Product Summary</h2>
            <p>Selected items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total shipping charge: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: ${grandTotal}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;