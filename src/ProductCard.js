import React, { useState } from "react";
import Cart from "./Cart";

const ProductCard = ({product}) => {

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
    <div className="pricing-column col-lg-4 col-md-6 mb-4">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 shadow-sm">
          <a href="#!">
            <img
              className="card-img-top product-image"
              src={product.image}
              alt={product.description}
            />
          </a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#!">{product.title}</a>
            </h4>
            <h5 className="product-price">{product.price}</h5>
            <p className="card-text">{product.description}</p>
            <button
              id={product.id}
              type="button"
              className="addtocart btn btn-lg btn-block btn-outline-primary"
              onClick={() => addToCart(product)}
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
