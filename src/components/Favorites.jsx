import SeriesCard from "./SeriesCard";

export default function Favorites({ favorites, onSelect, onToggleFavorite }) {

  if(!favorites || favorites.length === 0){
    return <p>No hay favoritos aún.</p>
  }

  return (
    <div className="favorites-list">
      
      {favorites.map((show) => (<SeriesCard key={show.id} show={show} onSelect={onSelect} onToggleFavorite={onToggleFavorite} isFavorite={true} />))}

    </div>
  );
}
