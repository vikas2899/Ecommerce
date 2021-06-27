import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="brand-name">
        myShop Cart
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item active">
            <button className="nav-link">
              <span className="nav-text">Home</span>
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link">
              <span className="nav-text">Features</span>
            </button>
          </li>
          <li className="nav-item">
            <GoogleAuth />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
