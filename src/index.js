import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrinho from "./pages/Cart/Cart";
import CheckOut from "./pages/Checkout/Checkout";

import Global from "./styles/Global";
import Reset from "./styles/Reset";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Reset />
      <Global />
      <Routes>
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
