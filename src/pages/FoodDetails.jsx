import { Link, useParams } from "react-router-dom";

import foods from "../data/food";

function FoodDetails() {
  const { id } = useParams();

  const food = foods.find((item) => item.id === Number(id));

  if (!food) {
    return (
      <div className="not-found">
        <span className="eyebrow">404</span>

        <h1>Food not found.</h1>

        <Link to="/archive" className="button-primary">
          Back to archive
        </Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <Link to="/archive" className="details-back">
        ← Back to archive
      </Link>

      <section className="details-hero">
        <div className="details-photo reveal-3d">
          <img
            src={food.image}
            alt={food.name}
            onError={(event) => {
              event.currentTarget.src = "/images/puran-poli.jpg";
            }}
          />

          <span>{food.region}</span>
        </div>

        <div className="details-intro reveal-3d">
          <span className="eyebrow">{food.category}</span>

          <h1>{food.name}</h1>

          <p>{food.shortDescription}</p>

          <div className="details-meta">
            <span style={{ fontSize: "15px" }}>{food.location}</span>

            <span style={{ fontSize: "15px" }}>{food.period}</span>
          </div>
        </div>
      </section>

      <section className="details-content">
        {/* STORY */}

        <section className="details-story reveal-3d">
          <span className="eyebrow" style={{ fontSize: "30px", fontWeight:"bold" }}>
            THE STORY
          </span>

          <h2>More than a recipe.</h2>

          <p style={{textAlign:"justify"}}>{food.description}</p>
        </section>

        {/* INGREDIENTS */}

        <section className="ingredients-section reveal-3d">
          <span className="eyebrow">INGREDIENTS</span>

          <div className="ingredients-list">
            {food.ingredients.map((ingredient, index) => (
              <div key={ingredient} className="ingredient">
                <span style={{ fontSize: "15px" }}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{ingredient}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* ORAL HISTORY */}

        <section className="memory-block reveal-3d">
          <span className="memory-mark">“</span>

          <span className="eyebrow light">ORAL HISTORY</span>

          <h2>Memories of {food.person}</h2>

          <blockquote>{food.oralHistory}</blockquote>

          <span className="memory-person">— {food.person}</span>
        </section>

        {/* SOURCES */}

        <section className="details-sources reveal-3d">
          <span className="eyebrow">SOURCES & REFERENCES</span>

          <h2>Where this story comes from.</h2>

          <p>
            Research, interviews and references used for this archive entry.
          </p>

          <div className="source-list-details">
            {food.sources.map((source, index) => {
              if (source.url) {
                return (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-source"
                  >
                    <span style={{ fontSize: "20px" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <strong>{source.name}</strong>

                    <span>↗</span>
                  </a>
                );
              }

              return (
                <div key={index} className="detail-source">
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <strong>{source.name}</strong>

                  <span>—</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* TAGS */}
        {/* 
        <section className="tags-section reveal-3d">
          <span className="eyebrow">KEYWORDS</span>

          <div className="tags">
            {food.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </section> */}
      </section>
    </div>
  );
}

export default FoodDetails;
