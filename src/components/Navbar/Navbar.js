import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src='logo.jpg' className='logo' alt='logoimg' />
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <span className="navbar-icon">&#9776;</span>
      </button>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">More</a></li>
          <button className="button" href='#'>Sign Up</button>

        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
