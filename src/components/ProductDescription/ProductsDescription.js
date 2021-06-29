import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProductById, addToCart } from "../../actions/index";
import "./ProductsDescription.css";

class ProductsDescription extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchProductById(id);
  }

  addToCart = (productId, pTitle, pPrice) => {
    if (this.props.auth.isSignedIn) {
      this.props.addToCart(this.props.auth.userId, productId, pTitle, pPrice);
      alert("Item added to Cart");
    } else {
      alert("Login First");
    }
  };

  showModal = () => {
    return (
      <section>
        <p>Item added to cart</p>
        <button>Ok</button>
      </section>
    );
  };

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
          <button
            className="addToCartBtn"
            onClick={() =>
              this.addToCart(
                this.props.productDetails.data.id,
                this.props.productDetails.data.title,
                this.props.productDetails.data.price
              )
            }
          >
            Add to Cart
          </button>
          <button className="buyBtn">Buy Now</button>
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
    auth: state.auth,
    modalShow: state.cart.modalShow,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProductById: (id) => dispatch(fetchProductById(id)),
    addToCart: (userId, pid, ptitle, pprice) =>
      dispatch(addToCart(userId, pid, ptitle, pprice)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsDescription);
