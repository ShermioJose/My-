import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CategoryBar from './components/CategoryBar';
import ImageSlider from './components/ImageSlider';
import ProductTab from './components/ProductTab';
import Products from './components/Products';
import OfferPage from './pages/OfferPage';
import About from './pages/About';
import DeliveryLocation from './pages/DeliveryLocation';
import Signup from './pages/Signup';
import Account from './pages/Account';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import Footer from './components/Footer';
import AuthPopup from './pages/AuthPopup'; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userName, setUserName] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [productView, setProductView] = useState('all');
  const [authVisible, setAuthVisible] = useState(false);

  useEffect(() => {

  }, [cartItems]);

  const addToCart = (product) => {
    if (!userName) {
      setAuthVisible(true);
      return;
    }

    setCartItems((prevItems) => {
      const existing = prevItems.find(
        (item) => item.id === product.id && item.size === product.size
      );
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productToRemove) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(item.id === productToRemove.id && item.size === productToRemove.size)
      )
    );
  };

  const renderProductSection = () => {
    if (productView === 'offer') {
      return (
        <OfferPage
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          userName={userName}
          setUserName={setUserName}
          addToCart={addToCart}
        />
      );
    } else if (productView === 'premium') {
      return (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <h2>No premium products available</h2>
        </div>
      );
    } else {
      return (
        <Products
  searchTerm={searchTerm}
  addToCart={addToCart}
  cartItems={cartItems}
  setCartItems={setCartItems}
  removeFromCart={removeFromCart}
  userName={userName}         
  setUserName={setUserName}  
/>


      );
    }
  };

  return (
    <Router>
      <Navbar />
      <CategoryBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        userName={userName}
        setUserName={setUserName}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <ImageSlider setProductView={setProductView} />
              <ProductTab setProductView={setProductView} />
              {renderProductSection()}
            </>
          }
        />
  <Route
    path="/men"
    element={
      <MenPage
        searchTerm={searchTerm}
        addToCart={addToCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
        removeFromCart={removeFromCart}
        userName={userName}
      />
    }
  />

  <Route
    path="/women"
    element={
      <WomenPage
        searchTerm={searchTerm}
        addToCart={addToCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
        removeFromCart={removeFromCart}
        userName={userName}
      />
    }
  />

  <Route
    path="/kids"
    element={
      <KidsPage
        searchTerm={searchTerm}
        addToCart={addToCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
        removeFromCart={removeFromCart}
        userName={userName}
      />
    }
  />

    
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<DeliveryLocation />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account userName={userName} onLogout={() => setUserName(null)} />} />
      </Routes>

      <Footer />

      {authVisible && (
        <AuthPopup
          onClose={() => setAuthVisible(false)}
          setUserName={setUserName}
        />
      )}
    </Router>
  );
}

export default App;
