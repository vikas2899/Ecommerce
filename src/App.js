import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductsDescription from "./components/ProductDescription/ProductsDescription";
import Cart from "./components/Cart/Cart";
import Order from "./Order/Order";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route
          path="/products/:category/:id"
          exact
          component={ProductsDescription}
        />
        <Route path="/:category" exact component={ProductsList} />
        <Route path="/view/:id/cart" exact component={Cart} />
        <Route path="/view/:id/orders" exact component={Order} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
