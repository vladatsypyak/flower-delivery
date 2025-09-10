import React from 'react';
import './App.css';
import Shops from "./pages/Shops";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import CartPage from "./pages/Cart";
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Link to="/cart" className="text-blue-500 hover:underline">
              Корзина
          </Link>
          <Link to="/" className="text-blue-500 hover:underline">
              Shops
          </Link>
      </header>


        <Routes>
                <Route path="/" element={<Shops />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
    </div>
  );
}

export default App;
