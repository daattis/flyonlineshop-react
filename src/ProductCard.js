import React, { useState } from "react";
import Cart from "./Cart";

function ProductCard(data) {

  const [cart, setCart] = useState([]);

  function addToCart (product) {
    setCart([...cart, product]);
    
    return <div>
      {cart.map((product) => {
        return (
          <Cart 
            id={product.id}
            title={product.title}
            src={product.src}
            price={product.price} />
        )
      })}</div>
      
    }

  return (
    <div key={data.key} className="pricing-column col-lg-4 col-md-6 mb-4">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 shadow-sm">
          <a href="#!">
            <img
              className="card-img-top product-image"
              src={data.image}
              alt={data.description}
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#!">{data.title}</a>
            </h4>
            <h5 className="product-price">{data.price}</h5>
            <p className="card-text">{data.description}</p>
            <button
              id={data.id}
              type="button"
              className="addtocart btn btn-lg btn-block btn-outline-primary"
              onClick={() => addToCart(data)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
