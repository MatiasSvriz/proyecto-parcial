export default function ModalDetail({ show, isOpen, onClose }) {
  if (!isOpen || !show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>✖</button>

        <img
          src={show.image?.medium || "/no-image.png"}
          alt={show.name}
          className="modal-image"
        />

        <h2>{show.name}</h2>

        {show.genres?.length > 0 && (
          <p className="modal-genres">{show.genres.join(" • ")}</p>
        )}

        <div
          className="modal-summary"
          dangerouslySetInnerHTML={{ __html: show.summary || "Sin descripción." }}
        ></div>
      </div>
    </div>
  );
}
