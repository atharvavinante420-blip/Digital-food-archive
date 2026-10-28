import foods from "../data/food";

function About() {
  return (
    <div className="about-page">

      <section className="page-header">

        <span className="section-label">
          ABOUT THE PROJECT
        </span>

        <h1>
          Preserving food memories
        </h1>

        <p>
          The Digital Food Archive is an
          online collection of food traditions,
          photographs and oral histories.
        </p>

      </section>


      <section className="about-content">

        <div>

          <span className="section-label">
            WHY THIS ARCHIVE?
          </span>

          <h2>
            Food connects generations.
          </h2>


          <p>
            Traditional foods are an important
            part of cultural heritage. Recipes,
            preparation methods and memories
            are often passed from one generation
            to another through families and
            communities.
          </p>


          <p>
            This archive provides a digital
            space where these stories can be
            collected, explored and preserved.
          </p>

        </div>


        <div className="about-stats">

          <div>
            <strong>
              {foods.length}
            </strong>

            <span>
              Foods
            </span>
          </div>


          <div>
            <strong>
              {new Set(
                foods.map(
                  (food) =>
                    food.storyteller
                )
              ).size}
            </strong>

            <span>
              Storytellers
            </span>
          </div>


          <div>
            <strong>
              {foods.length}
            </strong>

            <span>
              Oral Histories
            </span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;