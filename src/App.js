import Header from './Header.js'
import Products from './Products.js'
import Cart from './Cart.js'
import ReadMore from './ReadMore.js'
import Footer from './Footer.js'
import Newsletter from './Newsletter.js'
import React, { useState, useEffect } from 'react'


function App() {

  // The cart
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  });

  const calculateTotal = () => {
    let totalValue = 0;
    for (let i = 0; i < cart.length; i++) {
      totalValue += cart[i].price;
    }
    setCartTotal(Math.round(totalValue * 100)/100);
  }

  const onAddToCart = (product) => {

    // check to see if the product is already in the cart
    cart.filter((product) => {
        return cart.length > 0
        }) 
      setCart([...cart, product]);
      
} 

 const onRemoveFromCart = (product) => {
    let currentCart = [...cart]; // saving the cart before removing the product
    currentCart = currentCart.filter((cartItem) => {
      return cartItem.id !== product.id
    })
    setCart(currentCart)
 }
 const onCheckOut = () => {
    if (cart !== []) {
      alert("Thank you for your purchase.");
      setCart([]);
    }  
 }

  return <div>
    <Header />
    <Products onAddToCart={onAddToCart}/>
    <Cart cartTotal={cartTotal} cart={cart} onRemoveFromCart={onRemoveFromCart} onCheckOut={onCheckOut}/>
    <ReadMore />
    <Newsletter />
    <Footer />
  </div>

}

export default App;
