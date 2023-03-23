import React, { useReducer, useEffect } from 'react';
import axios from 'axios';


export default function HeaderAction() {

    const [state, dispatch] = useReducer(reducer, { query: "", items: [] });

    useEffect(() => {
      // Call the API endpoint to retrieve items based on the query
      axios
        .get(`https://api.example.com/items?q=${state.query}`)
        .then((response) => {
          dispatch({ type: "set_items", payload: response.data.items });
        })
        .catch((error) => {
          console.log(error);
        });
    }, [state.query]);

    const handleSearch = () => {
      // Trigger the API request when the search button is clicked
      axios
        .get(`https://api.example.com/items?q=${state.query}`)
        .then((response) => {
          dispatch({ type: "set_items", payload: response.data.items });
        })
        .catch((error) => {
          console.log(error);
        });
    };
  };

