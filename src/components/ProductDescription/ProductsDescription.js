import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductById } from "../../actions/index";
import "./ProductsDescription.css";

class ProductsDescription extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProductById(id);
  }

  componentWillUnmount() {}

  getProductDetails() {
    return (
      <>
        <section className="product-image">
          <img
            src={this.props.productDetails.data.image}
            alt={this.props.productDetails.data.title}
            className="p-image"
          />
        </section>
        <section className="product-details">
          <h3 className="p-title">{this.props.productDetails.data.title}</h3>
          <p className="p-category">
            Category : {this.props.productDetails.data.category}
          </p>
          <p className="p-price">
            Price : <b>${this.props.productDetails.data.price}</b>
          </p>
          <p className="p-description">
            {this.props.productDetails.data.description}
          </p>
          <button>Buy Now</button>
        </section>
      </>
    );
  }

  render() {
    return (
      <div className="product-container">
        {this.props.productDetails.data !== undefined
          ? this.getProductDetails()
          : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productDetails: state.fetchProduct.product,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductById: (id) => dispatch(fetchProductById(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsDescription);
