import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button';
import '../App.css';

export default function Login({
  email,
  password,
  setEmail,
  setPassword,
  handleLogin,
  errorMessage,
}) {
  return (
    <div className="login-container1">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-form"> 
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="input-field"
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className={`input-field ${errorMessage ? 'input-error' : ''}`}
        />

        {/* Show error for email or password */}
        {errorMessage && (
          <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>
        )}

        <div className="forgot-link">
          <Link to="/forgot-password">Forgot password?</Link>
        </div>

        <Button type="submit" className="login-button">
          Login
        </Button>

        <p className="register-text">
          Don’t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}