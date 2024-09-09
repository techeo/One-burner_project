import React, { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Mask Group.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to indicate ongoing request

    try {
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        console.log('Login successful:', user);
        // Handle successful login (e.g., redirect to protected content)
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false); // Reset loading state after finish
    }
  };
  return (
    <div className="login">
      <header className="top">
      <Link to='/' className="logo">
          <img src={logo} alt="One Burner" className="logo-img"/>
        </Link>
        <div className="newCustomer">
          New Customer?{" "}
          <button className="tryForFreeButton">Try For Free {">"} </button>
        </div>
      </header>
      <div className="contianer">
      <h3 className="signin">Sign In</h3>
      <p className="welcome">Welcome Back!</p>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="form-group">
        <label htmlFor="email">Email/Username</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <div className="passwordContainer">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={togglePasswordVisibility} className="eyeIcon">
            {showPassword ? (
              <FaEyeSlash style={{ color: 'black' }} />
            ) : (
              <FaEye style={{ color: 'black' }} />
            )}
          </span>
        </div>
      </div>
      <button type="submit" className="button" disabled={isLoading}>
        {isLoading ? 'Logging In...' : 'Log In'}
      </button>
      <a href="#" className="forgotPassword">
        Forgot Password?
      </a>
      <div className="orsign-container">
          <span className="orsign">-Or sign in with:</span>
          <div className="iconContainer">
            <img
              src="src/assets/outlook-icon.png"
              alt="outlook-icon"
              className="icon"
            />
            <img
              src="src/assets/linkedin-icon.png"
              alt="linkedin-icon"
              className="icon"
            />
            <img
              src="src/assets/google-icon.png"
              alt="google-icon"
              className="icon"
            />
          </div>
        </div>
    </div>
        
      <footer className="foot">
        <p>&copy; 2020 Oneburner.com. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Login
