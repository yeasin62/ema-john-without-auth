import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product,handleRemoveItem}) => {
    console.log(product);
    const {name,img,price, quantity,shipping,id}= product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="detail_inner">
                <div className="review-details-container">
                    <p>{name}</p>
                    <p><small>Price: {price}</small></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>

                </div>
                <div className="delete-items">
                    <button onClick={()=>handleRemoveItem(id)} className='button-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
