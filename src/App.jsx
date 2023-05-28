import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Questions from "./pages/Questions/Questions";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Basket from "./pages/Basket/Basket";

const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
