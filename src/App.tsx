import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Phones from "./pages/Phones";
import Footer from "./components/Footer";

import Page from "./constant/Page";
import "./scss/App.scss";
import DescriptionPhone from "./pages/DescriptionlPhone";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_container">
        <Routes>
          <Route path={Page.Home} element={<Home />} />
          <Route path={Page.Favorites} element={<Favorites />} />
          <Route path={Page.Cart} element={<Cart />} />
          <Route path={Page.Phones} element={<Phones />} />
          <Route path="/phones/:name" element={<DescriptionPhone />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
