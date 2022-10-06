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
import { UserContext } from "./components/UserContext";
import Searched from "./components/Search/Searched";
import SearchByIngred from "./components/Search/SearchByIngred";
import SearchedIng from "./components/Search/SearchedIng";
import SearchedFirst from "./components/Search/SearchedFirst";
import Drink from "./components/Drink";
import SearchByFirst from "./components/Search/SearchByFirst";
import Search from "./components/Search/Search";
import ShowRecipe from "./components/ShowRecipe/ShowRecipe";
import MyDrinks from "./components/MyDrinks";
import { Toaster } from 'react-hot-toast';

import { MyContext } from "./components/MyContext";
import MyRecipe from "./components/ShowRecipeNewDrink/MyRecipe";

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  /// adding new cocktail
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <Toaster />
      <Router>
        <UserContext.Provider value={value}>
          <MyContext.Provider value={{ data, setData }}>
            <NavigationBar />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/NewCocktail" element={<NewCocktail />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Favourites" element={<Favourites />} />
              <Route path="/drink/:type" element={<Drink />} />

              {/* view recipe page */}
              <Route path="/recipes/:id" element={<ShowRecipe />} />
              {/* {search by name } */}
              <Route path="/search" element={<Search />} />
              <Route path="/searched/:search" element={<Searched />} />
              {/* {search by name } */}
              <Route path="/search" element={<Search />} />
              <Route path="/searched/:search" element={<Searched />} />

              {/* search by ingredients routes */}
              <Route path="/SearchByIngred/" element={<SearchByIngred />} />
              <Route path="/searchedIng/:search" element={<SearchedIng />} />

              {/* search by first letter routes */}
              <Route path="/SearchByFirst/" element={<SearchByFirst />} />
              <Route
                path="/searchedFirst/:search"
                element={<SearchedFirst />}
              />

              {/* path for new drinks */}
              <Route path="/myDrinks" element={<MyDrinks />} />
              {/* path for my recipe */}
              <Route path="/MyRecipe/:id" element={<MyRecipe />} />

              {/* to catch all routes that don't match any of the above , and redirect to home page */}
              <Route path="*" element={<Homepage />} />
            </Routes>
          </MyContext.Provider>
        </UserContext.Provider>
        <Footer style={{ position: "relative" }} />
      </Router>
    </div>
  );
}

export default App;
