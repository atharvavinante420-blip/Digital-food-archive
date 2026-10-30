import {
  Link,
} from "react-router-dom";

import foods from "../data/food";

function About() {
  const creators = [
  {
    name: "Venkatesh K",
    role: "Research & Analysis",
    initials: "VK",
  },
  {
    name: "Yash Mathur",
    role: "UI/UX & Visual Design",
    initials: "YM",
  },
  {
    name: "Atharva Vinante",
    role: "Frontend Development",
    initials: "AV",
  },
  {
    name: "Shrinivas Gaonkar",
    role: "Content & Research",
    initials: "SG",
  },
  {
    name: "Shubhash Koushik V",
    role: "Documentation & Presentation",
    initials: "SK",
  },
  {
    name: "Omkar Dahiphale",
    role: "Backend & Integration",
    initials: "OD",
  },
  ];


  const regionCount =
    new Set(
      foods.map(
        (food) => food.region
      )
    ).size;


  return (
    <div className="about-page">

      {/* ABOUT HERO */}

      <section className="about-hero">

        <div className="reveal-3d">

          <span className="eyebrow">
            ABOUT THE PROJECT
          </span>

          <h1>
            Preserving
            <br />
            <em>food memories.</em>
          </h1>

        </div>


        <div className="about-hero-description reveal-3d">

          <p>
            Digital Food Archive is an
            exploration of food as cultural
            memory — documenting dishes,
            people, places and stories that
            connect generations.
          </p>

          <Link
            to="/archive"
            className="about-link"
          >
            Explore the collection →
          </Link>

        </div>

      </section>


      {/* LARGE STATEMENT */}

      <section className="about-statement">

        <span className="about-number reveal-3d">
          01
        </span>

        <div className="reveal-3d">

          <span className="eyebrow">
            OUR PURPOSE
          </span>

          <h2>
            A dish can be a recipe.
            <br />
            It can also be a memory.
          </h2>

          <p>
            Food traditions are often passed
            through conversation, family
            practice and shared experience.
            Our goal is to give those stories a
            digital space where they can be
            discovered and preserved.
          </p>

        </div>

      </section>


{/* STATS */}

<section className="about-stats">

  <div className="about-stat reveal-3d">

    <div className="stat-top">
      <span>
        ARCHIVE / 01
      </span>

      <span>
        ↗
      </span>
    </div>


    <div className="stat-number-wrap">

      <strong>
        {foods.length}
      </strong>

      <span className="stat-symbol">
        +
      </span>

    </div>


    <div className="stat-bottom">

      <span>
        DOCUMENTED
      </span>

      <h3>
        Food Stories
      </h3>

      <p>
        Traditional dishes,
        memories and cultural
        records.
      </p>

    </div>

  </div>


  <div className="about-stat reveal-3d">

    <div className="stat-top">
      <span>
        ARCHIVE / 02
      </span>

      <span>
        ◉
      </span>
    </div>


    <div className="stat-number-wrap">

      <strong>
        {regionCount}
      </strong>

      <span className="stat-symbol">
        ×
      </span>

    </div>


    <div className="stat-bottom">

      <span>
        COVERAGE
      </span>

      <h3>
        Regions
      </h3>

      <p>
        Places and communities
        connected through food.
      </p>

    </div>

  </div>


  <div className="about-stat reveal-3d">

    <div className="stat-top">
      <span>
        ARCHIVE / 03
      </span>

      <span>
        ●
      </span>
    </div>


    <div className="stat-number-wrap">

      <strong>
        {foods.length}
      </strong>

      <span className="stat-symbol">
        ◌
      </span>

    </div>


    <div className="stat-bottom">

      <span>
        VOICES
      </span>

      <h3>
        Oral Histories
      </h3>

      <p>
        Personal memories passed
        between generations.
      </p>

    </div>

  </div>

</section>


      {/* METHODOLOGY */}

      <section className="about-method">

        <div className="method-heading reveal-3d">

          <span className="eyebrow">
            OUR APPROACH
          </span>

          <h2>
            Document.
            <br />
            Understand.
            <br />
            Preserve.
          </h2>

        </div>


        <div className="method-list">

          <div className="method-item reveal-3d">

            <span>
              01
            </span>

            <div>

              <h3>
                Document
              </h3>

              <p>
                Gather food stories,
                locations, ingredients,
                memories, photographs
                and community voices.
              </p>

            </div>

          </div>


          <div className="method-item reveal-3d">

            <span>
              02
            </span>

            <div>

              <h3>
                Understand
              </h3>

              <p>
                Connect each food with
                the people, regions and
                traditions that give it
                meaning.
              </p>

            </div>

          </div>


          <div className="method-item reveal-3d">

            <span>
              03
            </span>

            <div>

              <h3>
                Preserve
              </h3>

              <p>
                Create a searchable digital
                archive that keeps these
                stories accessible for
                future generations.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* CREATORS */}

      <section className="creators">

        <div className="creators-heading reveal-3d">

          <span className="eyebrow">
            THE PEOPLE BEHIND IT
          </span>

          <h2>
            Made by people
            <br />
            <em>who care about stories.</em>
          </h2>

         <p>Meet the creators behind our website — the team responsible for its research, design, development, and documentation.</p>

        </div>


        <div className="creator-list">

          {creators.map(
            (creator, index) => (

              <div
                key={creator.name}
                className="creator reveal-3d"
              >

                <span className="creator-number">
                  {String(
                    index + 1
                  ).padStart(2, "0")}
                </span>


                <div className="creator-avatar">
                  {creator.initials}
                </div>


                <div className="creator-details">

                  <h3>
                    {creator.name}
                  </h3>

                  <p>
                    {creator.role}
                  </p>

                </div>


                <span className="creator-arrow">
                  ↗
                </span>

              </div>

            )
          )}

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="about-final">

        <div className="reveal-3d">

          <span className="eyebrow light">
            ENTER THE ARCHIVE
          </span>

          <h2>
            Start with
            <br />
            <em>one story.</em>
          </h2>

          <Link
            to="/archive"
            className="button-light"
          >
            Explore food stories →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default About;