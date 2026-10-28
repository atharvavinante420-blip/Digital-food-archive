import { Link } from "react-router-dom";

import foods from "../data/food";

function OralHistories() {
  return (
    <div className="oral-page">
      <section className="oral-hero">
        <div className="reveal-3d">
          <span className="eyebrow">VOICES / MEMORY / PLACE</span>

          <h1>
            Oral
            <br />
            <em>Histories.</em>
          </h1>
        </div>

        <p className="reveal-3d">
          Behind every recipe is a person who remembers it, prepares it and
          passes it forward.
        </p>
      </section>

      <section className="stories-list">
        {foods.map((food, index) => (
          <article key={food.id} className="story-row reveal-3d">
            <span className="story-number">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="story-person">
              <span className="eyebrow">{food.region}</span>

              <h2>{food.person}</h2>

              <span>{food.location}</span>
            </div>

            <div className="story-text">
              <h3>Memories of {food.name}</h3>

              <p>{food.oralHistory}</p>

              <Link to={`/food/${food.id}`}>Read archive entry →</Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

export default OralHistories;
