import React from "react";

import '../styles/Warehouse.scss'

const Warehouse = (props) => {
  const { name, address, capacity, renderType } = props;

  return (
    <div className={`app-warehouse__${renderType ? "block" : "list"}`}>
      <span>{name}</span>
      <span>{address}</span>
      <span>{capacity}</span>
    </div>
  );
};

export default Warehouse;
