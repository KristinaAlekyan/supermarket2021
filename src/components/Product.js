import React from "react";

import "../styles/Product.scss";

const Product = ({ title, price, description, category, image, rating }) => {
  return (
    <div className="app-product">
      <div className="app-product__main">
        {title}
        <span>{price}</span>
      </div>
      <div className="app-product__description">{description}</div>
      <div className="app-product__category-rating">
        {category}
        <span>{rating}</span>
      </div>
    </div>
  );
};

export default Product;
