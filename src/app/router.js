import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Gallery, ItemPage } from "../pages/index";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="item/:id" element={<ItemPage />} />
    </Routes>
  );
}
