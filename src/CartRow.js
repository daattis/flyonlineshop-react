import React from 'react';
import './styles.css';


const CartRow = (props) => {

    return <div className="cart-row">
    <div className="cart-item cart-column check-cart-item">
  <img
    className="cart-item-image"
    src="https://media-exp3.licdn.com/dms/image/C4D03AQEG2iJfj1g-FA/profile-displayphoto-shrink_200_200/0/1579530013571?e=1631145600&v=beta&t=xn7JzaZldtpHMQT1KvBiSKPx_yPgKIxQK75hhPgk2Ho"
    width="100"
    height="100"
    alt="product-thumbnail"
  />
  <span className="cart-item-title">Nakkikeitto</span>
</div>
<span className="cart-price cart-column">15.00 €</span>
<div className="cart-quantity cart-column">
  <input className="quantity-inp" type="number" />
  <button className="btn btn-danger" type="button">REMOVE</button>
</div>
</div>
    
}

export default CartRow;