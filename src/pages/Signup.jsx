import React, { useState } from 'react';
import '../styles/Signup.css';

const Signup = () => {
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

    if (!isValidPhone(form.phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    alert('Signup successful!');
    // You can also save this to localStorage or backend
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <p>It's free and only takes a minute</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
