import React from 'react';
import './styles.css';
import data from './productdata.js'
import ProductsInfo from './ProductsInfo'
import ProductCard from './ProductCard'


//this is the entire products-section

function Products ({ onAddToCart }) {
    
  return <section className="products"> 
    <ProductsInfo />

    <div className="container">
    <div id="products-row" className="row">

    {data.map(product => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart}/>)}

    </div>
    </div>
  </section>
}

export default Products;