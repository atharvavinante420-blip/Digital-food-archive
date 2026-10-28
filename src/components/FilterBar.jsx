function FilterBar({
  category,
  region,
  period,
  setCategory,
  setRegion,
  setPeriod,
  clearFilters
}) {
  return (
    <div className="filter-bar">

      <div className="filter-group">

        <label htmlFor="category">
          Category
        </label>

        <select
          id="category"
          value={category}
          onChange={(event) =>
            setCategory(event.target.value)
          }
        >
          <option value="">
            All Categories
          </option>

          <option value="Sweet">
            Sweet
          </option>

          <option value="Main Course">
            Main Course
          </option>

          <option value="Snack">
            Snack
          </option>

          <option value="Breakfast">
            Breakfast
          </option>
        </select>

      </div>


      <div className="filter-group">

        <label htmlFor="region">
          Region
        </label>

        <select
          id="region"
          value={region}
          onChange={(event) =>
            setRegion(event.target.value)
          }
        >
          <option value="">
            All Regions
          </option>

          <option value="Maharashtra">
            Maharashtra
          </option>

          <option value="Karnataka">
            Karnataka
          </option>

          <option value="Punjab">
            Punjab
          </option>

          <option value="Gujarat">
            Gujarat
          </option>

          <option value="Bihar">
            Bihar
          </option>

          <option value="South India">
            South India
          </option>
        </select>

      </div>


      <div className="filter-group">

        <label htmlFor="period">
          Period
        </label>

        <select
          id="period"
          value={period}
          onChange={(event) =>
            setPeriod(event.target.value)
          }
        >
          <option value="">
            All Periods
          </option>

          <option value="Traditional">
            Traditional
          </option>
        </select>

      </div>


      <button
        type="button"
        className="clear-filter"
        onClick={clearFilters}
      >
        Clear Filters
      </button>

    </div>
  );
}

export default FilterBar;