import React from 'react';
import './Menu.css';
import StarbucksLogo from '../assets/logo.png';

const Menu = () => {
  return (
    <div className="menu">
    <div className="left-menu">
      <img src={StarbucksLogo} alt="Starbucks Logo" className="logo" /> {/* Agrega el logo */}
      <a href="/">MENU</a>
      <a href="/">REWARDS</a>
      <a href="/">GIFT CARDS</a>
    </div>
    <div className="right-menu">
    <a href="/"><i className="fas fa-map-marker-alt"></i> Find a store</a>
    <a href="/" className="oval-button sign-in">Sign in</a>
  <a href="/" className="oval-button join-now">Join now</a>
    </div>
  </div>
  );
}

export default Menu;
