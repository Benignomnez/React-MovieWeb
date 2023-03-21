import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'

function Sidebar({ movies }) {
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    setSelectedMovie(null); // reset the selected movie when starting a new query.
  }, [movies]);

  return (
    <div style={{ display: "flex", justifyContent:"center"}}>
      <aside>
        <ul className="list-group">
          {movies.map((movie) => (
            <li 
              className={`list-group-item ${selectedMovie && selectedMovie.imdbID === movie.imdbID ? 'active' : ''}`} 
              key={movie.imdbID} 
              onClick={() => setSelectedMovie(movie)}
            >
              {movie.Title}
            </li>
          ))}
        </ul>
      </aside>

      <div>
        {selectedMovie && (
          <img src={selectedMovie.Poster} style={{ marginTop: '60px', marginLeft: '80px'}} />
        )}
      </div>
    </div>
  );
}

export default Sidebar;
