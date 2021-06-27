import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <article className="card-body">
      <div className="image-container">
        <img
          src={props.productImage}
          alt={props.productTitle}
          className="card-image"
        />
      </div>
      <div className="card-content">
        <div className="text">
          <h3>{props.productTitle}</h3>
          <p>Price : ${props.productPrice}</p>
          <Link
            to={`/${props.productCategory}/${props.productId}`}
            className="button"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Card;

// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
//   }
