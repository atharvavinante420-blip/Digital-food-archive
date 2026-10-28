import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Archive from "./pages/Archive";
import FoodDetails from "./pages/FoodDetails";
import OralHistories from "./pages/OralHistories";
import About from "./pages/About";

import "./App.css";

function AppEffects() {
  const location = useLocation();

  // Scroll to top whenever route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname, location.search]);

  // 3D scroll reveal
  useEffect(() => {
    const timer = setTimeout(() => {
      const elements =
        document.querySelectorAll(
          ".reveal-3d"
        );

      if (!elements.length) {
        return;
      }

      const observer =
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add(
                  "reveal-visible"
                );

                observer.unobserve(
                  entry.target
                );
              }
            });
          },
          {
            threshold: 0.12,
          }
        );

      elements.forEach((element) => {
        observer.observe(element);
      });

      return () => {
        observer.disconnect();
      };
    }, 50);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname, location.search]);

  return null;
}

function App() {
  return (
    <div className="app">

      <AppEffects />

      <Navbar />

      <main>
        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/archive"
            element={<Archive />}
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
            path="/about"
            element={<About />}
          />

          {/* fallback */}
          <Route
            path="*"
            element={<Home />}
          />

        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;