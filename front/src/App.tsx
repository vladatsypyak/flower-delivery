import React from 'react';
import './App.css';
import Shops from "./pages/Shops";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CartPage from "./pages/Cart";
import { Link } from "react-router-dom";
import {ShoppingBag} from "lucide-react";


function App() {
  return (
    <div className="App max-w-[1600px] mx-auto">
        <header className="App-header flex gap-7 justify-end p-5 max-w-[1200px] mx-auto">
            <div>
                <Link to="/" className="text-emerald-800 hover:underline focus:text-emerald-400 focus:font-semibold ">
                    Shop
                </Link>
            </div>
            <div>
                <Link to="/cart" className="group">
                    <ShoppingBag className="text-[#33432d] group-focus:text-emerald-400" />
                </Link>
            </div>
        </header>



        <Routes>
                <Route path="/" element={<Shops />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
    </div>
  );
}

export default App;
