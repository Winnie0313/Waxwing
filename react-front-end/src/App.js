import React from "react";
import axios from "axios";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import MaybeHome from "./components/MaybeHome";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NewCocktail from "./components/NewCocktail";

import Drink from "./components/Drink";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<MaybeHome />} />
          <Route path="/NewCocktail" element={<NewCocktail />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/drink/:type" element={<Drink />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
