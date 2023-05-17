import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../Products";
import { MyCart } from "../MyCart";
import { MyOrders } from "../MyOrders";
import { DefPage } from "../DefPage";

export const Routers = () => {
  return <div>
      <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/MyCart" element={<MyCart/>} />
        <Route path="/MyOrder" element={<MyOrders/>} />
        <Route index path="/" element={<DefPage/>} />
        <Route path="IStore" element={<DefPage/>}></Route>
      </Routes>
    
  </div>
};
