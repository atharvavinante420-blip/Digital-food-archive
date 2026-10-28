import { Link } from "react-router-dom";

import foods from "../data/food";

function Favorites({
  favorites,
  toggleFavorite
}) {
  const favoriteFoods =
    foods.filter((food) =>
      favorites.includes(food.id)
    );


  return (
    <div className="favorites-page">

      <section className="page-header">

        <span className="section-label">
          YOUR COLLECTION
        </span>

        <h1>
          Favorite Foods
        </h1>

        <p>
          Foods and stories you want
          to remember.
        </p>

      </section>


      {favoriteFoods.length === 0 ? (

        <div className="empty-state">

          <div>
            ❤️
          </div>

          <h2>
            No favorites yet
          </h2>

          <p>
            Explore the archive and save
            foods that interest you.
          </p>

          <Link
            to="/archive"
            className="primary-button"
          >
            Explore Archive
          </Link>

        </div>

      ) : (

        <div className="food-grid">

          {favoriteFoods.map(
            (food) => (

              <article
                className="simple-food-card"
                key={food.id}
              >

                <img
                  src={food.image}
                  alt={food.name}
                />


                <div>

                  <span>
                    {food.region}
                  </span>

                  <h3>
                    {food.name}
                  </h3>


                  <button
                    type="button"
                    className="remove-favorite"
                    onClick={() =>
                      toggleFavorite(
                        food.id
                      )
                    }
                  >
                    Remove from favorites
                  </button>

                </div>

              </article>

            )
          )}

        </div>

      )}

    </div>
  );
}

export default Favorites;