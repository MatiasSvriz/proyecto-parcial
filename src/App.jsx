import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar.jsx";
import SeriesList from "./components/SeriesList.jsx";
import ModalDetail from "./components/ModalDetail.jsx";
import Favorites from "./components/Favorites.jsx";
import "./App.css";

export default function App() {

  const [results, setResults] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );


  async function searchShows(query) {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await res.json();
    setResults(data.map((item) => item.show));
  }

  async function handleSelect(id) {
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const data = await res.json();
    setSelectedShow(data);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelectedShow(null);
  }

  function toggleFavorite(show){

    const exists = favorites.some((f) => f.id == show.id);

    let updated;
    if(exists){
      updated = favorites.filter((f) => f.id != show.id); //quitar de favorites
    } else {
      updated = [ ...favorites, show ]; // añadir a favorites
    }

    setFavorites(updated);

  }

  useEffect(() => {localStorage.setItem("favorites", JSON.stringify(favorites))}, [favorites]);

  return (
    <div>
      <h1>TVMaze Finder</h1>
      <SearchBar onSearch={searchShows} />
      <SeriesList results={results} onSelect={handleSelect} onToggleFavorite={toggleFavorite} favorites={favorites}/>
      <ModalDetail show={selectedShow} isOpen={isModalOpen} onClose={closeModal} />
      <Favorites favorites={favorites} onSelect={handleSelect} onToggleFavorite={toggleFavorite}/>
    </div>
  );
}
