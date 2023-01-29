import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Product from './routes/Product';
import Shop from "./routes/Shop";

import Global from "./styles/Global";
import Search from './routes/Search';
import Reset from "./styles/Reset";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Reset></Reset>
            <Global></Global>
            <Routes>
                <Route path="/" element={<Shop></Shop>}></Route>
                <Route path="/product/:id" element={<Product></Product>}></Route>
                <Route path="/search" element={<Search></Search>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);