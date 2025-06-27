import React from 'react';
import productData from '../data/Product';
import ProductList from './ProductList';

const MenPage = ({ searchTerm, addToCart, cartItems, setCartItems, removeFromCart, userName }) => {
  return (
    <ProductList
      productData={productData}
      filterCategory="Men"
      searchTerm={searchTerm}
      addToCart={addToCart}
      cartItems={cartItems}
      setCartItems={setCartItems}
      removeFromCart={removeFromCart}
      userName={userName}
    />
  );
};

export default MenPage;
