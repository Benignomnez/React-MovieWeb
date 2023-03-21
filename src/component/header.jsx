import React, { useState } from "react";
import logo from '../image/—Pngtree—coding 3d icon render_8620735 (1).png'

function Header({ onSearch }) {
  const [search, setSearch] = useState("");
  const [totalResults, setTotalResults] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=1ffb85e1&s=${search}`
    );
    const data = await response.json();
    const total = parseInt(data.totalResults, 20);
    setTotalResults(total);
    onSearch(data.Search);
  };

  return (
    <header className="header">
      <img className="logo" src={logo} alt="BMG logo" />
      <p className="text-muted">BMG Web Develop</p>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="search">Search for movies:</label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit" className="btn btn-success">Search</button>
      </form>
      <p className="total-results">Total results: {totalResults}</p>
    </header>
  );
}

export default Header;
