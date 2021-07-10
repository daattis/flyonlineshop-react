import React from 'react';
import './styles.css';
import data from './productdata.js'
import ProductsInfo from './ProductsInfo'
import RenderProducts from './RenderProducts'


//this is the entire products-section

function Products () {
    
  return <section className="products"> 
    <ProductsInfo />

    {data.map(RenderProducts)}

  </section>
}

export default Products;