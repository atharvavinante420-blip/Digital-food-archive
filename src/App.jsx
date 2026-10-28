import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import FoodDetails from "./pages/FoodDetails";
import OralHistories from "./pages/OralHistories";
import Favorites from "./pages/Favorites";
import About from "./pages/About";

import "./App.css";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];
  });

  const toggleFavorite = (id) => {
    setFavorites((currentFavorites) => {
      let updatedFavorites;

      if (currentFavorites.includes(id)) {
        updatedFavorites = currentFavorites.filter(
          (favoriteId) => favoriteId !== id
        );
      } else {
        updatedFavorites = [...currentFavorites, id];
      }

      localStorage.setItem(
        "favorites",
        JSON.stringify(updatedFavorites)
      );

      return updatedFavorites;
    });
  };

  return (
    <div className="app">
      <Navbar favoriteCount={favorites.length} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/archive"
            element={
              <Archive
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/food/:id"
            element={<FoodDetails />}
          />

          <Route
            path="/oral-histories"
            element={<OralHistories />}
          />

          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />
            }
          />

          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;