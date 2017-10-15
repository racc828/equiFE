import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-inner">
      <div className="container">
        <h1>Equidestined</h1>
        <NavLink to="/about">About</NavLink>
      </div>
    </div>
  );
};

export default Footer;
