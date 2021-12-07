import React, { useState, useEffect } from "react";

import productData from "../mockup/products";

import "../styles/ProductList.scss";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productData);
    // let res = service.getAllItems();
    // console.log("result :", res);
  }, []);

  return (
    <div className="app-products-list">
      <div className="app-products-list__search-bar">
        <input placeholder="Search not implemented yet" />
        <button>Search</button>
      </div>
      <div className="app-products-list__content">
        {products.length !== 0 ? (
          <>
            {products.map((el, idx) => {
              return (
                <Product
                  key={idx}
                  title={el.title}
                  price={el.price}
                  description={el.description}
                  category={el.category}
                  rating={el.rating.rate}
                />
              );
            })}
          </>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
