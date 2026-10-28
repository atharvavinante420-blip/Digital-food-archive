function SearchBar({ value, onChange }) {
  return (
    <div className="search-container">

      <span className="search-icon">
        🔎
      </span>

      <input
        type="text"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder="Search foods, regions, stories..."
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="search-clear"
        >
          ✕
        </button>
      )}

    </div>
  );
}

export default SearchBar;