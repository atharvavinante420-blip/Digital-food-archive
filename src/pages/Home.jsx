import { Link } from "react-router-dom";

import foods from "../data/food";
import FoodCard from "../components/FoodCard";

function Home() {
  const featuredFoods = foods.slice(0, 3);

  return (
    <div className="home-page">
      {/* HERO */}

      <section className="hero">
        <div className="hero-content reveal-3d">
          <span className="eyebrow">DIGITAL FOOD ARCHIVE</span>

          <h1>
            Every dish
            <br />
            <em>has a story.</em>
          </h1>

          <p>
            A digital collection of food traditions, memories and voices passed
            through generations.
          </p>

          <div className="hero-actions">
            <Link to="/archive" className="button-primary">
              Explore archive
              <span>↗</span>
            </Link>

            <Link to="/oral-histories" className="hero-text-link">
              Hear the stories →
            </Link>
          </div>
        </div>

        <div className="hero-visual reveal-3d">
          <div className="archive-artwork">
            {/* Decorative background */}
            <div className="artwork-circle artwork-circle-large" />
            <div className="artwork-circle artwork-circle-small" />

            {/* Fine grid */}
            <div className="artwork-grid" />

            {/* Main archive card */}
            <div className="archive-card-main">
              <div className="archive-card-header">
                <span>DIGITAL FOOD ARCHIVE</span>

                <span>001</span>
              </div>

              <div className="archive-symbol">
                <svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
                  {/* Plate */}
                  <circle
                    cx="110"
                    cy="110"
                    r="78"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <circle
                    cx="110"
                    cy="110"
                    r="62"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />

                  {/* Food form */}
                  <path
                    d="M67 111
               C73 88, 91 78, 110 88
               C129 78, 147 88, 153 111"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  <path
                    d="M75 126
               C92 139, 128 139, 145 126"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  {/* Small decorative marks */}
                  <circle cx="83" cy="99" r="3" fill="currentColor" />

                  <circle cx="137" cy="99" r="3" fill="currentColor" />
                </svg>
              </div>

              <div className="archive-card-title">
                <span>FOOD / MEMORY</span>

                <h2>Every dish.</h2>

                <p>Every story.</p>
              </div>

              <div className="archive-card-footer">
                <span>PEOPLE</span>

                <span>PLACE</span>

                <span>MEMORY</span>
              </div>
            </div>

            {/* Floating archive label */}
            <div className="archive-note">
              <span>ARCHIVE ENTRY</span>

              <strong>01 / 06</strong>

              <div />

              <small>MAHARASHTRA</small>

              <small>INDIA</small>
            </div>

            {/* Floating symbol */}
            <div className="floating-icon floating-leaf">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M78 22
             C51 23, 29 39, 28 62
             C27 77, 40 84, 53 80
             C75 73, 82 49, 78 22Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <path
                  d="M27 79
             C39 63, 53 48, 73 31"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Floating spoon */}
            <div className="floating-icon floating-spoon">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <ellipse
                  cx="50"
                  cy="29"
                  rx="15"
                  ry="21"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <path
                  d="M50 50V82"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Archive seal */}
            <div className="archive-seal">
              <div className="seal-ring-text">
                FOOD • MEMORY • PLACE • FOOD • MEMORY • PLACE •
              </div>

              <div className="seal-center">FA</div>
            </div>

            {/* Small dots */}
            <span className="art-dot art-dot-1" />
            <span className="art-dot art-dot-2" />
            <span className="art-dot art-dot-3" />
          </div>
        </div>

        <div className="hero-bottom">
          <span>Scroll to explore</span>

          <div />

          <span>2026</span>
        </div>
      </section>

      {/* MANIFESTO */}

      <section className="manifesto">
        <div className="manifesto-number reveal-3d">01</div>

        <div className="manifesto-content reveal-3d">
          <span className="eyebrow">WHY THIS ARCHIVE EXISTS</span>

          <h2>
            Recipes disappear.
            <br />
            <em>Memories shouldn't.</em>
          </h2>

          <p>
            Food is more than something we eat. It carries geography,
            celebration, family, migration and memory. This archive gives those
            stories a place to live.
          </p>
        </div>
      </section>

      {/* FEATURED */}

      <section className="featured-section">
        <div className="section-heading reveal-3d">
          <div>
            <span className="eyebrow">FROM THE COLLECTION</span>

            <h2>Featured stories</h2>
          </div>

          <Link to="/archive" className="heading-link">
            View complete archive →
          </Link>
        </div>

        <div className="food-grid">
          {featuredFoods.map((food, index) => (
            <FoodCard key={food.id} food={food} index={index + 1} />
          ))}
        </div>
      </section>

      {/* REGIONS */}

      <section className="regions-section">
        <div className="regions-intro reveal-3d">
          <span className="eyebrow light">EXPLORE INDIA</span>

          <h2>
            One country.
            <br />
            <em>Many memories.</em>
          </h2>
        </div>

        <div className="regions-list">
          {[
            "Northern India",
            "Southern India",
            "Eastern India",
            "Western India",
            "Northeast India",
            "Central India",
          ].map((region, index) => (
            <Link
              key={region}
              to={`/archive?region=${encodeURIComponent(region)}`}
              className="region-row reveal-3d"
            >
              <span>{String(index + 1).padStart(2, "0")}</span>

              <strong>{region}</strong>

              <span>↗</span>
            </Link>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="final-cta">
        <div className="reveal-3d">
          <span className="eyebrow light">CONTINUE EXPLORING</span>

          <h2>
            What does your
            <br />
            <em>food remember?</em>
          </h2>

          <Link to="/archive" className="button-light">
            Enter the archive →
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
