import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductsDescription from "./components/ProductDescription/ProductsDescription";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/:category" exact component={ProductsList} />
        <Route path="/:category/:id" exact component={ProductsDescription} />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
