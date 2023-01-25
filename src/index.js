import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Carrinho from "./pages/Cart/Cart";

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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
