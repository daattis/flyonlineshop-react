import React from 'react';
import './styles.css';
import RenderProducts from './RenderProducts.js'

function Products () {
    return <section class="products">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h1 class="display-4">Products</h1>
      <p class="lead">
        Hand made fishing flies mostly for river fly fishing.
        <br />
        The products are made from carefully chosen quality materials, and are quite durable.
        <br />         
      </p>
    </div>

    <div class="container">
      <div id="products-row" class="row">
       <RenderProducts />
      </div>
    </div>
  </section>
}

export default Products;