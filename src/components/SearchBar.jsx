function SearchBar({
  value,
  onChange,
}) {
  return (
    <div className="search-box">

      <span className="search-symbol">
        ⌕
      </span>

      <input
        type="text"
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value
          )
        }
        placeholder="Search food, storyteller, region or story..."
        aria-label="Search the food archive"
      />

      {value && (
        <button
          type="button"
          className="search-clear"
          onClick={() => onChange("")}
        >
          ×
        </button>
      )}

    </div>
  );
}

export default SearchBar;