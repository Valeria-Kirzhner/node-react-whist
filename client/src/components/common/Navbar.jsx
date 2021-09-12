import React, { useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import Basket from "./Basket";



const Navbar = ({cartItems , onAddToCart , onRemoveFromCart, countCartItems, onPay }) => {

  
  const [ show, setShow ] = useState(false);// toggle button cart

    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <div className="container">
          <Link className="nav-item nav-link" to="/">
            Whist Cards
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-item nav-link ml-5" to="/Admin">
                    Admin
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item nav-link ml-5" to="/stats">
                    Statistics
                  </NavLink>
                </li>
            </ul>
          </div>

          <div className="float-right">
               <div className="btn-group">
               {countCartItems ? (<span className="badge badge-pill red"> {countCartItems} </span>) : (  '' )}

                <button className="btn dropdown-toggle"  data-toggle="dropdown" type="button" onClick={ () => setShow(!show)}  aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-shopping-cart pl-0"></i>
                </button>  
                < Basket onAddToCart={onAddToCart} show={show} setShow={setShow} onPay={onPay} cartItems={cartItems} onRemoveFromCart={onRemoveFromCart} countCartItems={cartItems.length} />
              </div>
            </div>

        </div>
      </nav>
    );
  }


export default Navbar;