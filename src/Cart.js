import React from 'react';
import CartRow from './CartRow';
import './styles.css';


function Cart () {
// renders the entire My Cart -section

    return <section className="cart" id="cart">
    <div className="pricing-header px-3 py-3 pt-md-4 pb-md-4 mx-auto text-center">
      <h1 className="display-4">My Cart</h1>
      <p className="lead">Below lies the products of your choosing. <br /></p>

      <div className="cart-row">
        <span className="cart-item cart-header cart-column">ITEM</span>
        <span className="cart-price cart-header cart-column">PRICE</span>
        <span className="cart-quantity cart-header cart-column">QUANTITY</span>
      </div>
 
      <div className="cart-items">
        <CartRow />
      </div>

      <div className="cart-total">
        <strong className="cart-total-title">Total</strong>
        <span className="cart-total-price">0.00 €</span>
      </div>

      <div className="checkout">
        <button type="button" className="btn-lg btn-ligth checkout-btn" id="checkout-btn">
          Continue to checkout
        </button>
      </div>
    </div>
  </section>
}

export default Cart;