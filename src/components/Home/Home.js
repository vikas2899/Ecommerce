import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/index";
import Slider from "../Slider/Slider";
import { SliderData } from "../Slider/SliderData";
import Category from "../Category/Category";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  getUniqueCategories() {
    let categories = [];
    this.props.productsList.data.forEach((product) => {
      if (!categories.includes(product["category"])) {
        categories.push(product["category"]);
      }
    });
    return categories.map((category) => {
      return <Category name={category} key={category} />;
    });
  }

  render() {
    return (
      <div>
        <div className="h-main-container">
          <section>
            <Slider slides={SliderData} />
          </section>
          <section className="h-cards-container">
            {this.props.productsList.data !== undefined
              ? this.getUniqueCategories()
              : null}
          </section>
        </div>
      </div>
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
    getProducts: () => dispatch(fetchProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
