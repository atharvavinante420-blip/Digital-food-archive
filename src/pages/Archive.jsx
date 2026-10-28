import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  useSearchParams,
} from "react-router-dom";

import foods from "../data/food";

import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import FoodCard from "../components/FoodCard";

function Archive() {
  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();


  const [
    search,
    setSearch,
  ] = useState("");


  const [
    category,
    setCategory,
  ] = useState("");


  const [
    region,
    setRegion,
  ] = useState(
    searchParams.get("region") || ""
  );


  const [
    period,
    setPeriod,
  ] = useState("");


  // Keep URL region synchronized
  useEffect(() => {
    const urlRegion =
      searchParams.get("region") || "";

    setRegion(urlRegion);
  }, [searchParams]);


  // Dynamic filter options
  const categories = useMemo(
    () =>
      [
        ...new Set(
          foods.map(
            (food) => food.category
          )
        ),
      ].sort(),
    []
  );


  const regions = useMemo(
    () =>
      [
        ...new Set(
          foods.map(
            (food) => food.region
          )
        ),
      ].sort(),
    []
  );


  const periods = useMemo(
    () =>
      [
        ...new Set(
          foods.map(
            (food) => food.period
          )
        ),
      ].sort(),
    []
  );


  /*
    IMPORTANT:
    Always filter from ORIGINAL foods.
    Never filter the previous filtered result.
  */

  const filteredFoods = useMemo(() => {

    const query =
      search.trim().toLowerCase();


    return foods.filter(
      (food) => {

        const matchesSearch =
          query === "" ||
          food.name
            .toLowerCase()
            .includes(query) ||

          food.person
            .toLowerCase()
            .includes(query) ||

          food.region
            .toLowerCase()
            .includes(query) ||

          food.category
            .toLowerCase()
            .includes(query) ||

          food.shortDescription
            .toLowerCase()
            .includes(query) ||

          food.oralHistory
            .toLowerCase()
            .includes(query) ||

          food.tags.some((tag) =>
            tag
              .toLowerCase()
              .includes(query)
          );


        const matchesCategory =
          category === "" ||
          food.category === category;


        const matchesRegion =
          region === "" ||
          food.region === region;


        const matchesPeriod =
          period === "" ||
          food.period === period;


        return (
          matchesSearch &&
          matchesCategory &&
          matchesRegion &&
          matchesPeriod
        );
      }
    );

  }, [
    search,
    category,
    region,
    period,
  ]);


  const handleRegionChange =
    (value) => {

      setRegion(value);

      if (value) {
        setSearchParams({
          region: value,
        });
      } else {
        setSearchParams({});
      }
    };


  const clearFilters = () => {

    setSearch("");

    setCategory("");

    setRegion("");

    setPeriod("");

    setSearchParams({});
  };


  return (
    <div className="archive-page">

      {/* HEADER */}

      <section className="archive-hero">

        <div className="archive-heading reveal-3d">

          <span className="eyebrow">
            COLLECTION / 2026
          </span>

          <h1>
            The
            <br />
            <em>Archive.</em>
          </h1>

          <p>
            Search, filter and explore
            food traditions, voices and
            memories preserved across
            generations.
          </p>

        </div>


        <div className="archive-total reveal-3d">

          <strong>
            {filteredFoods.length}
          </strong>

          <span>
            DOCUMENTED
            <br />
            ENTRIES
          </span>

        </div>

      </section>


      {/* SEARCH + FILTER */}

      <section className="archive-controls reveal-3d">

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <FilterBar
          category={category}
          setCategory={setCategory}
          region={region}
          setRegion={handleRegionChange}
          period={period}
          setPeriod={setPeriod}
          categories={categories}
          regions={regions}
          periods={periods}
          clearFilters={clearFilters}
        />

      </section>


      {/* RESULTS */}

      <div className="archive-result-bar">

        <span>
          {filteredFoods.length}{" "}
          {filteredFoods.length === 1
            ? "entry"
            : "entries"}
        </span>


        {(search ||
          category ||
          region ||
          period) && (

          <button
            type="button"
            onClick={clearFilters}
          >
            Clear all filters ×
          </button>

        )}

      </div>


      {/* FOOD CARDS */}

      {filteredFoods.length > 0 ? (

        <div className="archive-grid">

          {filteredFoods.map(
            (food, index) => (

              <FoodCard
                key={food.id}
                food={food}
                index={index + 1}
              />

            )
          )}

        </div>

      ) : (

        <div className="empty-results">

          <span>
            00
          </span>

          <h2>
            Nothing found.
          </h2>

          <p>
            Try another search or reset
            your filters.
          </p>

          <button
            type="button"
            className="button-primary"
            onClick={clearFilters}
          >
            Reset archive
          </button>

        </div>

      )}

    </div>
  );
}

export default Archive;