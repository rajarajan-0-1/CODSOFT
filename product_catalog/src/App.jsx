import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to cart
  const addToCart = (product) => {
    console.log('Adding to cart:', product);
    setCartItems((prevItems) => {
      const itemInCart = prevItems.find((item) => item.id === product.id);
      if (itemInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  console.log('Cart Items:', cartItems); 

  return (
    <Router>
      <div className="">
        <Header totalItemsInCart={totalItemsInCart}/>
        <Routes>
          <Route path="/" element={<MainContent addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart className='cart_container' cartItems={cartItems} />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
