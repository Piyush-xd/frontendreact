// Signup.js
import React, { useState } from 'react';

function Signup() {
  // State to hold form values
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Update state with form values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${formData.username}, Email: ${formData.email}, Password: ${formData.password}`);
  };

  return (
    <div style={{ width: '300px', margin: '100px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Username:</label>
          <input
            type="text"
            placeholder='Username'
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type="email"
            placeholder='E-mail'
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type="password"
            placeholder='Password'
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginBottom: '5px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px', width: '100%', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
