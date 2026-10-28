import { Link } from "react-router-dom";

function FoodCard({ food, index }) {
  return (
    <article className="food-card reveal-3d">
      <Link to={`/food/${food.id}`} className="food-card-image">
        <img
          src={food.image}
          alt={food.name}
          onError={(event) => {
            event.currentTarget.src = "/images/puran-poli.jpg";
          }}
        />

        <div className="food-card-overlay" />

        <span className="food-card-number">
          {String(index ?? food.id).padStart(2, "0")}
        </span>

        <span className="food-card-region">{food.region}</span>
      </Link>

      <div className="food-card-body">
        <span className="food-card-category">{food.category}</span>

        <h3>{food.name}</h3>

        <p className="food-card-description">{food.shortDescription}</p>

        <div className="food-card-location">⌖ {food.location}</div>

        {/* <div className="card-sources">

          <span className="sources-label">
            SOURCES
          </span>

          <div className="sources-list">

            {food.sources.map(
              (source, sourceIndex) => {

                if (source.url) {
                  return (
                    <a
                      key={sourceIndex}
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.name}
                      <span>↗</span>
                    </a>
                  );
                }

                return (
                  <span
                    key={sourceIndex}
                    className="source-text"
                  >
                    {source.name}
                  </span>
                );
              }
            )}

          </div>

        </div> */}

        <Link to={`/food/${food.id}`} className="food-card-link">
          Explore story
          <span>→</span>
        </Link>
      </div>
    </article>
  );
}

export default FoodCard;
