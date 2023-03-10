import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Carrinho from "./pages/Cart/Cart";
import CheckOut from "./pages/Checkout/Checkout";

import Global from "./styles/Global";
import Reset from "./styles/Reset";

import Product from './routes/Product';
import Search from './routes/Search';
import Shop from "./routes/Shop";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Reset></Reset>
            <Global></Global>
            <Routes>
                <Route path="/" element={<Shop></Shop>}></Route>
                <Route path="/product/:id" element={<Product></Product>}></Route>
                <Route path="/search" element={<Search></Search>}></Route>
                <Route path="/cart" element={<Carrinho />} />
                <Route path="/checkout" element={<CheckOut />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
