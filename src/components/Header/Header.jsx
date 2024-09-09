import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from '../../assets/images/Mask Group.png'
import { GiHamburgerMenu } from "react-icons/gi";



const Header = () => {

  const [click, setClick] = useState(false)
  return (
    <header className="header">
      <nav className="right">
        <Link to='/' className="logo">
          <img src={logo} alt="One Burner" className="logo-img"/>
        </Link>
        <p className="product">Products</p>
        <p className="pricing">Pricing</p>
        <Link to='/enterprise' className="enterprise">Enterprise</Link>
        <p className="support">Support</p>
      </nav>
      <nav className="left">
        <Link to='/contact' className="contact">Contact Sales</Link>
        <Link to='/login'>Login</Link>
        <button className="tryForFreeButton">Try For Free {">"} </button>
      </nav>
      <div className="mobile">
      <div className="mobile-nav">
        <Link to='/' className="logo">
          <img src={logo} alt="One Burner" className="logo-img"/>
        </Link>
      <GiHamburgerMenu className="giHamburgerMenu" onClick={()=>setClick(!click)}/>
      </div>
      {click && <div className="nav-mobile">
       <p className="product">Products</p>
       <p className="pricing">Pricing</p>
       <Link to='/enterprise' className="enterprise">Enterprise</Link>
       <p className="support">Support</p>
       <Link to='/contact' className="contact">Contact Sales</Link>
        <Link to='/login'>Login</Link>
        <button className="tryForFreeButton">Try For Free {">"} </button>
       </div>}
      </div>
    </header>
  );
};

export default Header;
