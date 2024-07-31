import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ totalItemsInCart }) {
  return (
    <nav>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <div className="logo">Boat</div>
      </Link>
      <ul>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <li>Home</li>
        </Link>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <li>Our Products</li>
        </Link>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
      <div className="search">
        <i className="fa fa-search"></i>
        <Link to="/cart" style={{ position: 'relative' }}>
          <i className="fa fa-shopping-basket"></i>
          {totalItemsInCart > 0 && (
            <span className="item-count">{totalItemsInCart}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
