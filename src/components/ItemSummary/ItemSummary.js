import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import jsonServer from "../../axios/jsonServer";
import { deleteOrder, deleteCart } from "../../actions/index";
import "./ItemSummary.css";

class ItemSummary extends Component {
  onDelete(type) {
    if (type === "order") {
      this.props.deleteOrder(this.props.id, this.props.auth.userId);
    } else if (type === "cart") {
      this.props.deleteCart(this.props.id, this.props.auth.userId);
    }
  }

  render() {
    return (
      <div className="item-summary-container">
        <section className="item-summary-desc">
          <p>
            <b>Item Name :</b> {this.props.title}
          </p>
          <p>
            <b>Price : </b> ${this.props.price}
          </p>
        </section>
        <section className="item-summary-fun">
          <button
            className="item-summary-button"
            // onClick={() =>
            //   this.props.deleteOrder(this.props.id, this.props.auth.userId)
            // }
            onClick={() => this.onDelete(this.props.type)}
          >
            Delete
          </button>
        </section>
      </div>
    );
  }
}

const mapStatesToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteOrder: (pid, userId) => dispatch(deleteOrder(pid, userId)),
    deleteCart: (pid, userId) => dispatch(deleteCart(pid, userId)),
  };
};

export default connect(mapStatesToProps, mapDispatchToProps)(ItemSummary);
