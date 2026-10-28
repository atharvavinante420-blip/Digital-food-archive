import { Link, useParams } from "react-router-dom";

import foods from "../data/food";

function FoodDetails() {
  const { id } = useParams();

  const food = foods.find(
    (item) => item.id === Number(id)
  );


  if (!food) {
    return (
      <div className="not-found">

        <h1>
          Food not found
        </h1>

        <Link to="/archive">
          ← Back to Archive
        </Link>

      </div>
    );
  }


  return (
    <article className="food-details">

      <Link
        to="/archive"
        className="back-link"
      >
        ← Back to Archive
      </Link>


      <div className="details-hero">

        <img
          src={food.image}
          alt={food.name}
        />


        <div className="details-intro">

          <div className="food-meta">

            <span>
              {food.category}
            </span>

            <span>
              {food.region}
            </span>

          </div>


          <h1>
            {food.name}
          </h1>


          <p>
            {food.shortDescription}
          </p>


          <div className="location">
            📍 {food.location}
          </div>

        </div>

      </div>


      <div className="details-content">

        <section>

          <span className="section-label">
            ABOUT THE FOOD
          </span>

          <h2>
            Its story
          </h2>

          <p>
            {food.description}
          </p>

        </section>


        <section>

          <span className="section-label">
            INGREDIENTS
          </span>

          <h2>
            Traditional ingredients
          </h2>


          <ul className="ingredients-list">

            {food.ingredients.map(
              (ingredient, index) => (
                <li key={index}>
                  {ingredient}
                </li>
              )
            )}

          </ul>

        </section>


        <section className="oral-history">

          <span className="section-label">
            ORAL HISTORY
          </span>

          <h2>
            A memory from the community
          </h2>


          <blockquote>
            “{food.oralHistory}”
          </blockquote>


          <p className="storyteller">
            — {food.storyteller}
          </p>

        </section>


        <section>

          <span className="section-label">
            TAGS
          </span>


          <div className="tags">

            {food.tags.map((tag) => (
              <span key={tag}>
                #{tag}
              </span>
            ))}

          </div>

        </section>

      </div>

    </article>
  );
}

export default FoodDetails;