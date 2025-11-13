import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
import SeriesList from "./components/SeriesList.jsx";
import Favorites from "./components/Favorites.jsx";
import ModalDetail from "./components/ModalDetail.jsx";

export default function App() {
  const [results, setResults] = useState([]);

  async function searchShows(query) {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await res.json();
    console.log("Resultados:", data); // Debe mostrar un array
    
    // API devuelve: [{ score, show }]
    setResults(data.map(item => item.show));
  }

  return (
    <div>
      <h1>TVMaze Finder</h1>

      <SearchBar onSearch={searchShows} />

      <SeriesList results={results} />
    </div>
  );
}