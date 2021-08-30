import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            {/* Logo */}
        <div className="navbar-logo">
            <h2>Whist Cards</h2>
        </div>
            {/* Links */}
            <ul className="navbar_links">   
                <li className="fas fa-shopping-cart">
                <Link to="/cart">
                Cart
                <span className="cartlogo_badge"> </span>
                </Link>
            </li>
        </ul>
            {/* Hamburger */}
            
        </nav>
     );
}
 
export default Navbar;