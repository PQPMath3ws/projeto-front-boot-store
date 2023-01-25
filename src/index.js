import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Shop from "./routes/Shop";

import Global from "./styles/Global";
import Reset from "./styles/Reset";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Reset></Reset>
            <Global></Global>
            <Routes>
                <Route path="/" element={<Shop></Shop>}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);