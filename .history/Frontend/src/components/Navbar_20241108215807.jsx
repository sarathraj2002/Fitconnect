import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import { assets } from '../assets/assets';
const Navbar = () => {
  return (
     <nav className="navbar">
    {/* Logo */}
    <div className="navbar-logo">
      <img src={assets.logo} alt="Logo" />
    </div> 
    <div className='head'>
      FitConnect
    </div>

      
        <Link to="/">Home</Link></li>
        <Link to="/client">Client</Link></li>
        <Link to="/trainer">Trainer</Link></li>
        <Link to="/admin">Admin</Link></li>

        <Link to="/about">About Us</Link></li>
      
    </nav>
  );
};

export default Navbar;
