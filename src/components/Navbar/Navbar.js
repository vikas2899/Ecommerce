import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GoogleAuth from "../GoogleAuth";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <Link to="/" className="brand-name">
        myShop Cart
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item active">
            {/* <button className="nav-link">
              <span className="nav-text">Home</span>
            </button> */}
            <Link to="/" className="nav-link nav-text">
              Home
            </Link>
          </li>
          <li className="nav-item">
            {props.auth.isSignedIn ? (
              <Link
                to={`/view/${props.auth.userId}/cart`}
                className="brand-name"
              >
                My Cart
              </Link>
            ) : (
              <Link to="/" className="nav-link nav-text">
                Features
              </Link>
            )}
          </li>
          {props.auth.isSignedIn ? (
            <li className="nav-item">
              <Link
                to={`/view/${props.auth.userId}/orders`}
                className="brand-name"
              >
                Orders
              </Link>
            </li>
          ) : null}
          <li className="nav-item">
            <GoogleAuth />
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, null)(Navbar);
