import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../Products";
import { MyCart } from "../MyCart";
import { MyOrders } from "../MyOrders";
import { DefPage } from "../DefPage";
import { ItemProducts } from "../ItemProducts";

export const Routers = () => {
  return <div>
      <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/products/:id/details" element={<ItemProducts/>} />
        <Route path="/MyCart" element={<MyCart/>} />
        <Route path="/MyOrder" element={<MyOrders/>} />
        <Route   path="/" element={<DefPage/>} />

        <Route path="*" element={<h1>not found</h1>}/>
        {/* <Route path="IStore" element={<DefPage/>}></Route> */}
      </Routes>
    
  </div>
};
