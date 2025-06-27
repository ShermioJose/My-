import React from 'react';
import productData from '../data/Product';
import ProductList from '../pages/ProductList';

const Products = ({ searchTerm, addToCart, cartItems, setCartItems, removeFromCart, userName }) => {
  return (
    <ProductList
      productData={productData}
      filterCategory="all"
      searchTerm={searchTerm}
      addToCart={addToCart}
      cartItems={cartItems}
      setCartItems={setCartItems}
      removeFromCart={removeFromCart}
      userName={userName}
    />
  );
};

export default Products;
