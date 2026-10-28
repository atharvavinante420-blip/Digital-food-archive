import { Link } from "react-router-dom";

import foods from "../data/food";
import FoodCard from "../components/FoodCard";

function Home({
  favorites,
  toggleFavorite
}) {
  const featuredFoods = foods.slice(0, 3);

  return (
    <div>

      <section className="hero">

        <div className="hero-content">

          <span className="hero-label">
            PRESERVING FOOD HERITAGE
          </span>

          <h1>
            Stories, memories
            <br />
            & flavors of India
          </h1>

          <p>
            Explore traditional foods through
            photographs, memories and oral
            histories passed down through
            generations.
          </p>

          <Link
            to="/archive"
            className="primary-button"
          >
            Explore the Archive →
          </Link>

        </div>


        <div className="hero-visual">
          🍛
        </div>

      </section>


      <section className="intro-section">

        <span className="section-label">
          THE ARCHIVE
        </span>

        <h2>
          Food is more than what we eat.
        </h2>

        <p>
          Every dish carries a story about
          people, places, traditions and
          memories. The Digital Food Archive
          brings these stories together in
          one place.
        </p>

      </section>


      <section className="section">

        <div className="section-heading">

          <div>

            <span className="section-label">
              FEATURED
            </span>

            <h2>
              Explore traditional foods
            </h2>

          </div>

          <Link to="/archive">
            View all →
          </Link>

        </div>


        <div className="food-grid">

          {featuredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
              isFavorite={favorites.includes(
                food.id
              )}
              toggleFavorite={
                toggleFavorite
              }
            />
          ))}

        </div>

      </section>


      <section className="categories-section">

        <span className="section-label">
          EXPLORE
        </span>

        <h2>
          Explore by region
        </h2>


        <div className="category-grid">

          <Link to="/archive?region=Maharashtra">
            <span>🌾</span>
            Maharashtra
          </Link>

          <Link to="/archive?region=Karnataka">
            <span>🌴</span>
            Karnataka
          </Link>

          <Link to="/archive?region=Punjab">
            <span>🌻</span>
            Punjab
          </Link>

          <Link to="/archive?region=Gujarat">
            <span>🥘</span>
            Gujarat
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;