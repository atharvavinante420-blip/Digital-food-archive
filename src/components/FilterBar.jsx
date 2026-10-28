function FilterBar({
  category,
  setCategory,
  region,
  setRegion,
  period,
  setPeriod,
  categories,
  regions,
  periods,
  clearFilters,
}) {
  return (
    <div className="filter-bar">

      <div className="filter-field">

        <label htmlFor="category">
          CATEGORY
        </label>

        <select
          id="category"
          value={category}
          onChange={(event) =>
            setCategory(
              event.target.value
            )
          }
        >

          <option value="">
            All categories
          </option>

          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}

        </select>

      </div>


      <div className="filter-field">

        <label htmlFor="region">
          REGION
        </label>

        <select
          id="region"
          value={region}
          onChange={(event) =>
            setRegion(
              event.target.value
            )
          }
        >

          <option value="">
            All regions
          </option>

          {regions.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}

        </select>

      </div>


      <div className="filter-field">

        <label htmlFor="period">
          PERIOD
        </label>

        <select
          id="period"
          value={period}
          onChange={(event) =>
            setPeriod(
              event.target.value
            )
          }
        >

          <option value="">
            All periods
          </option>

          {periods.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}

        </select>

      </div>


      <button
        type="button"
        className="filter-reset"
        onClick={clearFilters}
      >
        Reset
      </button>

    </div>
  );
}

export default FilterBar;