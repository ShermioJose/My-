import React, { useState } from 'react';
import cartIcon from '../assets/cart_icon.png';
import '../styles/Products.css';

const ProductList = ({
  productData,
  filterCategory,
  searchTerm,
  cartItems,
  setCartItems,
  addToCart,
  removeFromCart,
  userName,
}) => {
  const [selections, setSelections] = useState({});
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  const filteredProducts = productData.filter(
    (p) =>
      (filterCategory === 'all' || p.category === filterCategory) &&
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ✅ Updated to accept size and color explicitly
  const handleAddToCart = (product, size, color) => {
    if (!userName) {
      alert('Please log in to add items to the cart.');
      return;
    }

    if (!size || !color) {
      alert('Please select both size and color.');
      return;
    }

    const existing = cartItems.find(
      item => item.id === product.id && item.size === size && item.color === color
    );

    if (existing) {
      setCartItems(prev =>
        prev.map(item =>
          item.id === product.id && item.size === size && item.color === color
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      addToCart({ ...product, size, color, quantity: 1 });
    }
  };

  const updateQuantity = (id, size, color, newQty) => {
    if (newQty <= 0) {
      removeFromCart({ id, size, color });
      return;
    }

    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.newPrice * item.quantity, 0);
  const deliveryCharge = 3;
  const total = subtotal + deliveryCharge;

  return (
    <div className="product-cart-wrapper">
      <div className="product-wrapper">
        <div className="product-section">
          <div className="product-grid">
            {filteredProducts.map(p => (
              <div
                className="product-card"
                key={p.id}
                onMouseEnter={() => setHoveredProduct(p.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  onClick={() => setSelectedImage(p.image)}
                  style={{ cursor: 'pointer' }}
                />
                <h3>{p.name}</h3>
                <p className="price">{p.newPrice}</p>

                {hoveredProduct === p.id && (
                  <>
                    <div className="color-dropdown">
                      <label>Select Color:</label>
                      <select
                        value={selections[p.id]?.color || ''}
                        onChange={(e) => {
                          const color = e.target.value;
                          setSelections(prev => ({
                            ...prev,
                            [p.id]: { size: undefined, color }
                          }));
                        }}
                      >
                        <option value="">--Choose--</option>
                        <option value="Black">Black</option>
                        <option value="White">White</option>
                        <option value="Red">Red</option>
                        <option value="Blue">Blue</option>
                      </select>
                    </div>

                    <div className="size-boxes">
                      <p>Select Size:</p>
                      {[6, 7, 8, 9, 10, 11, 12].map(size => (
                        <button
                          key={size}
                          className={`size-box ${selections[p.id]?.size === size ? 'selected' : ''}`}
                          onClick={() => {
                            const color = selections[p.id]?.color;
                            if (!color) {
                              alert('Please select a color before choosing a size.');
                              return;
                            }

                            // Update selection
                            setSelections(prev => ({
                              ...prev,
                              [p.id]: { ...prev[p.id], size }
                            }));

                            // ✅ Call with explicit color and size
                            handleAddToCart(p, size, color);
                          }}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="cart-sidebar">
        <div className="cart-header">
          <img src={cartIcon} alt="Cart" className="cart-icon-large" />
          {cartItems.length > 0 && (
            <span className="cart-count-sidebar">{cartItems.length}</span>
          )}
        </div>

        <h3>Your Cart</h3>
        {cartItems.length === 0 ? (
          <p>No items added to cart</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <p>{item.name} (Size {item.size}, Color {item.color})</p>
              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))
        )}

        <div className="cart-summary">
          <h4>📋 Order Summary</h4>
          <p>Subtotal: <span>{subtotal.toFixed(2)} QR</span></p>
          <p>Delivery: <span>{deliveryCharge.toFixed(2)} QR</span></p>
          <p className="total-line">Total: <strong>{total.toFixed(2)} QR</strong></p>
        </div>

        <div className="delivery-info">
          <h4>📦 Delivery Information</h4>

          <label>Payment Method:</label>
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
            <option value="credit">Credit Card</option>
            <option value="cash">Cash on Delivery</option>
            <option value="upi">UPI</option>
          </select>

          <label>Delivery Address:</label>
          <textarea
            placeholder="Enter your address..."
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            rows={3}
          ></textarea>
        </div>

        <button
          className={`buy-button ${cartItems.length > 0 ? 'active' : ''}`}
          disabled={cartItems.length === 0}
          onClick={() => alert('Proceeding to buy...')}
        >
          {cartItems.length >= 2 ? 'Buy All' : 'Buy'}
        </button>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged" />
        </div>
      )}
    </div>
  );
};

export default ProductList;
