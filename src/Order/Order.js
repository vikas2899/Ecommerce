import React, { Component } from "react";
import { connect } from "react-redux";
import { viewOrders } from "../actions/index";
import ItemSummary from "../components/ItemSummary/ItemSummary";
import "./Order.css";

class Order extends Component {
  componentDidMount() {
    let { id } = this.props.match.params;
    this.props.viewOrders(id);
  }

  renderOrderList() {
    if (Object.keys(this.props.productsList).length >= 1) {
      return Object.keys(this.props.productsList).map((k) => {
        return (
          <ItemSummary
            title={this.props.productsList[k].pTitle}
            price={this.props.productsList[k].pPrice}
            key={this.props.productsList[k].pTitle}
          />
        );
      });
    } else {
      return null;
    }
  }

  render() {
    return (
      <section className="order-container">
        {this.props.productsList !== undefined ? this.renderOrderList() : null}
      </section>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    productsList: state.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    viewOrders: (userId) => dispatch(viewOrders(userId)),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(Order);
