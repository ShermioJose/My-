

import React from 'react';
import offerProducts from '../data/OfferProduct';
import '../styles/Products.css'; 

const OfferPage = ({ addToCart }) => {
  return (
    <div className="product-section">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>🔥 Exclusive Offers</h2>
      <div className="product-grid">
        {offerProducts.map(product => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <p className="price">${product.newPrice}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
