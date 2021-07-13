import React from 'react';
import './styles.css';


function CartRow (props) {

    return <div><div class="cart-item cart-column check-cart-item">
    <img
      class="cart-item-image"
      src={props.src}
      width="100"
      height="100"
      alt="product-thumbnail"
    />
    <span class="cart-item-title">{props.title}</span>
  </div>
  <span class="cart-price cart-column">{props.price + " €"}</span>
  <div class="cart-quantity cart-column">
    <input class="quantity-inp" type="number" value="1" />
    <button class="btn btn-danger" type="button">REMOVE</button>
  </div>
  </div>
}

export default CartRow;