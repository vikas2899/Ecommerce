import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signIn, signOut, resetCart } from "../actions/index";
import "../components/Navbar/Navbar.css";

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "913063244562-6goi14gc3eso8j2n4co6r7efp04rbhl9.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
    this.props.resetCart();
  };

  renderAuthButton() {
    if (this.props.isSignedIn == null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        // <button className="login-button" onClick={this.onSignOutClick}>
        //   Logout
        // </button>
        <Link to="/" onClick={this.onSignOutClick} className="login-button">
          Logout
        </Link>
      );
    } else {
      return (
        <button
          className="login-button"
          onClick={this.onSignInClick}
          style={{ fontSize: "16px" }}
        >
          Login
        </button>
        // <Link to="" onClick={this.onSignInClick} className="login-button">
        //   Login
        // </Link>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (userId) => dispatch(signIn(userId)),
    signOut: () => dispatch(signOut()),
    resetCart: () => dispatch(resetCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
