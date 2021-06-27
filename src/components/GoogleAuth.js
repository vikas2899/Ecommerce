import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions/index";
import "../components/Navbar/Navbar.css";

class GoogleAuth extends Component {
  buttonStyle = {
    textDecoration: "none",
    color: "wheat",
    cursor: "pointer",
    background: "transparent",
    border: "none",
  };

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
  };

  renderAuthButton() {
    if (this.props.isSignedIn == null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button className="login-button" onClick={this.onSignOutClick}>
          Logout
        </button>
      );
    } else {
      return (
        <button className="login-button" onClick={this.onSignInClick}>
          Login
        </button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);
