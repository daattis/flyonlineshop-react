import React from 'react';
import './styles.css';


const CartRow = ({ image, title, price }) => {

    return <div className="cart-row">
    <div className="cart-item cart-column check-cart-item">
      <img
        className="cart-item-image"
        src={image}
        width="100"
        height="100"
        alt="product-thumbnail"
      />
      <span className="cart-item-title">{title}</span>
    </div>
    <span className="cart-price cart-column">{price} €</span>
    <div className="cart-quantity cart-column">
        <input className="quantity-inp" type="number" />
        <button className="btn btn-danger" type="button">REMOVE</button>
    </div>
</div>
    
}

export default CartRow;