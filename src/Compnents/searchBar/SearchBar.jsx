import React, { useState } from "react";
import "../searchBar/searchBar.scss";

function SearchBar() {
  const types = ["buy", "rent"];
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <form>
        <input
          type="text"
          name="location"
          placeholder="City Location"
          value={query.location}
          onChange={(e) =>
            setQuery((prev) => ({ ...prev, location: e.target.value }))
          }
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min price"
          // value={query.minPrice}
          // onChange={(e) =>
          //   setQuery((prev) => ({ ...prev, minPrice: e.target.value }))
          // }
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max price"
          // value={query.maxPrice}
          // onChange={(e) =>
          //   setQuery((prev) => ({ ...prev, maxPrice: e.target.value }))
          //}
        />
        <button type="submit">
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
