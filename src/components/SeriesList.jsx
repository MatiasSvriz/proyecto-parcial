export default function SeriesList({ results }) {
  if (!results || results.length === 0) {
    return <p>No hay resultados.</p>;
  }

  return (
    <div>
      {results.map((show) => (
        <div key={show.id}>
          {show.name}
        </div>
      ))}
    </div>
  );
}
