import React, { useState, useEffect } from "react";

import "../styles/WarehouseList.scss";
import Warehouse from "./Warehouse";

const WarehousesList = () => {
  const [wh, setWh] = useState([]);
  const [blockView, setblockView] = useState(false);

  useEffect(() => {
    console.log("Component is mounted");
  }, []);

  return (
    <div className={` app-warehouse-list app-warehouse-list${blockView ? "__block" : "__list"}`}>
      <Warehouse
        name={"warehouse1"}
        address={"Mashtots"}
        capacity={100}
        renderType={blockView}
      />
      <Warehouse
        name={"warehouse2"}
        address={"Abovyan"}
        capacity={100}
        renderType={blockView}
      />
      <Warehouse
        name={"warehouse3"}
        address={"Tigran Mets"}
        capacity={200}
        renderType={blockView}
      />
      <Warehouse
        name={"warehouse4"}
        address={"Komitas"}
        capacity={200}
        renderType={blockView}
      />
    </div>
  );
};

export default WarehousesList;
