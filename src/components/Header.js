import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1 className="headerTitle">Math Magicians</h1>
    <nav className="navbar">
      <Link className="navLinks" to="/">Home</Link>
      <Link className="navLinks" to="/calculator">Calculator</Link>
      <Link className="navLinks" to="/quote">Quote</Link>
    </nav>
  </header>
);

export default Header;
