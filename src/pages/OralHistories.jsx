import { Link } from "react-router-dom";

import foods from "../data/food";

function OralHistories() {
  return (
    <div className="oral-page">

      <section className="page-header">

        <span className="section-label">
          VOICES OF THE ARCHIVE
        </span>

        <h1>
          Oral Histories
        </h1>

        <p>
          Personal memories and stories
          that connect food with family,
          culture and place.
        </p>

      </section>


      <section className="stories-grid">

        {foods.map((food) => (

          <article
            className="story-card"
            key={food.id}
          >

            <div className="story-icon">
              🎙️
            </div>


            <span className="section-label">
              {food.region}
            </span>


            <h2>
              {food.storyteller}
            </h2>


            <h3>
              Memories of {food.name}
            </h3>


            <p>
              {food.oralHistory}
            </p>


            <Link
              to={`/food/${food.id}`}
            >
              Read full story →
            </Link>

          </article>

        ))}

      </section>

    </div>
  );
}

export default OralHistories;