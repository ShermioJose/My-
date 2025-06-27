import React, { useState } from 'react';
import '../styles/AuthPopup.css';

const AuthPopup = ({ onClose, setUserName }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9]{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(form.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (isSignup) {
      if (!isValidPhone(form.phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }
      if (form.password !== form.confirmPassword) {
        alert('Passwords do not match.');
        return;
      }

      alert('Signup successful!');
      setUserName(form.email);
      onClose();
    } else {
      alert('Login successful!');
      setUserName(form.email);
      onClose();
    }
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="modal-overlay">
      <div className="auth-popup">
        <button className="close-btn" onClick={onClose}>✖</button>
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        {isSignup && <p>It's free and only takes a minute</p>}

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <>
              <input name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
              <input name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
              <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
            </>
          )}
          <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
          {isSignup && (
            <input name="confirmPassword" type="password" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
          )}

          <button className="submit-btn" type="submit">{isSignup ? 'Submit' : 'Login'}</button>
        </form>

        <p className="signup-text">
          {isSignup ? (
            <>Already have an account? <span className="signup-link" onClick={toggleForm}>Login here</span></>
          ) : (
            <>Don’t have an account? <span className="signup-link" onClick={toggleForm}>Signup here</span></>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthPopup;
