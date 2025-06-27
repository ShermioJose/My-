import React from 'react';
import '../styles/ProductTab.css';

const ProductTab = ({ setProductView }) => {
  return (
    <div className="filter-tabs">
      <button className="tab-button" onClick={() => setProductView('all')}>ALL</button>
      <button className="tab-button" onClick={() => setProductView('offer')}>OFFERS</button>
      <button className="tab-button" onClick={() => setProductView('premium')}>PREMIUM</button>
    </div>
  );
};

export default ProductTab;
