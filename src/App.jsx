// src/App.js
import   { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './NavBar';
import Home from './Home';
import About from './About';
import Products from './Products';
import Contact from './Contact';
import Cart from './Cart'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from 'react-use-cart';
import Login from './Login';


function App() {
  const [cartInfo,setCartInfo] = useState('')
  return (
    <Router>    
      <div className="App">
        <CartProvider>
        <Navbar cartInfo={cartInfo}/>
        <Routes>
          
       <Route path='/' element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart setCartInfo={setCartInfo}/>}/>
        </Routes>
        </CartProvider>
      </div>
    </Router>
  );
}

export default App;
