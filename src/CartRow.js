import React from 'react';
import './styles.css';


function CartRow (props) {

    return <div class="cart-item cart-column check-cart-item">
    <img
      class="cart-item-image"
      src="${thumbnail}"
      width="100"
      height="100"
    />
    <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price + " €"}</span>
  <div class="cart-quantity cart-column">
    <input class="quantity-inp" type="number" value="1" />
    <button class="btn btn-danger" type="button">REMOVE</button>
  </div>
}

export default CartRow;