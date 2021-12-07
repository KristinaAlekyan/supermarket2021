import React from "react";
import { Route, Routes } from "react-router-dom";

import WarehousesList from "./WarehouseList";
import Authentication from "./Authentication";
import ProductList from "./ProductList";
import Page404 from "./Page404";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Authentication />} />
      <Route exact path="/warehouses" element={<WarehousesList />} />
      <Route exact path="/warehouses/:wareId" element={<ProductList />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default AppRoutes;
