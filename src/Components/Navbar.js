import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
const Navbar = () => {
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <p>Portfolio</p>
        </div>

        <nav className='nav'>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        </nav>
      
    </div>
    </>
  );
};

export default Navbar;
