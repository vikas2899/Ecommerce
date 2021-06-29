import React from "react";
import "./ItemSummary.css";

const ItemSummary = (props) => {
  return (
    <div className="item-summary-container">
      <section className="item-summary-desc">
        <p>
          <b>Item Name :</b> {props.title}
        </p>
        <p>
          <b>Price : </b> ${props.price}
        </p>
      </section>
      <section className="item-summary-fun">
        <button className="item-summary-button">Delete</button>
      </section>
    </div>
  );
};

export default ItemSummary;
