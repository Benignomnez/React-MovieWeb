import React from "react";


 export default function headerMain({ items }) {
    return (
      <div>
        {items.map((item) => (
          <div key={item.imdbID}>
            <img src={item.Poster} alt={item.Title} />
            <p>{item.Title}</p>
            <p>{item.Year}</p>
          </div>
        ))}
      </div>
    );
  }
  
    
