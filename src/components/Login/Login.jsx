import React, { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <header className="header">
        <p className="logo">
          <b>one</b>burner
        </p>
        <div className="newCustomer">
          New Customer?{" "}
          <button className="tryForFreeButton">Try For Free {">"} </button>
        </div>
      </header>
      <div className="container">
        <h3 className="signin">Sign In</h3>
        <p className="welcome">Welcome Back!</p>
        <div className="form-group">
          <label htmlFor="email">Email/Username</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="passwordContainer">
            <input type={showPassword ? "text" : "password"} id="password" />
            <span onClick={togglePasswordVisibility} className="eyeIcon">
              {showPassword ? (
                <FaEyeSlash style={{ color: "black" }} />
              ) : (
                <FaEye style={{ color: "black" }} />
              )}
            </span>
          </div>
        </div>
        <button type="submit" className="button">
          Log In
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
      <footer className="footer">
        <p>&copy; 2020 Oneburner.com. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default Login;
