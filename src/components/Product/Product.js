import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = ({addHandlerToCart, product}) => {
    //const {addHandlerToCart, product} = props;
    const {name, img, seller, price, ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>Price {price}</p>
            <p><small>Seller: {seller}</small></p>
            <p>Rating: {ratings}</p>

            <button onClick={()=> addHandlerToCart(product)} className='btn-cart'>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

    );
};

export default Product;