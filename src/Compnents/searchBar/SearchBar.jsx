import React from "react";
import "../searchBar/searchBar.scss";
import { useState } from "react";
const types = ["buy", "rent"];
function SearchBar() {
  const [queary, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });
  return (
    <div className="SearchBar">
      <div className="type">
        {types.map((type) => {
          <button key={type} onClick={() => switchType(type)}>
            {type}
          </button>;
        })}
        <button onClick={() => switchType("rent")}>Rent</button>
      </div>
      <form>
        <input type="text" name="locaton" id="" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          id=""
          placeholder="Min price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          id=""
          placeholder="Max price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
