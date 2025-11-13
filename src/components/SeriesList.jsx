import SeriesCard from "./SeriesCard.jsx";

export default function SeriesList({ results }) {
  if (!results || results.length === 0) {
    return <p>No hay resultados.</p>;
  }

  return (
    <div className="series-list">
      {results
        .filter((show) => show)
        .map((show) => (
          <SeriesCard key={show.id} show={show} />
        ))}
    </div>
  );
}
