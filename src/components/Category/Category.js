import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const images = {
  "men's clothing":
    "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fG1lbiVFMiU4MCU5OXMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  jewelery:
    "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  electronics:
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
  "women's clothing":
    "https://images.unsplash.com/photo-1523194258983-4ef0203f0c47?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
};

const Category = (props) => {
  return (
    <article className="cat-body">
      <div className="cat-image-container">
        <img
          src={images[props.name]}
          alt={props.name}
          className="cat-card-image"
        />
      </div>
      <div className="cat-card-content">
        <div className="cat-text">
          <h3>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>
          <Link to={`/${props.name}`} className="cat-button">
            View
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Category;
