import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/index";
import Card from "../Cards/Card";
import "./ProductsList.css";

class ProductsPage extends Component {
  componentDidMount() {
    this.props.getProductList();
  }

  filterBasedOnCategory(category) {
    return this.props.productsList.data.map((product) => {
      if (product["category"] === category) {
        return (
          <Card
            productTitle={product["title"]}
            productImage={product["image"]}
            productPrice={product["price"]}
            productId={product["id"]}
            key={product["id"]}
            productCategory={product["category"]}
          />
        );
      } else return null;
    });
  }

  render() {
    let { category } = this.props.match.params;
    return (
      <>
        <div className="p-main-container">
          <section>
            <h3>
              Showing results for{" "}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </h3>
          </section>
          <section className="p-cards-container">
            {this.props.productsList.data !== undefined
              ? this.filterBasedOnCategory(category)
              : null}
          </section>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsList: state.fetchProducts.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProductList: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
