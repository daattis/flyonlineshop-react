import Header from './Header.js'
import Products from './Products.js'
import Cart from './Cart.js'
import ReadMore from './ReadMore.js'
import Footer from './Footer.js'
import Newsletter from './Newsletter.js'
import React, { useState } from 'react'


function App() {

  // The cart
  const [cart, setCart] = useState([]);

  const onAddToCart = (product) => {
      setCart([...cart, product]);
      
  } 

  return <div>
    <Header />
    <Products onAddToCart={onAddToCart} />
    <Cart cart={cart} />
    <ReadMore />
    <Newsletter />
    <Footer />
  </div>

}

export default App;
