import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>ToDo List</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{' '}
      |{' '}
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '10px'
};

const linkStyle = {
  color: '#fff',
  padding: '5px'
};

export default Header;
