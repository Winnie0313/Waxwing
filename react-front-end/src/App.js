import React, { useState, useMemo } from "react";
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
import Drink from "./components/Drink";
import { UserContext } from "./components/UserContext"

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser}), [user, setUser])


  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={value}>
          <NavigationBar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/NewCocktail" element={<NewCocktail />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Favourites" element={<Favourites />} />
            <Route path="/drink/:type" element={<Drink />} />
          </Routes>
        </UserContext.Provider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
