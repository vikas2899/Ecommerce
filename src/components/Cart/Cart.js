import React, { Component } from "react";
import { connect } from "react-redux";
import { viewCart } from "../../actions/index";
import ItemSummary from "../ItemSummary/ItemSummary";
import "./Cart.css";

class Cart extends Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.viewCart(id);
  }

  displayList() {
    // console.log(this.props.productsList);
    // console.log(this.props.productsList[0]);
    // return Object.keys(this.props.productsList).forEach((k) => {
    //   let title = this.props.productsList[k].pTitle;
    //   let price = this.props.productsList[k].pPrice;
    //   console.log(title, price);
    //   return <ItemSummary title={title} price={price} />;
    // });
    if (Object.keys(this.props.productsList).length >= 1) {
      return Object.keys(this.props.productsList).map((k) => {
        return (
          <ItemSummary
            title={this.props.productsList[k].pTitle}
            price={this.props.productsList[k].pPrice}
            key={this.props.productsList[k].pTitle}
            id={this.props.productsList[k].productId}
            type="cart"
          />
        );
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <section className="cart-container">
        {this.props.productsList !== undefined ? this.displayList() : null}
      </section>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    productsList: state.userCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewCart: (userId) => dispatch(viewCart(userId)),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Cart);
