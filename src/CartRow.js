import React from 'react';
import './styles.css';


function CartRow (props) {

    return <div>
    <div className="cart-item cart-column check-cart-item">
    <img
      className="cart-item-image"
      src={props.src}
      width="100"
      height="100"
      alt="product-thumbnail"
    />
    <span className="cart-item-title">{props.title}</span>
  </div>
  <span className="cart-price cart-column">{props.price + " €"}</span>
  <div className="cart-quantity cart-column">
    <input className="quantity-inp" type="number" value="1" />
    <button className="btn btn-danger" type="button">REMOVE</button>
  </div>
  </div>
}

export default CartRow;