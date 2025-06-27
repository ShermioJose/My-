import React from 'react';
import productData from '../data/Product';
import ProductList from './ProductList';

const WomenPage = ({ searchTerm, addToCart, cartItems, setCartItems, removeFromCart, userName }) => {
  return (
    <ProductList
      productData={productData}
      filterCategory="Women"
      searchTerm={searchTerm}
      addToCart={addToCart}
      cartItems={cartItems}
      setCartItems={setCartItems}
      removeFromCart={removeFromCart}
      userName={userName}
    />
  );
};

export default WomenPage;
