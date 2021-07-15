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
  const [productQuantity, setProductQuantity] = useState(0);

  useEffect(() => {
    calculateTotal();
  });

  const calculateTotal = () => {
    let totalValue = 0;
    for (let i = 0; i < cart.length; i++) {
      totalValue += cart[i].price ;
    }
    setCartTotal(Math.round(totalValue * 100)/100);
  }

  const onAddToCart = (product) => {
    console.log(cart, product, product.id);
    if (cart.filter(p => p.id === product.id).length > 0) {
      alert("This item has already been added to the cart.")
    } else {
      setCart([...cart, product]);  
    }
     
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

 const onModifyCartAmount = (product) => {
  let productQuantity = 1;
  setProductQuantity(productQuantity + 1)
  console.log(product.id) // This works
}

  return <div>
    <Header />
    <Products onAddToCart={onAddToCart}/>
    <Cart 
      cartTotal={cartTotal} 
      cart={cart} 
      onRemoveFromCart={onRemoveFromCart} 
      onCheckOut={onCheckOut}
      onModifyCartAmount={onModifyCartAmount}
      
      />
    <ReadMore />
    <Newsletter />
    <Footer />
  </div>

}

export default App;