import React, { useState, useEffect } from "react";
import warehouseData from "../mockup/warehouses";
import Warehouse from "./Warehouse";

import service from "../api/service";

import "../styles/WarehouseList.scss";

const WarehousesList = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [blockView, setBlockView] = useState(false);

  useEffect(() => {
    setWarehouses(warehouseData);
    let res = service.getAllItems();
    console.log("result :", res);
  }, []);

  const viewToggler = () => {
    setBlockView(!blockView);
  };

  return (
    <>
      <div className="app-warehouse-list__header">
        {blockView ? (
          <button onClick={viewToggler}>List View</button>
        ) : (
          <button onClick={viewToggler}>Block View</button>
        )}
      </div>
      {warehouses.length !== 0 ? (
        <div
          className={` app-warehouse-list app-warehouse-list${
            blockView ? "__block" : "__list"
          }`}
        >
          {warehouses.map((el, idx) => {
            return (
              <Warehouse
                key={idx}
                name={el.name}
                address={el.address}
                capacity={el.capacity}
                renderType={blockView}
              />
            );
          })}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default WarehousesList;
