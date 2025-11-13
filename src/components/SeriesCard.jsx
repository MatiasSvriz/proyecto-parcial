export default function SeriesCard({ show, onSelect }) {
  const imageSrc = show.image?.medium || "/no-image.png";

  return (
    <div className="series-card">
      <img
        src={imageSrc}
        alt={show.name}
        className="series-card-image"
        onClick={() => onSelect(show.id)}
      />
      <h3 className="series-card-title">{show.name}</h3>
    </div>
  );
}
