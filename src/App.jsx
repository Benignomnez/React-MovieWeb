import React, { useState } from "react";
import Header from "./component/header";
import Sidebar from "./component/sidebar";
import Footer from "./component/Footer";

function App() {
  const [movies, setMovies] = useState([]);

  const movieSearch = (results) => {
    setMovies(results);
  };

  return (
    <div>
      <Header onSearch={movieSearch} movies={movies} />
      <div className="main">
        <Sidebar movies={movies} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
