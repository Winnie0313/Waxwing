import React from "react";
import axios from "axios";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import Favourites from "./components/Favourites/Favourites";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NewCocktail from "./components/NewCocktail";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/NewCocktail" element={<NewCocktail />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Favourites" element={<Favourites />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
