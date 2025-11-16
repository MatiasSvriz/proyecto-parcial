import SeriesCard from "./SeriesCard.jsx";

export default function SeriesList({ results, onSelect, onToggleFavorite, favorites }) {
  if (!results || results.length === 0) {
    return <p className="series-answer"> No hay resultados.</p>;
  }

  return (
    <div className="series-list">
      {results.map((show) => (
        <SeriesCard key={show.id} show={show} onSelect={onSelect} onToggleFavorite={onToggleFavorite} isFavorite={favorites.some((f) => f.id === show.id)}/> 
      ))}
    </div>
  );
}
