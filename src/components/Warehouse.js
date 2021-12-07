import React from "react";
import { useNavigate } from "react-router-dom";

import "../styles/Warehouse.scss";

const Warehouse = (props) => {
  const { id,name, address, capacity, renderType } = props;
  let navigate = useNavigate();

  return (
    <div className={`app-warehouse__${renderType ? "block" : "list"}`} onClick={() => navigate(`/warehouses/${id}`)}>
      <span>{name}</span>
      <span>{address}</span>
      <span>{capacity}</span>
    </div>
  );
};

export default Warehouse;
