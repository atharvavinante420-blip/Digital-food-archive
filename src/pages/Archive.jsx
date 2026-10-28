import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import foods from "../data/food";

import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import FoodCard from "../components/FoodCard";

function Archive({
  favorites,
  toggleFavorite
}) {
  const [searchParams] =
    useSearchParams();

  const initialRegion =
    searchParams.get("region") || "";

  const [search, setSearch] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [region, setRegion] =
    useState(initialRegion);

  const [period, setPeriod] =
    useState("");


  const clearFilters = () => {
    setSearch("");
    setCategory("");
    setRegion("");
    setPeriod("");
  };


  const filteredFoods = foods.filter(
    (food) => {

      const searchText =
        search.toLowerCase().trim();


      const matchesSearch =
        food.name
          .toLowerCase()
          .includes(searchText) ||

        food.region
          .toLowerCase()
          .includes(searchText) ||

        food.category
          .toLowerCase()
          .includes(searchText) ||

        food.storyteller
          .toLowerCase()
          .includes(searchText) ||

        food.oralHistory
          .toLowerCase()
          .includes(searchText) ||

        food.tags.some((tag) =>
          tag
            .toLowerCase()
            .includes(searchText)
        );


      const matchesCategory =
        !category ||
        food.category === category;


      const matchesRegion =
        !region ||
        food.region === region;


      const matchesPeriod =
        !period ||
        food.period === period;


      return (
        matchesSearch &&
        matchesCategory &&
        matchesRegion &&
        matchesPeriod
      );
    }
  );


  return (
    <div className="archive-page">

      <section className="page-header">

        <span className="section-label">
          DIGITAL ARCHIVE
        </span>

        <h1>
          Explore the Food Archive
        </h1>

        <p>
          Discover traditional foods,
          photographs and stories from
          different regions.
        </p>

      </section>


      <section className="archive-controls">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <FilterBar
          category={category}
          region={region}
          period={period}
          setCategory={setCategory}
          setRegion={setRegion}
          setPeriod={setPeriod}
          clearFilters={clearFilters}
        />

      </section>


      <section className="archive-results">

        <div className="results-header">

          <h2>
            {filteredFoods.length}{" "}

            {filteredFoods.length === 1
              ? "food"
              : "foods"}{" "}
            found
          </h2>


          {(search ||
            category ||
            region ||
            period) && (
            <button
              type="button"
              onClick={clearFilters}
            >
              Reset all
            </button>
          )}

        </div>


        {filteredFoods.length > 0 ? (

          <div className="food-grid">

            {filteredFoods.map(
              (food) => (

                <FoodCard
                  key={food.id}
                  food={food}
                  isFavorite={
                    favorites.includes(
                      food.id
                    )
                  }
                  toggleFavorite={
                    toggleFavorite
                  }
                />

              )
            )}

          </div>

        ) : (

          <div className="no-results">

            <div>
              🔎
            </div>

            <h2>
              No foods found
            </h2>

            <p>
              Try changing your search
              or filters.
            </p>

            <button
              type="button"
              className="primary-button"
              onClick={clearFilters}
            >
              Clear Filters
            </button>

          </div>

        )}

      </section>

    </div>
  );
}

export default Archive;