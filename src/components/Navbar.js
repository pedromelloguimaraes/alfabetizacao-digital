import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
      </div>
      <div>
        <Link to="/login" style={linkStyle}>Login</Link>
      </div>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 20px',
  backgroundColor: '#333',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
};

export default Navbar;