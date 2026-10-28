import { Link } from "react-router-dom";

function FoodCard({
  food,
  isFavorite,
  toggleFavorite
}) {
  return (
    <article className="food-card">

      <div className="food-image-container">

        <img
          src={food.image}
          alt={food.name}
          className="food-image"
        />

        <button
          type="button"
          className={`favorite-button ${
            isFavorite
              ? "favorite-active"
              : ""
          }`}
          onClick={() =>
            toggleFavorite(food.id)
          }
          aria-label={
            isFavorite
              ? "Remove from favorites"
              : "Add to favorites"
          }
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

      </div>


      <div className="food-card-content">

        <div className="food-meta">

          <span>
            {food.category}
          </span>

          <span>
            {food.region}
          </span>

        </div>


        <h3>
          {food.name}
        </h3>


        <p>
          {food.shortDescription}
        </p>


        <div className="food-card-footer">

          <span>
            📍 {food.location}
          </span>

          <Link to={`/food/${food.id}`}>
            Explore →
          </Link>

        </div>

      </div>

    </article>
  );
}

export default FoodCard;