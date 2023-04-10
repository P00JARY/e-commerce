import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Store from "./pages/Store";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./Components/NavBar";
import { ShoppingCartProvider } from "./Context/shooppingCardContext";
import ShoppingCart from "./Components/ShoppingCart";

function App() {
  return (
    <ShoppingCartProvider>
      <NavBar />
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/cart"} element={<ShoppingCart />}></Route>
        <Route path={"/store"} element={<Store />}></Route>
        <Route path={"/about"} element={<About />}></Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
