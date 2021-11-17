import React from "react";

function Searchbar({ onChange, onClick, value }) {
  return (
    <header className="Searchbar">
      <form className="SearchForm">
        <button type="button" className="SearchForm-button" onClick={onClick}>
          {" "}
          Search
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={onChange}
          value={value}
        />
      </form>
    </header>
  );
}

export default Searchbar;
