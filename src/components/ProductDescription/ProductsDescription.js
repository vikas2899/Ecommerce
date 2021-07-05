import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { fetchProductById, addToCart, addToOrder } from "../../actions/index";
import "./ProductsDescription.css";

Modal.setAppElement("#root");
class ProductsDescription extends Component {
  state = {
    isModalOpen: false,
    isLoginModal: false,
    isBuyClick: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    this.props.fetchProductById(id);
  }

  addToCart = (productId, pTitle, pPrice, pCategory) => {
    if (this.props.auth.isSignedIn) {
      this.props.addToCart(
        this.props.auth.userId,
        productId,
        pTitle,
        pPrice,
        pCategory
      );
      this.setState({ isModalOpen: true });
    } else {
      this.setState({ isLoginModal: true });
    }
  };

  buyItem = (productId, pTitle, pPrice, pCategory) => {
    if (this.props.auth.isSignedIn) {
      this.props.addToOrder(
        this.props.auth.userId,
        productId,
        pTitle,
        pPrice,
        pCategory
      );
      this.setState({ isBuyClick: true });
    } else {
      this.setState({ isLoginModal: true });
    }
  };

  // showModal = () => {
  //   return (
  //     <section>
  //       <p>Item added to cart</p>
  //       <button>Ok</button>
  //     </section>
  //   );
  // };

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
                this.props.productDetails.data.price,
                this.props.productDetails.data.category
              )
            }
          >
            Add to Cart
          </button>
          <button
            className="buyBtn"
            onClick={() =>
              this.buyItem(
                this.props.productDetails.data.id,
                this.props.productDetails.data.title,
                this.props.productDetails.data.price,
                this.props.productDetails.data.category
              )
            }
          >
            Buy Now
          </button>
        </section>
        <section>
          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={() => this.setState({ isModalOpen: false })}
            style={{
              overlay: {
                backgroundColor: `rgba(${192},${192},${192},${0.3})`,
              },
              content: {
                height: "300px",
                alignSelf: "center",
                top: "30%",
                left: "35%",
                width: "30%",
                alignContent: "center",
              },
            }}
          >
            <div className="modal-container">
              <h2 className="modal-header">Message</h2>
              <p className="modal-body">
                This product is added to your cart succesfully.
              </p>
              <button
                onClick={() => this.setState({ isModalOpen: false })}
                className="modal-btn"
              >
                Close
              </button>
            </div>
          </Modal>
        </section>
        <section>
          <Modal
            isOpen={this.state.isLoginModal}
            onRequestClose={() => this.setState({ isLoginModal: false })}
            style={{
              overlay: {
                backgroundColor: `rgba(${192},${192},${192},${0.3})`,
              },
              content: {
                height: "300px",
                alignSelf: "center",
                top: "30%",
                left: "35%",
                width: "30%",
                alignContent: "center",
              },
            }}
          >
            <div className="modal-container">
              <h2 className="modal-header">Warning</h2>
              <p className="modal-body">Please login first</p>
              <button
                onClick={() => this.setState({ isLoginModal: false })}
                className="modal-btn"
              >
                Close
              </button>
            </div>
          </Modal>
        </section>
        <section>
          <Modal
            isOpen={this.state.isBuyClick}
            onRequestClose={() => this.setState({ isBuyClick: false })}
            style={{
              overlay: {
                backgroundColor: `rgba(${192},${192},${192},${0.3})`,
              },
              content: {
                height: "300px",
                alignSelf: "center",
                top: "30%",
                left: "35%",
                width: "30%",
                alignContent: "center",
              },
            }}
          >
            <div className="modal-container">
              <h2 className="modal-header">Message</h2>
              <p className="modal-body">
                This product is purchased succesfully. We will find you.
              </p>
              <button
                onClick={() => this.setState({ isBuyClick: false })}
                className="modal-btn"
              >
                Close
              </button>
            </div>
          </Modal>
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
    addToCart: (userId, pid, ptitle, pprice, pCategory) =>
      dispatch(addToCart(userId, pid, ptitle, pprice, pCategory)),
    addToOrder: (userId, pid, ptitle, pprice, pCategory) =>
      dispatch(addToOrder(userId, pid, ptitle, pprice, pCategory)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsDescription);
